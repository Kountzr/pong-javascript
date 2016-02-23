function Paddle(){

                this.x = 0;

                this.y = 0;

                this.rotation = 0;

                this.width = 25;

                this.height = 20;

              
}

 

Paddle.prototype.draw = function(context){

                context.save();

               

                context.translate(this.x, this.y);

                context.rotate(this.rotation);

                context.lineWidth = 1;
		
		context.strokeStyle = '#000000';

                context.fillStyle = '#ff0000';

               

                context.beginPath();

                context.moveTo(10, 0);

                context.lineTo(-10, 0);

                context.lineTo(-10, 10);

                context.lineTo(10, 10);

                context.lineTo(10, 0);
		context.stroke();

                context.fill();

            
                context.restore();

}