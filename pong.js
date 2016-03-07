window.addEventListener('load', documentLoaded);

                                function documentLoaded(e){

                                                var myCanvas = document.getElementById('myCanvas');

                                                if(myCanvas && myCanvas.getContext){

                                                                var myContext = myCanvas.getContext('2d'),

                                                                                myPaddle = new Paddle(),

                                                                                sangle = 0,

                                                                                vx = 0,

                                                                                vy = 0,

                                                                                axy = 0;

                                                                
                                                                myPaddle.x = myCanvas.width/2;

                                                                myPaddle.y = myCanvas.height/2;
								
								myBall = new Ball(10,"orange");
								
								myBall.x = myCanvas.width/4;
								myBall.y = myCanvas.height/4;

                                                               

                                                                window.addEventListener('keydown', function(e){

                                                                                switch(e.keyCode){

                                                                                                case 37:

                                                                                                                sangle = -3;

                                                                                                                break;

                                                                                                case 39:

                                                                                                                sangle = 3;

                                                                                                                break;

                                                                                                case 38:

                                                                                                                axy = 0.05;

                                                                                                                

                                                                                                                break;
												case 40:
														axy = -0.05;
														break;

                                                                                }

                                                                }, false);

                                                               

                                                                window.addEventListener('keyup', function(e){

                                                                                sangle = 0;

                                                                                axy = 0;

                                                                                

                                                                },false);

                                                               

                                                                if(myContext != null){

                                                                                (function createAnim(){

                                                                                                window.requestAnimationFrame(createAnim, myCanvas);

                                                                                                myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);

                                                                                               

                                                                                                myPaddle.rotation += Math.PI/180 * sangle;

                                                                                                var dangle = myPaddle.rotation,

                                                                                                                ay = Math.sin(dangle) * axy,

                                                                                                                ax = Math.cos(dangle) * axy;

                                                                                                vx += ax;

                                                                                                vy += ay;

                                                                                                myPaddle.x += vx;

                                                                                                myPaddle.y += vy;
												//myBall.x += vx;

                										//myBall.y += vy;
												myPaddle.draw(myContext);
												myBall.draw(myContext);
											 
										if(myPaddle.x + myPaddle.width < myBall.x +myBall.radius && myPaddle.y + 										myPaddle.height < myBall.y + myBall.radius){


										myBall.x += vy;
										myBall.y += vx;


                                                                                	
										//alert("Hello! I am an alert box!!");

										};
										
											
										if(myPaddle.x > myCanvas.width) {
                									myPaddle.x = 0; 
            	    									   
           									 } else if(myPaddle.y > myCanvas.height) {
               										 myPaddle.y = 0;


										}else if(myPaddle.x < 0){
											myPaddle.x = myCanvas.width;
										}else if(myPaddle.y < 0){
											myPaddle.y = myCanvas.height;
										};
										
                                                                                })();

                                                                }

                                                }

                                }

                                                                                                               
                                                                                      
                                                              
                                                                