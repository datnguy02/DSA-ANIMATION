

const searchAnimation = (tl, tree, traveler ,value) => {
    let current = tree.root;
    let parent = null;
    let isLeft = false;

    traveler.fadeIn(tl, 100);
    traveler.revealInitialLine(tl);
    tree.animeRootStyle(tl, traveler.STYLE);
    traveler.setTransformOrigin(tl, `${traveler.WIDTH/2} 0`, "<");
    traveler.scaleDown(tl);
    traveler.shrinkLine(tl, true);
    tree.setLineColor(tl, tree.virtualRootLine, traveler.STROKE, "<");
    tree.expandLine(tl, tree.virtualRootLine, tree.ROOT_LINE_WIDTH);
    while (current !== null) {
        isLeft = current.value > value;
        current.animeStyle(tl, traveler.STYLE);
        current.scale(tl, 1.2, "<");
        if (parent === null) {
            tree.animeRootStyle(tl, tree.STYLE);
            tree.shrinkLine(tl, tree.virtualRootLine, true);
        }
        else {
            const lastRef = current.parent[`virtual${current === current.parent.left ? "Left" : "Right"}Line`];
            current.parent.animeRefStyle(tl, current === current.parent.left, current.STYLE);
            current.parent.scaleRef(tl, current === current.parent.left, 1, "<");
            current.parent.shrinkLine(tl, lastRef);
        }
        traveler.setPosToNode(tl, {nodeX: current.x, nodeY: current.y});
        traveler.setLineAttr(tl, 0, - traveler.HEIGHT - traveler.getLineHeight(), 0, - traveler.HEIGHT - traveler.getLineHeight());
        traveler.moveLine(tl, 0, - traveler.HEIGHT - traveler.getLineHeight(), 0, -traveler.HEIGHT);
        traveler.scaleUp(tl);


        if (current.value === value) {
            return;
        }
        
        traveler.scaleDown(tl, "+=0.5");
        traveler.shrinkLine(tl, false);

        current.animeStyle(tl, current.STYLE);
        current.scale(tl, 1, "<");
        current.animeRefStyle(tl, isLeft, traveler.STYLE, "<");
        current.scaleRef(tl, isLeft, 1.2, "<");
        current.animeRefOpacity(tl, !isLeft, 0.5, "<");
        tree.blurSubTree(tl, isLeft ? current.right : current.left, 0.5, "<");
        current.setLineColor(tl, isLeft ? current.virtualLeftLine : current.virtualRightLine, traveler.STROKE, "<");
        current.setLineAttr(tl, isLeft ? current.virtualLeftLine : current.virtualRightLine, current.getLineWidth());
        current.expandLine(tl, isLeft ? current.virtualLeftLine : current.virtualRightLine);
        parent = current;
        current = isLeft ? current.left : current.right;
        
    }

    parent.animeNullStyle(tl, isLeft, traveler.CONTRAST_STYLE);
    parent.scaleNull(tl, isLeft, 1.3, "<");
    parent.animeRefStyle(tl, isLeft, parent.STYLE);
    parent.scaleRef(tl, isLeft, 1, "<");
    parent.shrinkLine(tl, parent[`virtual${isLeft ?  "Left" : "Right"}Line`]);

    const {x, y} = parent.getChildPos(isLeft);
    traveler.setPosToNode(tl, {nodeX: x, nodeY: y});
    traveler.setLineAttr(tl, 0, - traveler.HEIGHT - traveler.getLineHeight(), 0, - traveler.HEIGHT - traveler.getLineHeight());
    traveler.moveLine(tl, 0, - traveler.HEIGHT - traveler.getLineHeight(), 0, -traveler.HEIGHT);
    traveler.scaleUp(tl);
    
    traveler.shrinkLine(tl, true, "+=0.5");
    parent.scaleNull(tl, isLeft, 1, "<");
    parent.animeNullStyle(tl, isLeft, parent.NULL_STYLE, "<");
    traveler.setTransformOrigin(tl, `${traveler.WIDTH/2} ${traveler.HEIGHT/2}`, "<")
    traveler.scaleDown(tl);

};

export default searchAnimation;

