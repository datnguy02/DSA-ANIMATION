const FADE_IN_AMOUNT = 120;


const moveNodeToRight = (tl, startNode) => {
    
    let node = startNode;
    tl.to(node.domNode, {});
    while (node != null) {
        tl.fromTo(node.nodeContainer, {
            attr: {
                transform: `translate(${node.x - node.GAP - node.WIDTH}, ${node.y})`
            }
        }, {
            attr: {
                transform: `translate(${node.x}, ${node.y})`
            }
        }, "<");
        node = node.next;
    }
    return tl;
}

const insertFirstAnimation = (tl, list) => {
    const newNode = list.head;


    // set up new node so that it fade in later
    newNode.setPos(tl, `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(0)`);
    newNode.resetLineAttr(tl, newNode.refLine, "<")
    .set(list.virtualHeadLine, {
        attr: {
            stroke: `${list.HEAD_CURRENT_VISIT_BG}`,
            "stroke-linecap": ""
        }
    }, "<")
    ;
    

    moveNodeToRight(tl, list.head.next);
    list.moveSecondPointOfHeadLine(tl, list.GAP + list.WIDTH + list.REF_LINE_WIDTH, 0, "<");
    tl.fromTo(list.tailLineY, {
        attr: {
            d: `${list.getTailLineYAttr(-(list.GAP + list.WIDTH))}`
        }
    }, {
        attr: {
            d: `${list.getTailLineYAttr(0)}`
        }
    }, "<");
    newNode.animePos(tl, `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(1)`);
    list.changeHeadStyle(tl, list.HEAD_CURRENT_VISIT_STYLE)
    .to(list.virtualHeadLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH + list.GAP + list.WIDTH, 0)}`,
            "stroke-linecap": "round"
        }
    });
    newNode.next.changeStyle(tl, newNode.CURRENT_VISIT_STYLE);
    newNode.moveRefLine(tl, newNode.refLine, newNode.REF_LINE_WIDTH, -FADE_IN_AMOUNT);
    list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH/2, 0);
    list.moveSecondPointOfVirtualHeadLine(tl, list.REF_LINE_WIDTH/2, 0, "<");
    newNode.next.changeStyle(tl, newNode.NORMAL_STYLE, false, "<");
    list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH/2, FADE_IN_AMOUNT/2);
    list.moveSecondPointOfVirtualHeadLine(tl, list.REF_LINE_WIDTH/2, FADE_IN_AMOUNT/2, "<");
    
    list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH, FADE_IN_AMOUNT);
    list.moveSecondPointOfVirtualHeadLine(tl, list.REF_LINE_WIDTH, FADE_IN_AMOUNT, "<");

    list.moveSecondPointOfVirtualHeadLine(tl, 0, 0);
    list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE);
    list.animeLineTip(tl, list.virtualHeadLine, "", "<");
    newNode.animePos(tl, `translate(${newNode.x}, ${newNode.y})`);
    newNode.moveRefLine(tl, newNode.refLine, newNode.REF_LINE_WIDTH, 0, "<");
    list.moveSecondPointOfHeadLine(tl, list.REF_LINE_WIDTH, 0, "<");

};



export {
    insertFirstAnimation
}