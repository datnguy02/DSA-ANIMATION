

const searchAnimation = (tl, tree, traveler ,value) => {
    let current = tree.root;

    traveler.fadeIn(tl, 100);
    traveler.revealInitialLine(tl);
    tree.animeRootStyle(tl, tree.CURRENT_VISIT_STYLE);
    traveler.setTransformOrigin(tl, `${traveler.WIDTH/2} 0`, "<");
    traveler.scaleDown(tl);
    traveler.shrinkLine(tl, true);
    tree.setLineColor(tl, tree.virtualRootLine, tree.CURRENT_LINE_COLOR, "<");
    tree.expandLine(tl, tree.virtualRootLine, tree.ROOT_LINE_WIDTH);

    while (current !== null) {
        current.animeStyle(tl, current.CURRENT_VISIT_STYLE);
        current.scaleUp(tl, 1.2, "<");
        if (current === tree.root) {
            tree.animeRootStyle(tl, tree.NORMAL_STYLE);
            tree.shrinkLine(tl, tree.virtualRootLine, true);
        }
        else {

        }
        traveler.setPosToNode(tl, current);
        traveler.setLineAttr(tl, 0, - traveler.HEIGHT - traveler.getLineHeight(), 0, - traveler.HEIGHT - traveler.getLineHeight());
        traveler.moveLine(tl, )
        traveler.scaleUp(tl);
        
        break;
    }
    
};

export default searchAnimation;

