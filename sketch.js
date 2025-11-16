let queue = [];
let stack = [];

function setup() {
  let canvas = createCanvas(700, 500);
  canvas.parent("sketch-holder");
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(230);

  // === 背景分區 ===
  noStroke();
  fill(245);
  rect(50, 50, 600, 160, 20);   // Queue 區域
  rect(50, 270, 600, 160, 20);  // Stack 區域

  // === 標題 ===
  fill(0);
  text("Queue (FIFO)", width / 2, 70);
  text("Stack (LIFO)", width / 2, 250); // ← 移到兩區中間

  drawQueue(120);  // Queue 在上半部
  drawStack(350);  // Stack 改為橫向
}

// ====== Queue 繪圖 ======
function drawQueue(yPos) {
  fill("#4CAF50");
  for (let i = 0; i < queue.length; i++) {
    rect(120 + i * 80, yPos, 60, 50, 10);
    fill(255);
    text(queue[i], 150 + i * 80, yPos + 25);
    fill("#4CAF50");
  }

  // Front / Rear 標籤
  fill(0);
  text("Front", 70, yPos + 25);
  text("Rear", 130 + queue.length * 80, yPos + 25);
}

// ====== Stack 繪圖（橫向版本） ======
function drawStack(yPos) {
  fill("#2196F3");
  for (let i = 0; i < stack.length; i++) {
    rect(120 + i * 80, yPos, 60, 50, 10);
    fill(255);
    text(stack[i], 150 + i * 80, yPos + 25);
    fill("#2196F3");
  }

  // Left = Bottom, Right = Top
  fill(0);
  text("Bottom", 70, yPos + 25);
  text("Top", 130 + stack.length * 80, yPos + 25);
}

// ====== Queue 操作 ======
function enqueue() {
  let value = int(random(1, 99));
  queue.push(value);
}

function dequeue() {
  if (queue.length > 0) queue.shift();
}

// ====== Stack 操作（橫向） ======
function pushStack() {
  let value = int(random(1, 99));
  stack.push(value);
}

function popStack() {
  if (stack.length > 0) stack.pop();
}
