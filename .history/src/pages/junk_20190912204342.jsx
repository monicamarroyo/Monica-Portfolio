/*

*/

/*
const About = ({ data }) => (
  <Section id="about-me" style={{ backgroundColor: "red" }}>
    <Row className="about_container">
      <BackgroundImage
        Tag="section"
        fluid={data.bgFly.childImageSharp.fluid}
        className="bgFly"
      >
        <Col md="auto" sm="12" className="about_left">
          <div className="about_header">
            <h1 className="about_header-text">Contact</h1>
            <div className="about_header-underline" />
          </div>
          <div className="about_contact d-none d-xl-block d-lg-block d-md-block">
            Austin TX 78744
            <br />
            (512) 825-2633
            <br />
            Monica.arroyo1319@gmail.com
          </div>
        </Col>
      </BackgroundImage>
      <Col md="auto" className="about_right">
        <div className="side-content">
          <div className="contact-form ">
            <form id="email-form" name="email-form" data-name="Email Form">
              <label htmlFor="name" className="contact-form-label">
                Name:
              </label>
              <input
                type="text"
                className="input contact-input w-input"
                max="256"
                name="Name"
                data-name="Name"
                placeholder="Your name"
                id="Name"
                required=""
              />
              <label htmlFor="Email" className="contact-form-label">
                Email:
              </label>
              <input
                type="email"
                className="input contact-input w-input"
                max="256"
                name="email"
                data-name="Email"
                placeholder="Email address"
                id="Email"
                required=""
              />
              <label htmlFor="Message" className="contact-form-label">
                Message:
              </label>
              <textarea
                id="Message"
                name="Message"
                max="5000"
                data-name="Message"
                required=""
                placeholder="Tell me about your project"
                className="input contact-input text-field w-input"
              />
              <input
                type="submit"
                value="Send Message"
                data-wait="Please wait..."
                className="button big color-3 w-button"
              />
            </form>
          </div>
        </div>
      </Col>
    </Row>
  </Section>
)


*/


/*
 <Pulse>
          <SectionHeader
            index={4}
            title="Contact Me"
            description="I'd Love To Hear From You."
          />
        </Pulse>

       <Pulse>
            <SectionHeader
              index={4}
              title="Contact Me"
              description="I'd Love To Hear From You."
            />
          </Pulse>
          <Row className="text-center mb-3">
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="github" to="https://twitter.com" />
              </div>
              <p className="socialName">Linkedin</p>
            </Col>
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="linkedin" to="https://twitter.com" />
              </div>
              Github
            </Col>
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="envelope" to="https://twitter.com" />
              </div>
              Email
            </Col>
          </Row>
          <ContactForm />

*/

//import "../components/scss/typist.scss"

// what i had orginally
/*
/*
</BackgroundImage>
 <BackgroundImage
          Tag="section"
          fluid={data.bgImage.childImageSharp.fluid}
          className="background-image"
        >

<Section padding={Section.PADDING_LARGE}>
          <Container>
            <MainHeader title="Hello" />
          </Container>
        </Section>
*/
//  data: PropTypes.object.isRequired,
//"Intro", "Skillset", "Values", "Showcase", "My Story"
//"Home", "About Me", "Projects", "Skills", "Contact Me"
//import Img from "gatsby-image"
//import SplitScreen from '../components/SplitScreen'
//import HTML from "../components/html"
//import RepeatTypist from "../components/typist"
//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
// <div className="stars" />
//<div className="stars2" />
//<div className="stars3" />
//
/*
<SectionHeader
              index={4}
              title="About Me."
              description="Learn more about who I am and why I love what I do."
            />
            <Row className="text-center mb-3">
              <Col md="6">
                <Img 
                alt="monica arroyo"
                className="img-fluid rounded-circle mb-5"
                fixed={data.myPicture.childImageSharp.fixed}
                />
                <h1>My picture and shit</h1>
              </Col>
              <Col md="6">
                <HTML>{data.aboutMeDevMarkdown.html}</HTML>
              </Col>
            </Row>
*/

/*
<Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />
*/

/*
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />

*/
/*
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            aboutMeDeveloperMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-developer" } }
            ) {
              html
            }
            aboutMeJourneyMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-journey" } }
            ) {
              html
            }
            aboutMeMoreMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-more" } }
            ) {
              html
            }
          }
        `}
        render={data => <IndexPage 
         data={data}
         scrollTop={scrollTop}
         toggleSidebar={toggleSidebar}
         {...prop}
        />}
      />
    )}
  />
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />
*/

/*

*/
/*
 <BackgroundImage
        Tag="section"
        fluid={data.bgPine.childImageSharp.fluid}
        className="bgPineapple"
      >
        <Section
          bg
          id="about-me"
          style={{ height: "100vh" }}
          padding={Section.PADDING_LARGE}
        >
          <MainSection />
        </Section>
      </BackgroundImage>
*/

/*

 <BackgroundImage
          Tag="section"
          fluid={data.bgPine.childImageSharp.fluid}
          className="bgPineapple"
        >
</BackgroundImage>
 <Pulse>
        <About />
      </Pulse>
 <SectionHeader
            index={4}
            title="About Me."
            description="Learn more about who I am and why I love what I do."
          />
 <Section id="projects">
        <Container>
          <Pulse>
            <h1>projects</h1>
          </Pulse>
        </Container>
      </Section>
      <Section id="contact-me">
        <ContactSection />
      </Section>

*/

