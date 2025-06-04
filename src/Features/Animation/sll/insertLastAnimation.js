const FADE_IN_AMOUNT = 250;

const findNodeBeforeLast = (list) => {
    let current = list.head;
    while (current != null) {
        if (current.next != null 
        && current.next.next === null)
            return current;
        current = current.next;
    }
    return null;
}

const insertLastAnimation = (tl, list) => {

    const reduceAmount = -(list.GAP + list.WIDTH);
    const prevTail = findNodeBeforeLast(list);
    const newNode = list.tail;


     tl.set(list.tailLineY, {
        attr: {
            d: `${list.getTailLineYAttr(reduceAmount)}`
        }
    }).set(prevTail.nextNull, {
        attr: {
            opacity: 1,
        }
    }).set(newNode.nodeContainer, {
        attr: {
            transform: `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(0)`
        }
    })
    .set(newNode.refLine, {
        attr: {
            "stroke-linecap": ""
        }
    });

    // animation that make new node appear
    tl.to(newNode.nodeContainer, {
        attr: {
             transform: `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(1)`
        }
    })

    // animation that show how we control tail ref to access the last node of the list
    list.changeTailStyle(tl, list.TAIL_VISIT_STYLE)
    .to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYVerticalAttr()}`,
        }
    }).to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYHorizontalAttr(reduceAmount)}`
        }
    }).to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYAttr(reduceAmount)}`
        }
    });
    prevTail.changeStyle(tl, prevTail.CURRENT_VISIT_STYLE);


    // animation that updates the next ref of previous tail
    tl.fromTo(prevTail.nextNull, {
        attr: {
            transform: `${prevTail.nextNull.getAttribute("transform")} scale(1)`,
        }
    }, {
        attr: {
             transform: `${prevTail.nextNull.getAttribute("transform")} scale(0)`,
        }
    })
    .to(prevTail.refLine, {
        attr: {
            d: `${prevTail.getRefLineAttr(prevTail.REF_LINE_WIDTH/3, 0)}`
        }
    })
    .to(prevTail.refLine, {
        attr: {
            d: `${prevTail.getRefLineAttr(prevTail.REF_LINE_WIDTH/3, FADE_IN_AMOUNT/3)}`
        }
    })
    .to(prevTail.refLine, {
        attr: {
            d: `${prevTail.getRefLineAttr(prevTail.REF_LINE_WIDTH, FADE_IN_AMOUNT)}`
        }
    });


    // animation that lift up the new node
    tl.to(prevTail.refLine, {
        attr: {
             d: `${prevTail.getRefLineAttr(prevTail.REF_LINE_WIDTH, 0)}`
        }
    })
    .to(newNode.nodeContainer, {
        attr: {
            transform: `translate(${newNode.x}, ${newNode.y})`
        }
    }, "<");


    // animation that show the null of new node
    tl.fromTo(newNode.refLine, {
        attr: {
            d: `${newNode.getRefLineAttr(0, 0)}`,
        }
    }, {
        attr: {
            d: `${newNode.getRefLineAttr(newNode.REF_LINE_WIDTH, 0)}`,
        }
    })
    .fromTo(newNode.nextNull, {
        attr: {
            transform: `${newNode.nextNull.getAttribute("transform")} scale(0)`,
        }
    }, {
        attr: {
             transform: `${newNode.nextNull.getAttribute("transform")} scale(1)`,
        }
    });

    // animation that update the tail reference of the list so that it points to new node
    tl.to([list.virtualTailLineY, list.tailLineY], {
        attr: {
            d: `${list.getTailLineYHorizontalAttr(reduceAmount)}`
        }
    });
    prevTail.changeStyle(tl, prevTail.NORMAL_STYLE, false, "<")
    .to([list.virtualTailLineY, list.tailLineY], {
        attr: {
              d: `${list.getTailLineYHorizontalAttr(0)}`
        }
    })
    .to([list.virtualTailLineY, list.tailLineY], {
        attr: {
            d: `${list.getTailLineYAttr(0)}`
        }
    })
    .to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYHorizontalAttr(0)}`
        }
    })
    .to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYVerticalAttr()}`
        }
    })
    .to(list.virtualTailLineY, {
        attr: {
            d: `${list.virtualTailLineY.getAttribute("d")}`
        }
    });
    list.changeTailStyle(tl, list.TAIL_NORMAL_STYLE);
};

export {
    insertLastAnimation
}