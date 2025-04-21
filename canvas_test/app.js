// Constructor functions
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return "#" + ((r << 16) + (g << 8) + (b)).toString(16);
}

Color.prototype.rgba = function(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 255, 60);

// Classes
class ColorClass {
    constructor(r, g, b, a = 1.0) {
	console.log(r, g, b);
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
    }

    rgb() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`
    }

    hex() {
	const { r, g, b } = this;
	return "#" + ((r << 16) + (g << 8) + (b)).toString(16);
    }

    rgba() {
	const { r, g, b, a } = this;
	return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }
    
}

const colorClass = new ColorClass(255, 67, 68, 0.8);

// Test

const canvas = document.querySelector("canvas");
const this_ctx = canvas.getContext("2d");

this_ctx.fillStyle = colorClass.rgba();
this_ctx.fillRect(10, 10, 150, 100);

const another_ctx = canvas.getContext("2d")
another_ctx.fillStyle = color1.rgba(0.3);
another_ctx.fillRect(100, 100, 250, 200);

