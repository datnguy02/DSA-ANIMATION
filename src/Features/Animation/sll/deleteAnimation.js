import { travelNodeAppearAnimation } from "./searchAnimation";

const UP = 100;

export const deleteAnimation = (tl, list, target, prevNode, currentNode) => {
    const deleteAt = list.search(target);
    if (deleteAt >= 0) {
         list.tailLineY.setAttribute("d", list.getTailLineYAttr(-(list.GAP + list.WIDTH)));
    }
    travelNodeAppearAnimation(tl, list, currentNode);
    currentNode.LINE_HEIGHT -= list.HEIGHT/2 - list.HEAD_HEIGHT;


    let current = list.head;
    let prev = null;
    while (current != null) {

        current.changeStyle(tl, current.CURRENT_VISIT_STYLE);

        // 
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

        // anime current traveler to make it appear in the current node
        currentNode.startX += current.GAP + current.WIDTH;
        currentNode.setNewPos(tl, currentNode.startX, currentNode.startY);
        currentNode.expandLineUpWard(tl);
        currentNode.scaleUp(tl);

        if (current.value === target) {
            current.moveUp(tl, UP);
            currentNode.moveUp(tl, UP, "<");
            current.moveFirstPointOfLine(tl, current.refLine, 0, -UP, "<");
            prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH, -UP, "<");
            prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH/2, -UP/2);
            current.setLineAttr(tl,
                                current.virtualRefLine, 
                                current.REF_NODE_WIDTH,
                                current.REF_NODE_HEIGHT/2 - UP,
                                current.REF_NODE_WIDTH,
                                current.REF_NODE_HEIGHT/2 - UP,
                                "<"
            );
            current.setVirtualLineColor(tl, current.CURRENT_LINE_COLOR, "<");
            current.moveFirstPointOfLine(tl, current.virtualRefLine, 0, -UP);
            current.setLineTip(tl, current.virtualRefLine, "round", "<");
            if (current.next !== null) {
                current.next.changeStyle(tl, current.CURRENT_VISIT_STYLE);
            }
            else {
                current.animeNullStyle(tl, current.REF_CURRENT_VISIT_STYLE);
            }
            prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH/2, 0);
            prev.moveRefLine(tl, prev.refLine, prev.REF_LINE_WIDTH + prev.GAP + prev.WIDTH, 0);
            current.shrinkLineTo(tl, current.virtualRefLine, current.REF_NODE_WIDTH, current.REF_NODE_HEIGHT/2 - UP);
            current.shrinkLineTo(tl, current.refLine, current.REF_NODE_WIDTH, current.REF_NODE_HEIGHT/2 - UP, "<");
            if (current.next !== null) {
                current.next.changeStyle(tl, current.NORMAL_STYLE, false, "<");
            }
            else {
                current.animeNullStyle(tl, current.REF_NORMAL_STYLE, "<");
            }
            current.setScalePoint(tl, `${current.WIDTH/2} 0`, "<");
            current.scaleDown(tl);
            currentNode.shrinkLineTo(tl, currentNode.WIDTH/2, currentNode.HEIGHT);
            prevNode.shrinkLineTo(tl, prevNode.WIDTH/2, 0, "<");
            prev.changeStyle(tl, prev.NORMAL_STYLE, false, "<");
            currentNode.fadeOut(tl, 2*UP);
            prevNode.fadeOut(tl, -UP, "<");
            if (current.next !== null) {
                list.moveListNodes(tl, list.GAP + list.WIDTH, current.next);
                list.morphTailLineWidth(tl, 0, "<");
                // list.animeTailLineWidth(tl, -(list.GAP + list.WIDTH), "<");
            }
            else {
                
            }
            return;
        }

        // anime fade in of previous node (only happen at the beginning)
        if (prev === null) {
            list.setHeadAttr(tl, list.virtualHeadLine, 0, 0, "<");
            travelNodeAppearAnimation(tl, list, prevNode, true);
            current.changeStyle(tl, current.PREV_VISIT_STYLE);
            list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE);
            list.shrinkHeadLineTo(tl, list.virtualHeadLine, list.REF_LINE_WIDTH, 0);
            prevNode.startX += current.GAP + current.WIDTH;
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



        // anime current node to the next node
        currentNode.scaleDown(tl);
        currentNode.shrinkLine(tl);
        current.animeRefStyle(tl, current.REF_CURRENT_VISIT_STYLE);
        current.setVirtualLineColor(tl, current.CURRENT_LINE_COLOR, "<");
        current.moveRefLine(tl, current.virtualRefLine, current.REF_LINE_WIDTH, 0);

        

        prev = current;
        current = current.next;
    }
    prev.animeNullStyle(tl, prev.REF_CURRENT_VISIT_STYLE);
    prev.animeRefStyle(tl, prev.REF_PREV_VISIT_STYLE);
    prev.shrinkLineTo(tl, prev.virtualRefLine, prev.REF_NODE_WIDTH + prev.REF_LINE_WIDTH, prev.REF_NODE_HEIGHT/2);
    currentNode.moveToNull(tl, prev);

    currentNode.shrinkLineTo(tl, currentNode.WIDTH/2, currentNode.HEIGHT, "+=0.5");
    prevNode.shrinkLineTo(tl, prevNode.WIDTH/2, 0, "<");
    prev.animeNullStyle(tl, prev.REF_NORMAL_STYLE, "<");
    prev.changeStyle(tl, prev.NORMAL_STYLE, false, "<");
    prevNode.fadeOut(tl, -UP);
    currentNode.fadeOut(tl, UP, "<");
};

