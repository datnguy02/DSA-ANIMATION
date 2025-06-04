import colorway from "../../../assets/color-style/sllStyle";

const FADE_IN_AMOUNT = 100;



export const travelNodeAppearAnimation = (tl, list, travelNode) => {

    tl.set(list.virtualHeadLine, {
        attr: {
            stroke: `${list.VIRTUAL_TAIL_LINE_COLOR}`,
            "stroke-linecap": ""
        }
    })
    travelNode.fadeIn(tl, FADE_IN_AMOUNT);
    travelNode.expandLineDownWard(tl);
    list.changeHeadStyle(tl, list.HEAD_CURRENT_VISIT_STYLE);
    travelNode.scaleDown(tl);
    travelNode.shrinkLine(tl)
    .to(list.virtualHeadLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH, 0)}`,
        }
    })


    return tl;
}

export const searchAnimation = (tl, list, target, travelNode) => {
    travelNodeAppearAnimation(tl, list, travelNode);
    travelNode.LINE_HEIGHT -= list.HEIGHT/2 - list.HEAD_HEIGHT;
    
    let prev = null;
    let current = list.head;
    let i = 1;
    while (current != null) {
        current.changeStyle(tl, current.CURRENT_VISIT_STYLE,);
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
        travelNode.setNewPos(tl, i * (list.GAP + list.WIDTH), 0);
        travelNode.expandLineUpWard(tl);
        travelNode.scaleUp(tl);
        if (current.val == target) {
            console.log(current.val);
            // TODO
            return;
        }
        travelNode.scaleDown(tl, "+=0.5");
        travelNode.shrinkLine(tl);
        current.setLineTip(tl, current.virtualRefLine, "");
        current.setVirtualLineColor(tl, current.CURRENT_LINE_COLOR, "");
        current.changeStyle(tl, current.NORMAL_STYLE, true);
        current.moveRefLine(tl, current.virtualRefLine, current.REF_LINE_WIDTH, 0);

        prev = current;
        current = current.next;
        i++;
    }

    prev.animeRefStyle(tl, prev.REF_NORMAL_STYLE)
    prev.shrinkLineTo(tl, prev.virtualRefLine, prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH,  prev.REF_NODE_HEIGHT/2);

}