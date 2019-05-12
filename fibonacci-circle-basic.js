
let basicSketch = function(p){
  var index = 0;
  
  p.setup = function(){
    index = 0;
    canvas = p.createCanvas(500, 478);
    canvas.translate(0,0)
    p.background('#191314');
  }

  p.draw = function(){
    p.noFill();
    p.stroke('pink');
    p.strokeWeight(2);
    p.translate(p.width / 2, p.height / 2);

    p.ellipse(0, 0, fibo[index]);

    index++;
    if (index == fibo.length) {
      p.noLoop();
    }
  }
}




