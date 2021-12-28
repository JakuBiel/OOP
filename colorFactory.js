//factory
// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function () {
// 		const { r, g, b } = this;
// 		return `rgb(${r},${g},${b})`;
// 	};
// 	color.hex = function () {
// 		const { r, g, b } = this;
// 		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	};
// 	return color;
// }

// const firstColor = makeColor(12, 12, 250);

//constructor

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
	console.log(this);
	// this.rgb = function () {
	// 	return `rgb(${r},${g},${b})`;
	// };
	// this.hex = function () {
	// 	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	// };
}

Color.prototype.rgb = function () {
	return `rgb(${this.r},${this.g},${this.b})`;
};
Color.prototype.hex = function () {
	return (
		"#" +
		((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
	);
};

const n = new Color(2, 3, 4);
