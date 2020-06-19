const drawButton = document.querySelector('#draw');
const resetButton = document.querySelector('#reset');
const container = document.querySelector('.container');

let animalsArray = ['bee', 'birds', 'delfin', 'koala', 'tiger'];

let dim = 25;
draw(dim);

drawButton.addEventListener('click', function(e) {
	dim = prompt("dimension?");
	draw(dim);
});

resetButton.addEventListener('click', function(e) {
	draw(dim);
})



function emptyContainer(el) {
	el.innerHTML = "";
}

function draw(dim) {
  if (container.hasChildNodes()) {
  	emptyContainer(container);
  }
  for (let i = 1; i <= dim**2 ; i++) {
	const div = document.createElement('div');
	div.classList.add('sub');
	container.appendChild(div);
  }
  container.style["grid-template-columns"] = `repeat(${dim}, 1fr)`;
  container.style["grid-template-rows"] = `repeat(${dim}, 1fr)`;
  let index = Math.floor(Math.random()*5);
  console.log(`index ${index}`);
  let animalString = animalsArray[index];
  console.log(`animalsArray ${animalsArray}`);
  console.log(`animalsArray[1] ${animalsArray[1]}`);
  console.log(`animalString ${animalString}`);
  container.style["background-image"] = `url(\'images/${animalString}.jpg\')`;
  const divs = document.querySelectorAll('.sub');

  function changeColor(e) {
	  const div = e.target;
	  const value1 = Math.floor(Math.random()*256);
	  const value2 = Math.floor(Math.random()*256);
	  const value3 = Math.floor(Math.random()*256);
	  const opacity = Math.floor(Math.random()*101);
	  div.style["background-color"] = `rgba(${value1},${value2},${value3},${opacity})`
	}

  divs.forEach(div => div.addEventListener('mouseenter', changeColor));
}









