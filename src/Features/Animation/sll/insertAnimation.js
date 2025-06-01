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

    tl.set(newNode.nodeContainer, {
        attr: {
             transform: `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(0)`
        }
    }).set(newNode.refLine, {
        attr: {
            d: `${newNode.getRefLineAttr(0, 0)}`,
        }
    }, "<")
    .set(list.virtualHeadLine, {
        attr: {
            stroke: `${list.HEAD_CURRENT_VISIT_BG}`
        }
    }, "<")
    ;
    

    moveNodeToRight(tl, list.head.next)
    .to(list.headLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.GAP + list.WIDTH + list.REF_LINE_WIDTH, 0)}`,
        }
    }, "<")
    .fromTo(list.tailLineY, {
        attr: {
            d: `${list.getTailLineYWidthAttr(-(list.GAP + list.WIDTH))}`
        }
    }, {
        attr: {
            d: `${list.getTailLineYWidthAttr(0)}`
        }
    }, "<")
   .to(newNode.nodeContainer, {
        attr: {
             transform: `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(1)`,
        }
   })
   list.changeHeadStyle(tl, list.HEAD_CURRENT_VISIT_STYLE)
   .to(list.virtualHeadLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH + list.GAP + list.WIDTH, 0)}`
        }
   });
   newNode.next.changeStyle(tl, newNode.CURRENT_VISIT_STYLE)
    .to(newNode.refLine, {
        attr: {
            d: `${newNode.getRefLineAttr(newNode.REF_LINE_WIDTH, -FADE_IN_AMOUNT)}`
        }
   })
   .to([list.headLine, list.virtualHeadLine], {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH/2 , 0)}`
        }
   });
   newNode.next.changeStyle(tl, newNode.NORMAL_STYLE, "<")
   .to([list.headLine, list.virtualHeadLine], {
         attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH/2 , FADE_IN_AMOUNT/2)}`
        }
   })
   .to([list.headLine, list.virtualHeadLine], {
         attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH , FADE_IN_AMOUNT)}`
        }
   })
   .to(list.virtualHeadLine, {
        attr: {
            d: `${list.getHeadLineAttr(0, 0)}`
        }
   });
   list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE)
   .to(newNode.nodeContainer, {
        attr: {
            transform: `translate(${newNode.x}, ${newNode.y})`
        }
   })
   .to(newNode.refLine, {
        attr: {
            d: `${newNode.getRefLineAttr(newNode.REF_LINE_WIDTH, 0)}`
        }
   }, "<")
   .to(list.headLine, {
        attr: {
            d: `${list.getHeadLineAttr(list.REF_LINE_WIDTH, 0)}`
        }
   }, "<")
    
};


export {
    insertFirstAnimation
}