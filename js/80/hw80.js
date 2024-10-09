(function () {
    'use strict';
    let dragging;
    let offset;
    let positionStyle;
    let topStyle;
    let leftStyle;


    const style = JSON.parse(localStorage.style || '[]');
    if (style.length > 0) {
        style.forEach(element => {
            element.item.style.position = element.positionStyle;
            element.item.style.top = element.topStyle;
            element.item.style.left = element.leftStyle;
        });
    }

    document.addEventListener('mousedown', e => {
        e.preventDefault();
        if (e.target.className === 'parts') {
            dragging = e.target;
            console.log(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }
    });

    document.addEventListener('mousemove', e => {
        if (dragging) {
            dragging.style.position = positionStyle = 'absolute';
            dragging.style.top = topStyle = `${e.pageY - offset.y}px`;
            dragging.style.left = leftStyle = `${e.pageX - offset.x}px`;
        }
    });

    document.addEventListener('mouseup', e => {
        console.log(e);
        style.push({ item: `${dragging}`, positionStyle: positionStyle, topStyle: topStyle, leftStyle: leftStyle });
        localStorage.style = JSON.stringify(style);
        dragging = null;
    });
}());