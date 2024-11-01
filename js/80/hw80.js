(function () {
    'use strict';
    let dragging;
    let offset;
    let positionStyle;
    let topStyle;
    let leftStyle;
    let parts = Array.from(document.querySelectorAll('.parts'));
    console.log(parts);


    const style = JSON.parse(localStorage.style || '[]');
    if (style.length > 0) {
        style.forEach(element => {
            const result = parts.filter((part) => part.currentSrc === element.item);
            console.log(result);
            result[0].style.position = element.positionStyle;
            result[0].style.top = element.topStyle;
            result[0].style.left = element.leftStyle;
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

    document.addEventListener('mouseup', () => {
        style.push({ item: `${dragging.src}`, positionStyle: positionStyle, topStyle: topStyle, leftStyle: leftStyle });
        console.log(dragging.src);
        localStorage.style = JSON.stringify(style);
        dragging = null;
    });
}());