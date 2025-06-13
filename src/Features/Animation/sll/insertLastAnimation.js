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


    list.setTailLineYAttr(tl, reduceAmount);
    prevTail.setNullOpacity(tl, 1);
    newNode.setPos(tl, `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(0)`);
    newNode.setLineTip(tl, newNode.refLine, "");

    // animation that make new node appear
    newNode.animePos(tl, `translate(${newNode.x}, ${newNode.y + FADE_IN_AMOUNT}) scale(1)`);

    // animation that show how we control tail ref to access the last node of the list
    list.changeTailStyle(tl, list.TAIL_VISIT_STYLE);
    list.animeFirstPartOfTailLineY(tl, list.virtualTailLineY);

    list.animeSecondPart(tl, list.virtualTailLineY, reduceAmount);
    tl.to(list.virtualTailLineY, {
        attr: {
            d: `${list.getTailLineYAttr(reduceAmount)}`
        }
    });
    prevTail.changeStyle(tl, prevTail.CURRENT_VISIT_STYLE);


    // animation that updates the next ref of previous tail
    prevTail.moveNullFromTo(tl, 0, 0, 1, 0);
    prevTail.moveRefLine(tl, prevTail.refLine, prevTail.REF_LINE_WIDTH/3, 0);
    prevTail.moveRefLine(tl, prevTail.refLine, prevTail.REF_LINE_WIDTH/3, FADE_IN_AMOUNT/3);
    prevTail.moveRefLine(tl, prevTail.refLine, prevTail.REF_LINE_WIDTH, FADE_IN_AMOUNT);


    // animation that lift up the new node
    prevTail.moveRefLine(tl, prevTail.refLine, prevTail.REF_LINE_WIDTH, 0);
    newNode.animePos(tl, `translate(${newNode.x}, ${newNode.y})`, "<");


    // animation that show the null of new node
    newNode.expandRefLineTo(tl, newNode.refLine, newNode.REF_LINE_WIDTH, 0);
    newNode.moveNullFromTo(tl, 0, 0, 0, 1);

    // animation that update the tail reference of the list so that it points to new node
    list.shrinkThirdPartOfTailLineY(tl, list.virtualTailLineY, reduceAmount);
    list.shrinkThirdPartOfTailLineY(tl, list.tailLineY, reduceAmount, "<");
    prevTail.changeStyle(tl, prevTail.NORMAL_STYLE, false, "<");
    list.shrinkThirdPartOfTailLineY(tl, list.virtualTailLineY, 0);
    list.shrinkThirdPartOfTailLineY(tl, list.tailLineY, 0, "<");
    list.animeTailLineWidth(tl, 0);
    list.animeVirtualTailLineWidth(tl, 0, "<");
    list.shrinkThirdPartOfTailLineY(tl, list.virtualTailLineY, 0);
    list.animeFirstPartOfTailLineY(tl, list.virtualTailLineY);
    list.shrinkEntireLine(tl, list.virtualTailLineY);
    list.changeTailStyle(tl, list.TAIL_NORMAL_STYLE);
};

export {
    insertLastAnimation
}