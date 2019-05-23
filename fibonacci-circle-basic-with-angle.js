
let basicSketchWithAngle = function(p){
  var index = 0;
  var angle = 0;
  var count = 0;
  var angleChange = 0;
  var increment = 0;
  
  p.setup = function(){
    index = 0;
    angle = 0;
    count = 0;
    canvas = p.createCanvas(500, 478);
    canvas.translate(0,0)
    p.background('#191314');
    angleChange = 0.418879;
    increment = 100;
  }

  p.draw = function(){
    p.noFill();
    p.stroke('pink');
    p.strokeWeight(2);
    p.translate(p.width / 2, p.height / 2);

    var r = Math.sqrt(count)
    var x = r * p.sin(angle);
    var y = r * p.cos(angle);

    angle += angleChange;
    count += increment;
    p.ellipse(x, y, little_fibo[index]);

    index++;
    if (index == little_fibo.length) {
      window.setTimeout(() => p.setup(), 2000);
    }
  }
}




