var colors = "cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){ //預設值 //角色能力基礎值
		this.r=args.r || random(50,150)
		this.p=args.p || {x:random(width),y:random(height)}
		this.v={x:random(-1,1),y:random(-1,1)}
		this.a=args.a
		this.color=random(colors)
	}
	draw(){
		push()
			translate(this.p.x,this.p.y)
			fill(this.color) //角色樣式繪製
			ellipse(0, 0, this.r);
			fill(255) //左眼
			ellipse(-15,-20,20)
			fill(0) 
			ellipse(-15,-20,10)
			fill(255) //右眼
			ellipse(15,-20,20)
			fill(0)
			arc(15,-20,10,10,0,PI)
			fill(255) //嘴巴
			arc(0,0,this.r/2,this.r/2,0,PI)
			//fill(0) //黑色眼珠
			//arc(0,0,this.r/3,this.r/3,0,PI)
		pop()
			}
	update(){ //運動的運作
		this.p.x += this.v.x
		this.p.y += this.v.y
		this.v.x += this.a.x
		this.v.y += this.a.y
		this.v.x*=0.999
		this.v.y =this.v.y *0.999
		if(this.p.y>height){
			this.v.y = -abs(this.v.y) //abs為絕對值
		}
	}
}

var ball
var balls = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<20;i++){
		ball=new Ball({
			r:100,
			a:{x:0,y:0.2},
			p:{x:width/2,y:height/2}
		}) //產生一個新的Ball class元件 //傳參數 //不傳參數Ball({})
		balls.push(ball)
	}
}

function draw() {
	background(100);
	//for(var i=0;i<balls.length;i++){
		//let ball = balls[i]
	for(let ball of balls){ //等於上面兩行
		ball.draw()
		ball.update()
		
	}
}