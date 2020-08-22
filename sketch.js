let bubble1 = [];
let bubble2=[];
let bubble3=[];
let q = [600, 900, 1000, 1100, 1400, 1500, 1600, 650, 2000];
let w = [0, 100, 150, 200, 300, 400, 500, 550, 20, 490, ];
let parvesh;
let timer = 8;
let time=10;
let t=20;
let count=0;
let l = 100;
let a = 100;

class bubbles {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}
	show(c, v, b) { //stroke(255);
		//strokeWeight(2);
		fill(c, v, b);
		ellipse(this.x, this.y, this.r)
	}
	move() {
			this.x = this.x + random(-9, 1);
			this.y = this.y + random(-1, 1);
		}

		in (other) {
			let d = dist(other.x, other.y, this.x, this.y)
			if (d < ((this.r + other.r) - 35)) {
				return true;
			} else {
				return false;
			}
		}
	
	vi (other) {
			let d = dist(other.x, other.y, this.x, this.y)
			if (d < ((this.r + other.r) - 35)) {
				return true;
			} else {
				return false;
			}
		go (other)
			let f = dist(other.x, other.y, this.x, this.y)
			if (f < ((this.r + other.r) - 35)) {
				return true;
			} else {
				return false;
			}
		
		
		
		
		}
	
	
	col()
	{fill('pink');
		ellipse(this.x, this.y, this.r)
	}
	
	display() {
    stroke(255);
    fill('orange');
    ellipse(this.x,this.y, 24);
	}
	
	

}

function setup() {

	createCanvas(windowWidth, windowHeight);
	//background(100);
	for (i = 0; i < 50; i++) {
		let m = random(q);
		let n = random(w);
		bubble1[i] = new bubbles(m, n, 40);
		bubble2[i]=new bubbles(m,random(height),40);
	}
	parvesh = new bubbles(100,100, 30);
}

function mousePressed() {
	
	if(t==0)
	{
  // push adds objects to end of array index
  bubble3.push(new bubbles(mouseX, mouseY,25));
	}}




function draw() {

	background('white');
	

	if (frameCount % 60 == 0 && timer > 0) {
		timer--;
		
	
	}
	if (frameCount % 60 == 0 && t > 0) {
		t--;
			}	

	if (timer == 0) {
		for (let i = 0; i < bubble1.length; i++) {                              
			bubble1.splice(i, 1);
		}
	}


	if (keyIsDown(LEFT_ARROW)) {
		l -= 5;
	}

	if (keyIsDown(RIGHT_ARROW)) {
		l += 5;
	}

	if (keyIsDown(UP_ARROW)) {
		a -= 5;
	}

	if (keyIsDown(DOWN_ARROW)) {
		a += 5;
	}

	clear();

	for (let i = 0; i < bubble1.length; i++) {
		if (parvesh.in(bubble1[i])) {
			             parvesh.splice();
		}
	}
	
	for (let i = 0; i < bubble3.length; i++)
	{
		if (parvesh.vi(bubble3[i])) 
		{
parvesh.splice();
			
		}
	}
	
	
	
	
	
	for(let i=0;i<bubble2.length;i++)
	{if(parvesh.vi(bubble2[i]))
			{ bubble2.splice(i,1);
			 count=count+1;
			 textSize(32);
//text('count'+count, 10, 30);
			}
	 text('count'+count, 10, 30);
	}
	
	
	
	parvesh.x = l;
	parvesh.y = a;

	parvesh.show(51, 0, 0);
	for (let b of bubble1) {
		b.move();
		b.show(255, 204, 0);
	}
	
	

if (frameCount % 60 == 0 && time > 0) {
		time--;
	}
		for (let c of bubble2) {
               if(time==0)
                   {
			                 c.move();
		                    c.col();
									 }
	                     	
}

for (var e = 0; e < bubble3.length; e++) {
    bubble3[e].move();
    bubble3[e].display();}






}
