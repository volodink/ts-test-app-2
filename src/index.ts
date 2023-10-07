let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
let context = canvas.getContext("2d");

const drawFig = (x:number, y:number) => {
  context!.fillStyle = 'Red';
  context!.fillRect(x, y, 10, 10);
};

const drawPyramid = (n:number) => {
  context!.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 10; x < n * 10; x += 10) {
    for (let y = x; y < n * 10; y += 10) {
      drawFig(285 + 15 + x * 1.5, y * 1.5);
      drawFig(310 - 15 - x * 1.5, y * 1.5);
    };
  };
};

const drawPyramidFunction = () => {
  let iv = document.getElementById('iv') as HTMLInputElement;
  let n = parseFloat(iv.value);
  drawPyramid(n);
};

console.log('Loaded!');
