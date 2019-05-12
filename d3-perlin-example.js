class PerlinNoiseExample {

    constructor(id, noise, is_mult_color) {
        this.id = id;
        this.is_mult_color = is_mult_color;

        this.svg = d3.select("#"+id);
        this.width = +this.svg.attr("width");
        this.height = +this.svg.attr("height");
        this.color = '#45b3e7';
        this.perlinNoiseArr = noise.slice(0);//Cloning
        // this.perlinNoiseArr = generatePerlinNoise(700, 500, { octaveCount: 6, amplitude: 0.03, persistence: 0.02 });
        this.incrementArr = new Array(this.perlinNoiseArr.length);
        this.colorArr = new Array(this.perlinNoiseArr.length);
    }


    drawGrid() {
        for (var y = 0; y < this.height; y += 20) {
            for (var x = 0; x < this.width; x += 20) {
                var index = (y * this.width) + x;
                var value = this.perlinNoiseArr[Math.floor(index)];
                if (value > 0.9) {
                    this.incrementArr[index] = -0.01;
                } else if (value < 0.9 && value > 0.01) {
                    this.incrementArr[index] = this.incrementArr[index] ? this.incrementArr[index] : (Math.random() > 0.5 ? 0.01 : -0.01);
                } else if (value < 0.01) {
                    this.incrementArr[index] = 0.01;
                    this.colorArr[index] = Math.random()>0.5?'#45b3e7':'pink';
                }

                var r = value + this.incrementArr[index]
                this.perlinNoiseArr[index] = r;
                var rect = this.svg.select("rect[id='" + index + "']");
                if (rect._groups[0][0] == null) {
                    rect = this.svg.append("rect");//No D3 element exists
                    this.colorArr[index] = Math.random()>0.5?'#45b3e7':'pink';
                }
                rect.attr("id", index)
                    .attr("x", x)
                    .attr("y", y)
                    .attr("width", r * 25)
                    .attr("height", r * 25)
                    .attr("fill", this.is_mult_color?this.colorArr[index]:this.color)
                    .attr("stroke", 'black')
                    .attr('stroke-width', 0.1);
            }
        }
    }


}