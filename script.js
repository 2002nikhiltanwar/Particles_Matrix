window.onload=function(){

var canvas=document.getElementById("canvas");
canvas.width=innerWidth;
canvas.height =innerHeight;
canvas.style.position="absolute";
canvas.style.left="0px";
canvas.style.top="0px";
var ctx =canvas.getContext("2d");
 var c=0;
 var bgcol="#222";
 var clr="lightblue";

 
function paintCanvas(){
    ctx.fillStyle=bgcol;
 ctx.fillRect(0,0,canvas.width,canvas.height);
}

addEventListener("click",function(event){
event.preventDefault();
    c++;
    clicked();
    
});
addEventListener("click",function(e){
    e.preventDefault();
    if(e.detail===3){
    
        bgcol = prompt("Type the colour name or value for changing the background");
        if (!bgcol) bgcol = "#222";
        
        }
});

var mouse = { x: undefined, y: undefined }; 
    
    addEventListener('mousemove', mousePos);

    
    function mousePos (e) {
        e.preventDefault();
        var e = window.event;
      mouse.x=e.x;
      mouse.y=e.y;
    }

function clicked(){
    particles.push(new Particle());
    n=particles[c];
    n.x=mouse.x;
    n.y=mouse.y;
    n.clr="lightblue"
    n.draw();
}
function Particle(){
    this.x=(Math.random()*canvas.width);
    this.y=(Math.random()*canvas.height);
    this.radius=5;
    this.vx= -1+(Math.random()*2);
    this.vy= -1+(Math.random()*2);
     this.clr=clr;
    this.draw=function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        ctx.fillStyle =this.clr;
        ctx.fill();
         }
         }
         
         var particles =[];
         for(var i = 0;i<80;i++){
             particles.push(new Particle());
         }
    
       function draw(){
       paintCanvas();
       for(var i=0;i<particles.length;i++){
           p=particles[i];
           p.draw();
       }
           update();}
       
       
       function update(){
           for(var i=0;i<particles.length;i++){
               p=particles[i];
           
           p.x+=p.vx;
           p.y+=p.vy;
           if(p.x+p.radius>canvas.width){
               p.vx=-p.vx;
           }
           else if(p.x-p.radius<0){
               p.vx=-p.vx; ;
           }
           if(p.y+p.radius >canvas.height){
               p.vy=-p.vy;
        }
           else if(p.y-p.radius <0){
               p.vy=-p.vy;
           }
           
         for(var j=i+1;j<particles.length;j++){
             p2=particles[j];
             
             
             distance(p,p2);
         }
       }
       }
       function distance(x,y){
           var dist,
            dx=x.x-y.x;
           dy = x.y- y.y;
           dist=Math.sqrt(dx*dx+dy*dy);
           if(dist<=60){
               ctx.beginPath();
               ctx.moveTo(x.x,x.y);
               ctx.lineTo(y.x,y.y);
               ctx.strokeStyle="white";
               ctx.stroke();
               ctx.closePath();
               p.clr="red";
               p2.clr="red";
               
          
          var ax=dx/10000;
          var ay=dy/10000;
          
          x.vx -= ax;
          x.vy -= ay;
          y.vx += ax;
          y.vy += ay;
          
         }
          }

       function animloop(){
           draw();
           window.requestAnimationFrame(animloop);
       }
       animloop();
}
      
