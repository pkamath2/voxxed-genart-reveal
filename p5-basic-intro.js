
let introSketch = function(p){

  p.setup = function(){
    canvas = p.createCanvas(500, 485);
    canvas.translate(0,0)
    p.background('#191314');
  }

  p.draw = function(){
    p.noFill();
    p.stroke('pink');
    p.strokeWeight(2);
    p.translate(p.width / 2, p.height / 2);

    p.ellipse(0, 0, 100);
  }
}




