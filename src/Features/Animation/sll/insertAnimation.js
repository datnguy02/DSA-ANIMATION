const FADE_IN_AMOUNT = 1000;


const moveNodeToRight = (tl, startNode) => {
    let node = startNode;
    tl.to(node.domNode, {});
    while (node != null) {
        tl.fromTo(node.domNodeContainer, {
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

    console.log(list.domTailLineY);
    moveNodeToRight(tl, list.head.next)
    .fromTo(list.head.domNodeContainer, {
        attr: {
            transform: `translate(${newNode.x}, ${newNode.y  + FADE_IN_AMOUNT})`
        }
    }, {
        attr: {
             transform: `translate(${newNode.x}, ${newNode.y})`
        }
    })
};


export {
    insertFirstAnimation
}