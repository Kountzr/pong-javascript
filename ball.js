function Ball(radius, color){

                if(radius == undefined) radius = 40;

                if(color == undefined) color = 'hsla(200, 100%, 50%, 1)';

                this.x = 0;

                this.y = 0;

                this.radius = radius;

                this.vx = 0;

                this.vy = 0;

                this.color = color;

                this.rotation = 0;

                this.scaleX = 1;

                this.scaleY = 1;

                this.lineWidth = 1;

}

Ball.prototype.draw = function(context){

                context.save();

                context.translate(this.x, this.y);

                context.rotate(this.rotation);

                context.lineWidth = this.lineWidth;

                context.fillStyle = this.color;

                context.scale(this.scaleX, this.scaleY);

                context.beginPath();

                context.arc(0, 0, this.radius, 0, Math.PI/180*360, true);

                context.closePath();

                context.fill();

                if(this.lineWidth>0) context.stroke();

                context.restore();

}