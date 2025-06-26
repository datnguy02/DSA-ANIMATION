import { travelNodeAppearAnimation } from "./searchAnimation";
import { insertFirstAnimation } from "./insertFirstAnimation";
import { insertLastAnimation } from "./insertLastAnimation";
const UP = 200;
export const insertAtAnimation = (tl, list, targetIndex, prevNode, currentNode) => {
    if (targetIndex === 0) {
        insertFirstAnimation(tl, list);
        return;
    }
    if (targetIndex === list.nElement - 1) {
        insertLastAnimation(tl, list);
        return;
    }
    
    const newNode = list.getAt(targetIndex);
    const after = newNode.next;
    newNode.resetLineAttr(tl, newNode.refLine);
    // set up
    let traveler = newNode.next;
    while (traveler !== null) {
        traveler.setPos(tl, `translate(${traveler.x - traveler.GAP - traveler.WIDTH}, ${traveler.y})`, "<");
        traveler = traveler.next;
    }
    list.setTailLineYAttr(tl, -list.GAP - list.WIDTH, "<");
    //

    travelNodeAppearAnimation(tl, list, currentNode);
    
    let current = list.head;
    let prev = null;
    let i = 0;
    while (i < targetIndex) {
        current.changeStyle(tl, current.CURRENT_VISIT_STYLE);
        if (prev === null) {
            list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE);
            list.shrinkHeadLineTo(tl, list.virtualHeadLine, list.REF_LINE_WIDTH, 0);
        }
        else {
            prev.animeRefStyle(tl, prev.REF_PREV_VISIT_STYLE);
            prev.shrinkLineTo(tl
                            , prev.virtualRefLine
                            , prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH
                            , prev.REF_NODE_HEIGHT/2);
        }

        currentNode.startX += list.GAP + list.WIDTH;
        currentNode.setNewPos(tl, currentNode.startX, currentNode.startY, "<");
        currentNode.expandLineUpWard(tl);
        currentNode.scaleUp(tl);

        if (prev === null) {
            list.setHeadAttr(tl, list.virtualHeadLine, 0, 0, "<");
            travelNodeAppearAnimation(tl, list, prevNode, true);
            current.changeStyle(tl, current.PREV_VISIT_STYLE);
            list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE);
            list.shrinkHeadLineTo(tl, list.virtualHeadLine, list.REF_LINE_WIDTH, 0);
            prevNode.startX += list.GAP + list.WIDTH;
            prevNode.LINE_HEIGHT -= list.HEIGHT/2 - list.HEAD_HEIGHT;
            prevNode.startY += prevNode.HEIGHT + 2*prevNode.LINE_HEIGHT + current.HEIGHT;
            prevNode.setNewPos(tl, prevNode.startX, prevNode.startY, "<");
            prevNode.setLineUpAttr(tl, 0, 0, "<");
            prevNode.setScalePoint(tl, `${prevNode.WIDTH/2} 0`, "<")
            prevNode.animeLineDown(tl)
            prevNode.scaleUp(tl);
        }
        else {
            prevNode.scaleDown(tl);
            prevNode.shrinkLineTo(tl, prevNode.WIDTH/2, -prevNode.LINE_HEIGHT);
            prev.changeStyle(tl, current.NORMAL_STYLE, true);
            prev.setVirtualLineColor(tl, prev.PREV_LINE_COLOR, "<");
            prev.resetLineAttr(tl, prev.virtualRefLine, "<");
            prev.moveRefLine(tl, prev.virtualRefLine, prev.REF_LINE_WIDTH, 0);
            current.changeStyle(tl, current.PREV_VISIT_STYLE);
            prev.animeRefStyle(tl, prev.REF_NORMAL_STYLE);
            prev.shrinkLineTo(tl, prev.virtualRefLine, prev.REF_LINE_WIDTH + prev.REF_NODE_WIDTH, prev.REF_NODE_HEIGHT/2);
            prevNode.startX += current.GAP + current.WIDTH;
            prevNode.setNewPos(tl, prevNode.startX, prevNode.startY, "<");
            prevNode.animeLineDown(tl)
            prevNode.scaleUp(tl);
        }



        prev = current;
        currentNode.scaleDown(tl);
        currentNode.shrinkLine(tl);
        current.animeRefStyle(tl, current.REF_CURRENT_VISIT_STYLE);
        current.setVirtualLineColor(tl, current.CURRENT_LINE_COLOR, "<");
        current.moveRefLine(tl, current.virtualRefLine, current.REF_LINE_WIDTH, 0, );
        current = current.next;
        i++;
    }

    after.changeStyle(tl, after.CURRENT_VISIT_STYLE);
    prev.animeRefStyle(tl, after.REF_PREV_VISIT_STYLE);
    prev.shrinkLineTo(tl
                            , prev.virtualRefLine
                            , prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH
                            , prev.REF_NODE_HEIGHT/2);
    currentNode.startX += list.GAP + list.WIDTH;
    currentNode.setNewPos(tl, currentNode.startX, currentNode.startY, "<");
    currentNode.expandLineUpWard(tl);
    currentNode.scaleUp(tl);

    list.moveNodesToRight(tl, 0, after);
    currentNode.moveRight(tl, list.GAP + list.WIDTH, "<");
    list.animeTailLineWidth(tl, 0, "<");
    prev.moveRefLine(tl, prev.refLine, list.GAP + list.WIDTH + list.REF_LINE_WIDTH, 0, "<");
    newNode.scaleUp(tl, newNode.x, newNode.y - UP);
    prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH/2, 0);
    prev.moveRefLine(tl, prev.refLine, prev.REF_NODE_WIDTH/3, -UP/3);
    prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH, -UP);
    newNode.moveRefLine(tl, newNode.refLine, newNode.REF_LINE_WIDTH,  UP);
    newNode.animeResetPos(tl);
    newNode.moveRefLine(tl, newNode.refLine, newNode.REF_LINE_WIDTH, 0, "<");
    prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH, 0, "<");

    currentNode.shrinkLineTo(tl,currentNode.WIDTH/2, currentNode.HEIGHT);
    prevNode.shrinkLineTo(tl,currentNode.WIDTH/2, 0, "<");
    after.changeStyle(tl, current.NORMAL_STYLE, false, "<");
    prev.changeStyle(tl, prev.NORMAL_STYLE, false, "<");
    prevNode.fadeOut(tl, -UP);
    currentNode.fadeOut(tl, UP, "<");
    
}