const progressDom = document.querySelector(".progress");

const textDom = document.querySelector(".text");

function rotateCircle(persent = 36) {
	// 计算环形周长
	const circleLength = Math.floor(
		2 * Math.PI * parseFloat(progressDom.getAttribute("r"))
	);
	// 进度长度
	const value = (persent * circleLength) / 100;
	// r\g\b
	const red = 255 + parseInt(((0 - 255) / 100) * persent);
	const green = 0 + parseInt(((191 - 0) / 100) * persent);
	const blue = 0 + parseInt(((255 - 0) / 100) * persent);
	// 设置stroke-dasharray和路径的颜色
	progressDom.setAttribute("stroke-dasharray", value + ",10000");
	progressDom.setAttribute("stroke", `rgb(${red},${green},${blue})`);
	// 设置文本内容和颜色
	textDom.innerHTML = persent + "%";
	textDom.setAttribute("fill", `rgb(${red},${green},${blue})`);
}

// 30ms进度+1
let num = 0;
setInterval(() => {
	num++;
	console.log(num);
	if (num > 100) {
		num = 0;
	}
	rotateCircle(num);
}, 100);
