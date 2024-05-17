
class LightNode {
    constructor() {
        if (new.target === LightNode) {
            throw new Error("Cannot instantiate an abstract class.");
        }
    }

    get outerHTML() {
        throw new Error("Method 'outerHTML' must be implemented.");
    }

    get innerHTML() {
        throw new Error("Method 'innerHTML' must be implemented.");
    }
}


class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }

    get outerHTML() {
        return this.text;
    }

    get innerHTML() {
        return this.text;
    }
}


class LightElementNode extends LightNode {
    constructor(tagName, displayType = 'block', selfClosing = false, classes = []) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.selfClosing = selfClosing;
        this.classes = classes;
        this.children = [];
    }

    addClass(className) {
        this.classes.push(className);
    }

    appendChild(node) {
        if (!(node instanceof LightNode)) {
            throw new Error("Child must be an instance of LightNode.");
        }
        this.children.push(node);
    }

    get innerHTML() {
        return this.children.map(child => child.outerHTML).join('');
    }

    get outerHTML() {
        const classAttribute = this.classes.length > 0 ? ` class="${this.classes.join(' ')}"` : '';
        if (this.selfClosing) {
            return `<${this.tagName}${classAttribute}/>`;
        } else {
            return `<${this.tagName}${classAttribute}>${this.innerHTML}</${this.tagName}>`;
        }
    }
}


const main = () => {

    const div = new LightElementNode('div');
    div.addClass('container');


    const header = new LightElementNode('h1');
    header.appendChild(new LightTextNode('Hello, LightHTML!'));
    div.appendChild(header);

    const paragraph = new LightElementNode('p');
    paragraph.addClass('text-muted');
    paragraph.appendChild(new LightTextNode('This is a paragraph in LightHTML.'));
    div.appendChild(paragraph);


    const ul = new LightElementNode('ul');
    const li1 = new LightElementNode('li');
    li1.appendChild(new LightTextNode('First item'));
    const li2 = new LightElementNode('li');
    li2.appendChild(new LightTextNode('Second item'));
    ul.appendChild(li1);
    ul.appendChild(li2);
    div.appendChild(ul);


    console.log(div.outerHTML);
};


main();
