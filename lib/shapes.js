// class that creates the shape code and renders based on the shape type
class Shapes {
    constructor(txt = 'svg', txtColor = 'white', shapeType = 'circle', shapeColor = 'green'){
        this.txt = txt;
        this.txtColor = txtColor;
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
    }

    renderSquare(){
        return `<rect width="300" height="300" style="fill:${this.shapeColor};" />`
    }

    renderCircle(){
        return `<circle cx="150" cy="150" r="150" fill="${this.shapeColor}" />`
    }

    renderTriangle(){
        return `<polygon points="0,300 300,300 150,0" style="fill:${this.shapeColor};" />`
    }


}



module.exports = Shapes;