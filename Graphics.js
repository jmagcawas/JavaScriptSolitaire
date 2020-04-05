class Graphics{

    constructor(canvas){
        this.backBuffer = canvas.getContext("2d");
        this.backBufferWidth = canvas.width;
        this.backBUfferHeight = canvas.height;
        this.backBuffer.font = Graphics.textSize + "px Arial";
    }

    drawText(text, x, y, color, align = "left"){
        this.backBuffer.textAlign = align;
        this.backBuffer.fillStyle = color;
        this.backBuffer.fillText(text,x,y);
    }

    

}