(function () {
    'use strict';
    class Element {
        constructor(innerText) {
            this.children = [];
            this.innerText = innerText;
        }
        setInnerText(text) {
            this.innerText = text;
        }
        getInnerText() {
            return this.innerText;
        }
        addChild(child) {
            this.children.push(child);
        }
        removeChild(child) {
            let filtered = this.children.filter(function (element) { return element !== child; });
            this.children = filtered;
        }
        getChildren() {
            return this.children;
        }
        render() {
            console.log(this.innerText);
            this.children.forEach(elem => elem.render());
        }
    }
    class Div extends Element {
        render() {
            console.log('Hi im a div');
            super.render();
        }
    }
    class H1 extends Element {
        render() {
            console.log('Hi im a H1');
            super.render();
        }
    }
    const div = new Div('a');
    const h11 = new H1('b');
    const h12 = new H1('c');
    div.addChild(h11);
    div.addChild(h12);
    div.render();
    div.setInnerText('new div inner text');
    div.removeChild(h11);
    div.render();
})();