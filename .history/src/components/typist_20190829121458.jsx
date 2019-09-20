import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import { Col, Container, Row } from "reactstrap"
import Heading from "./headings"
import "./scss/typist.scss"
import { createStars, updateStars, updateStar } from "./utils"

const RepeatTypist = () => {
  return (
    <header className="text-center pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" className="main_header_text" id="title">
          I am&nbsp;
          <TypistLoop>
            {["Monica Arroyo", "a Full-Stack Developer", "a Designer"].map(
              text => (
                <Typist key={text} startDelay={1000}>
                   {text}
                  <Typist.Backspace count={text.length} delay={200} />
                </Typist>
              )
            )}
          </TypistLoop>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
export default RepeatTypist
//what I had orginal
/*
<h3 className="hello">HELLO, I AM</h3>
            <h1 className="myname">MONICA ARROYO</h1>
            <h3>
              FULL-STACK <strong>DEVELOPER</strong>
            </h3>


*/

/*
 <div className="stars" />
          <div className="stars2" />
          <div className="stars3" />

*/
/*
<Container>
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="titless">
        <span className="span2">PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
    </Container>

*/

/*
 
*/
//export default RepeatTypist
/*+ (Math.random()*20 - Math.random()*20)
    this.y = 300//window.outerHeight
    this.s = 2 + Math.random();
    this.w = 300//window.outerWidth
    this.h = 300//window.outerHeight
    this.direction = this.random > .5 ? -1 : 1
    this.radius = 1 + (3 * this.random)
    this.color  = "#ff417d"

    this.ID = setInterval(function(){
      microparticles.push(new microParticle(c1.context,{
        x: this.x,
        y: this.y
      }))
    }.bind(this), this.random*20)

    setTimeout(function(){
      clearInterval(this.ID)
    }.bind(this), this.life )
  }

  render(){
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // this.canvas.lineWidth = 2;
    this.canvas.shadowOffsetX = 0;
    this.canvas.shadowOffsetY = 0;
    // this.canvas.shadowBlur = 6;
    this.canvas.shadowColor = "#000000";
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move(){
    this.x -= (this.direction) * Math.sin(this.progress/((this.random1*430))) * this.s;
    this.y -= Math.cos(this.progress/this.h) * this.s;

    if(this.x < 0 || this.x > this.w - this.radius){
      clearInterval(this.ID)
      return false
    }

    if(this.y < 0){
      clearInterval(this.ID)
      return false
    }
    this.render()
    this.progress++
    return true
  }
}

class microParticle{
  constructor(canvas, options){
    this.random = Math.random()
    this.random1 = Math.random()
    this.random2 = Math.random()
    this.progress = 0;
    this.canvas = canvas;

    this.x = options.x
    this.y = options.y
    this.s = 2 + Math.random() * 3;
    this.w =  300// window.outerWidth
    this.h =  300//window.outerHeight
    this.radius = 1 + this.random*0.5
    this.color  = "#4EFCFE";//this.random > .5 ? "#a9722c" : "#FFFED7"
  }

  render(){
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move(){
    this.x -= Math.sin(this.progress/(100/(this.random1 - this.random2*10))) * this.s;
    this.y += Math.cos(this.progress/this.h) * this.s;

    if(this.x < 0 || this.x > this.w - this.radius){
      return false
    }

    if(this.y > this.h){
      return false
    }
    this.render()
    this.progress++
    return true
  }
}

var random_life = 1000


setInterval(
  function(){
    particles.push(new Particle(canvas))
    random_life = 2000 * Math.random()
  }.bind(this)
, random_life)

function clear(){
  let grd = canvas.createRadialGradient(tela.width/2, tela.height/2, 0, tela.width/2, tela.height/2, tela.width);
        grd.addColorStop(0,"rgba(82,42,114,1)");
        grd.addColorStop(1,"rgba(26,14,4,0)");
    // Fill with gradient
    canvas.globalAlpha=0.16;
    canvas.fillStyle=grd;
    canvas.fillRect(0, 0, tela.width, tela.height);
}

function blur(ctx,canvas, amt) {
  // ctx.filter = `blur(${amt}px)`
  // ctx.drawImage(canvas, 0, 0)
  // ctx.filter = 'none'
}

function update(){
  clear();
  particles = particles.filter(function(p) {
    return p.move()
  })
  microparticles = microparticles.filter(function(mp) {
    return mp.move()
  })
  requestAnimationFrame(update.bind(this))
}



update()


/*
<div className="main_header_typist">
      {count ? (
        <Typist
          stdTypingDelay={0}
          avgTypingDelay={100}
          cursor={{ blink: true, hideWhenDone: true }}
          onTypingDone={() => setCount(0)}
        >
          <Typist.Delay ms={2000} />
          I Am Monica Arroyo
          <Typist.Delay ms={200} />
          <Typist.Backspace count={13} delay={200} />
          <Typist.Delay ms={500} />
          Developer
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={9} delay={200} />
          <Typist.Delay ms={500} />
          Designer
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={13} delay={200} />
          <Typist.Delay ms={500} />
        </Typist>
      ) : (
        <span className="main_header_text">I am Monica Arroyo</span>
      )}
    </div>

*/

/*

let particles = []
let microparticles = []
const c1 = createCanvas({width: 300, height: 300})
//$("body").append(c1.canvas);
const tela   = c1.canvas;
const canvas = c1.context;

// $("body").append(tela);
document.body.append(c1.canvas);
function createCanvas(properties){
  let canvas = document.createElement('canvas');
      canvas.width = properties.width;
      canvas.height = properties.height;
  let context = canvas.getContext('2d');
  return {
    canvas: canvas,
    context: context
  }
}
class Particle{
  constructor(canvas){
    this.random = Math.random()
    this.random1 = Math.random()
    this.random2 = Math.random()
    this.progress = 0;
    this.canvas = canvas;
    this.life = 1000 + (Math.random()*3000)

    this.x = (300/2) /* (window.outerWidth/2)*/

/*
I am&nbsp;
          <TypistLoop>
            {["Monica Arroyo", "a Full-Stack Developer", "a Designer"].map(
              text => (
                <Typist key={text} startDelay={1000}>
                   {text}
                  <Typist.Backspace count={text.length} delay={200} />
                </Typist>
              )
            )}
          </TypistLoop>


*/

/*
constructor() {
    super();
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    this.createStars();
    this.raf = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  componentWillReceiveProps(nextProps) {
    updateStars(
      this.stars,
      nextProps.width,
      nextProps.height,
      nextProps.speed,
      nextProps.down,
    );
    if (this.ctx && !nextProps.sparkle) this.ctx.globalAlpha = 1;
  }

  tick() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.props.color;
    this.stars.forEach((star) => {
      if (this.props.sparkle) this.ctx.globalAlpha = Math.random();
      this.ctx.fillRect(star.x, star.y, star.w, star.w);
      updateStar(star, this.canvas.height);
    });
    this.raf = requestAnimationFrame(this.tick);
  }

  createStars() {
    this.stars = createStars(
      this.props.stars,
      this.canvas.width,
      this.canvas.height,
      this.props.speed,
      this.props.down,
    );
  }
  
   render () {
     return (
<canvas
        width={this.props.width}
        height={this.props.height}
        ref={(canvas) => { this.canvas = canvas; }}
      />
     )
    
   }
}

RepeatTypist.defaultProps = {
  stars: 100,
  speed: 0.3,
  color: '#ffffff',
  width: 1000,
  height: 200,
  sparkle: false,

*/