/*
 <Img fluid={data.bgPine.childImageSharp.fluid} className="pine" />

*/

/*
 <div
        dangerouslySetInnerHTML={{
          __html: data.aboutMeDevMarkdown.html
        }}
         />``````````````````````
*/

/*
 <SectionHeader
      index={4}
      title="About Me."
      description="Learn more about who I am and why I love what I do."
    />
    <Row className="text-left mb-3">
      <Col lg="6">
        <div className="text-center">
          <Img
            alt="monica arroyo"
            className="img-fluid rounded mb-3"
            fixed={data.myPicture.childImageSharp.fixed}
          />
        </div>
        <div className="mb-2">
          <h3>
            <Icon name="graduation-cap" /> Hello there!
          </h3>
          <HTML children={data.aboutMeDevMarkdown.html} />
        </div>
      </Col>
      <Col lg="6" className="text-left">
        <h3>
          {" "}
          <Icon name="code-fork"/> My Journey as a developer.
        </h3>
        <HTML children={data.aboutMeJourneyMarkdown.html} />
      </Col>
    </Row>
    <Row className="text-left">
      <Col md="12">
        <h3><Icon name="user-circle-o"/> More about me..</h3>
        <HTML children={data.aboutMeMoreMarkdown.html} />
      </Col>
    </Row>

*/

//<HTML>{data.aboutMeDevMarkdown2}</HTML>
/*

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
*/

/*
<form id="email-form" name="email-form" data-name="Email Form">
          <label for="Name" class="contact-form-label">Name:</label>
          <input type="text" class="input contact-input w-input" maxlength="256" name="Name" data-name="Name" placeholder="Your name" id="Name" required=""/>
            <label for="Email" class="contact-form-label">Email:</label>
            <input type="email" class="input contact-input w-input" maxlength="256" name="email" data-name="Email" placeholder="Email address" id="Email" required=""/>
            <label for="Message" class="contact-form-label">Message:</label>
            <textarea id="Message" name="Message" maxlength="5000" data-name="Message" required="" placeholder="Tell me about your project" class="input contact-input text-field w-input"></textarea>
            <input type="submit" value="Send Message" data-wait="Please wait..." class="button big color-3 w-button"/>
            </form>
*/

/*
<form id="email-form" className="email-form">
            <div className="form-group">
              <label for="name" className="contact-form-label">
                Name:
              </label>
              <input
                type="text"
                className="input contact-input"
                maxLength="256"
                name="name"
                placeholder="Your name"
                id="name"
                required
              />
            </div>
            <label for="email" className="contact-form-label col-md-3">
              Email:
            </label>
            <input
              type="email"
              className="input contact-input"
              maxLength="256"
              name="email"
              placeholder="Your name"
              id="email"
              required
            />
            <label for="message" className="contact-form-label col-md-3">
              Message:
            </label>
            <textarea
              type="message"
              className="input contact-input text-field"
              maxLength="5000"
              name="email"
              placeholder="Your message"
              id="message"
              required
            />
            <input />
          </form>

*/

/*

<div className="contact-form ">
          <form id="email-form" className="email-form">
            <div className="form-group">
              <label for="name" className="contact-form-label">
                Name:
              </label>
              <input
                type="text"
                className="input contact-input"
                maxLength="256"
                name="name"
                placeholder="Your name"
                id="name"
                required
              />
            </div>
            <label for="email" className="contact-form-label col-md-3">
              Email:
            </label>
            <input
              type="email"
              className="input contact-input"
              maxLength="256"
              name="email"
              placeholder="Your name"
              id="email"
              required
            />
            <label for="message" className="contact-form-label col-md-3">
              Message:
            </label>
            <textarea
              type="message"
              className="input contact-input text-field"
              maxLength="5000"
              name="email"
              placeholder="Your message"
              id="message"
              required
            />
            <input />
          </form>
        </div>v
*/

// <MainSection />
/*--=
<Section bg id="about-me" padding={Section.PADDING_LARGE} />
 <Section bg id="about-me"
           padding={Section.PADDING_LARGE}>
            dsfasdf
          </Section>
*/
/*

 <Row style={{ padding: 0, margin: 0 }} className="Contact_Row">
      <Col md="4" style={{ padding: 0, margin: 0 }} className="left">
        <Img
          fluid={data.pineapple.childImageSharp.fluid}
          className="pine"
        />
      </Col>

      <Col md="8" style={{ padding: 0, margin: 0 }} className="right">
        Right
      </Col>
    </Row>
*/

/*
 <BackgroundImage
        Tag="section"
        fluid={data.pineapple.childImageSharp.fluid}
        className="pine"
      >
       </BackgroundImage>
*/
/*
import "./scss/mainSection.scss"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactDOm from "react-dom"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import { Col, Container, Row } from "reactstrap"
import Heading from "./headings"
import "./scss/typist.scss"
import { createStars, updateStars, updateStar } from "./utils"
//import SplitPane from 'react-split-pane';
import Draggable from "react-draggable"
//import { StaticQuery } from "gatsby";

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

*/

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