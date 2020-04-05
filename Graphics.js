class Graphics{

    constructor(canvas){
        this.backBuffer = canvas.getContext("2d");
        this.backBufferWidth = canvas.width;
        this.backBUfferHeight = canvas.height;
        this.backBuffer.font = Graphics.textSize + "px Arial";
    }
}