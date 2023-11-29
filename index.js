document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('main');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('slider');
    const brushSizeDisplay = document.getElementById('brushSize');
    let isDrawing = false;
    let brushColor = 'black';
    let brushSize = 5;
  
    // Set initial brush size display
    brushSizeDisplay.textContent = brushSize;
  
    // Event listener for brush color buttons
    document.getElementById('black').addEventListener('click', function () {
      setBrushColor('black');
    });
  
    document.getElementById('pink').addEventListener('click', function () {
      setBrushColor('#F50057');
    });
  
    document.getElementById('blue').addEventListener('click', function () {
      setBrushColor('#2979FF');
    });
  
    document.getElementById('yellow').addEventListener('click', function () {
      setBrushColor('#FFD600');
    });
  
    // Event listener for eraser button
    document.getElementById('erase').addEventListener('click', function () {
      setBrushColor('white');
    });
  
    // Event listener for new button
    document.getElementById('new').addEventListener('click', function () {
      clearCanvas();
    });
  
    // Event listener for slider input
    slider.addEventListener('input', function () {
      setBrushSize(this.value);
    });
  
    // Mouse event listeners for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.strokeStyle = brushColor;
  
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function stopDrawing() {
      isDrawing = false;
      ctx.beginPath();
    }
  
    function setBrushColor(color) {
      brushColor = color;
    }
  
    function setBrushSize(size) {
      brushSize = size;
      brushSizeDisplay.textContent = size;
    }
  
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
  