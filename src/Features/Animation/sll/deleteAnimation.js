import { travelNodeAppearAnimation } from "./searchAnimation";

export const deleteAnimation = (tl, list, target, prevNode, currentNode) => {
    travelNodeAppearAnimation(tl, list, currentNode);
    
    let current = list.head;
    let prev = null;
    while (current != null) {

        current.changeStyle(tl, current.CURRENT_VISIT_STYLE);

        // 
        if (prev === null) {
            list.changeHeadStyle(tl, list.HEAD_NORMAL_STYLE);
            list.shrinkHeadLineTo(tl, list.virtualHeadLine, list.REF_LINE_WIDTH, 0);
        }

        currentNode.startX += current.GAP + current.WIDTH;
        currentNode.setNewPos(tl, currentNode.startX, currentNode.startY);
        currentNode.expandLineUpWard(tl);
        currentNode.scaleUp(tl);

        // anime fade in of previous node
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

        currentNode.scaleDown(tl);
        currentNode.shrinkLine(tl);
        current.animeRefStyle(tl, current.REF_CURRENT_VISIT_STYLE);
        
        
        break;

        prev = current;
        current = current.next;

    }
};

