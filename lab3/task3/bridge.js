class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }

    draw() {
        console.log("Drawing shape...");
    }

    render() {
        this.renderer.renderShape(this);
    }
}


class Circle extends Shape {
    draw() {
        console.log("Drawing Circle...");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing Square...");
    }
}

class Triangle extends Shape {
    draw() {
        console.log("Drawing Triangle...");
    }
}

class VectorRenderer {
    renderShape(shape) {
        console.log(`Drawing ${shape.constructor.name} as vector graphics`);
    }
}

class RasterRenderer {
    renderShape(shape) {
        console.log(`Drawing ${shape.constructor.name} as raster graphics`);
    }
}


function main() {
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();

    const circle = new Circle(vectorRenderer);
    const square = new Square(rasterRenderer);
    const triangle = new Triangle(vectorRenderer);

    circle.draw();
    circle.render();

    square.draw();
    square.render();

    triangle.draw();
    triangle.render();
}

main();
