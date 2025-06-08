

const FADE_IN_AMOUNT = 100;
const UP = 100;


export const travelNodeAppearAnimation = (tl, list, travelNode, isPrev) => {
    
    
    tl.set(list.virtualHeadLine, {
        attr: {
            stroke: `${isPrev ? 
                        list.VIRTUAL_TAIL_LINE_PREV_COLOR 
                      : list.VIRTUAL_TAIL_LINE_COLOR}`,
            "stroke-linecap": ""
        }
    })
    travelNode.fadeIn(tl, FADE_IN_AMOUNT);
    travelNode.expandLineDownWard(tl);
    if (isPrev)
        list.changeHeadStyle(tl, list.HEAD_PREV_VISIT_STYLE);
    else
        list.changeHeadStyle(tl, list.HEAD_CURRENT_VISIT_STYLE);
    travelNode.scaleDown(tl);
    travelNode.shrinkLine(tl)
    .to(list.virtualHeadLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH, 0)}`,
        }
    });



    return tl;
}

export const searchAnimation = (tl, list, target, travelNode) => {
    travelNodeAppearAnimation(tl, list, travelNode);
    travelNode.LINE_HEIGHT -= list.HEIGHT/2 - list.HEAD_HEIGHT;
    
    let prev = null;
    let current = list.head;
    let i = 1;
    while (current != null) {
        current.changeStyle(tl, current.CURRENT_VISIT_STYLE);
        if (prev === null) {
            list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE)
            .to(list.virtualHeadLine, {
                attr: {
                    d: `${list.getHeadLineAttrAfterMovingFirstPoint(list.REF_LINE_WIDTH, 0, list.REF_LINE_WIDTH, 0)}`
                }
            });
        }
        else {
            prev.animeRefStyle(tl, prev.REF_NORMAL_STYLE);
            prev.shrinkLineTo(tl, prev.virtualRefLine, prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH,  prev.REF_NODE_HEIGHT/2);
        }
        
        travelNode.startX += list.GAP + list.WIDTH;
        travelNode.setNewPos(tl, travelNode.startX, travelNode.startY);
        travelNode.expandLineUpWard(tl);
        travelNode.scaleUp(tl);

        if (current.value === target) {
            travelNode.moveUp(tl, UP);
            current.moveUp(tl, UP, "<");
            current.moveFirstPointOfLine(tl, current.refLine, 0, -UP, "<");
            if (prev !== null) {
                prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH, -UP, "<");
            }
            else {
                list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH, -UP, "<");
            }
            if (current.next === null) {
                list.stretchHeightOfTailLineY(tl, -UP, "<");
            }
            travelNode.shrinkLineTo(tl, travelNode.WIDTH/2, travelNode.HEIGHT, "+=0.5");
            current.moveDown(tl, 0, "<")
            current.changeStyle(tl, current.NORMAL_STYLE, false, "<");
            current.moveFirstPointOfLine(tl, current.refLine, 0, 0, "<");
            if (prev !== null) {
                prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH, 0, "<");
            }
            else {
                list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH, 0, "<");
            }
            if (current.next === null) {
                list.stretchHeightOfTailLineY(tl, 0, "<");
            }
            travelNode.fadeOut(tl, 2*UP);
            return;
        }
        travelNode.scaleDown(tl, "+=0.5");
        travelNode.shrinkLine(tl);
        current.setVirtualLineColor(tl, current.CURRENT_LINE_COLOR, "");
        current.changeStyle(tl, current.NORMAL_STYLE, true);
        current.moveRefLine(tl, current.virtualRefLine, current.REF_LINE_WIDTH, 0);

        prev = current;
        current = current.next;
        i++;
    }



    prev.animeNullStyle(tl, prev.REF_CURRENT_VISIT_STYLE);
    prev.animeRefStyle(tl, prev.REF_NORMAL_STYLE)
    prev.shrinkLineTo(tl, prev.virtualRefLine, prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH,  prev.REF_NODE_HEIGHT/2);

    travelNode.startX = prev.x + prev.WIDTH + prev.GAP - (travelNode.WIDTH/2 - prev.NULL_WIDTH/2);
    travelNode.startY = prev.y + prev.refNodeY  + (prev.REF_NODE_HEIGHT/2 - prev.NULL_HEIGHT/2) - travelNode.LINE_HEIGHT - travelNode.HEIGHT;
    travelNode.setNewPos(tl, travelNode.startX, travelNode.startY);
    travelNode.expandLineUpWard(tl);
    travelNode.scaleUp(tl);

    travelNode.shrinkLineTo(tl, travelNode.WIDTH/2, travelNode.HEIGHT, "+=0.5");
    prev.animeNullStyle(tl, prev.REF_NORMAL_STYLE, "<");
    travelNode.fadeOut(tl, UP);
}