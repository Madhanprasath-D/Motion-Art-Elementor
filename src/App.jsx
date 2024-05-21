import { useRef, useEffect } from 'react'
import Fluid from 'webgl-fluid'
import './App.css'

function App() {

  const defaultConfig = {
    SIM_RESOLUTION: 128,        // Moderate simulation resolution
    DYE_RESOLUTION: 512,        // High dye resolution for better visual quality
    CAPTURE_RESOLUTION: 512,    // Resolution for capturing the simulation
    DENSITY_DISSIPATION: 10,    // Quicker color fade
    VELOCITY_DISSIPATION: 0.99, // Maintains fluid movement longer
    PRESSURE: 0.3,              // Standard pressure value
    CURL: 60,                   // Vorticity to create swirling motion
    SPLAT_RADIUS: 0.55,          // Smaller splat radius for finer disturbances
    SPLAT_FORCE: 5000,
  };

  const canvas = useRef(null)
  useEffect(() => {
    const c = canvas.current;
    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 5,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE: 0.8,
      CURL: 30,
      SPLAT_RADIUS: 0.2,
      BACK_COLOR: { r: 14, g: 15, b: 26 },
      SPLAT_FORCE: 5000,
    };
    Fluid(c, config);

    const handleMouseEvent = (event) => {
      const { clientX, clientY } = event;
      const rect = c.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      switch (event.type) {
        case 'mousemove':
          c.dispatchEvent(new MouseEvent('mousemove', { clientX: mouseX, clientY: mouseY }));
          break;
        case 'mousedown':
          c.dispatchEvent(new MouseEvent('mousedown', { clientX: mouseX, clientY: mouseY }));
          break;
        case 'mouseup':
          c.dispatchEvent(new MouseEvent('mouseup', { clientX: mouseX, clientY: mouseY }));
          break;
        default:
          break;
      }
    };

    document.addEventListener('mousemove', handleMouseEvent);
    document.addEventListener('mousedown', handleMouseEvent);
    document.addEventListener('mouseup', handleMouseEvent);

    return () => {
      document.removeEventListener('mousemove', handleMouseEvent);
      document.removeEventListener('mousedown', handleMouseEvent);
      document.removeEventListener('mouseup', handleMouseEvent);
    };
  }, []);




  return (
    <>
      <div className="App">
        <canvas ref={canvas} className='backdrop' style={{ width: "100vw" }}></canvas>
        <div className="overlay_div">
          <Nav />
          <Hero />
          <Card />
          <Section />
          <Img_card />
          <Browser />
          <Text />
          <Third_card />
          <Footer />
        </div>
      </div>
    </>
  )
}


function Nav() {
  return (
    <nav>
      <div className="inner_nav">
        <img src="MotionArtEffect-logo.png" alt="" />
        <button className='btn'>Purchase Now</button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <>
      {/* <Nav /> */}
      <div className='hero'>
        <div className="inner_hero">
          <div className="left">
            <h5 className='gradiend_text'>Transform <br />Your Website</h5>
            <h5 style={{ color: "white", fontWeight: "500", fontSize: "15 px", lineHeight: "20px" }}>With Motion <br />Art Effect</h5>
          </div>
          <div className="right">
            <h1>Attract Your Visitors Attention With Colorful
              <span className='gradiend'> Motion Art Effect</span></h1>
            <p>Unleash the power of creativity with Motion Art for
              Elementor - your ultimate solution for seamlessly integrating
              captivating animations into your website</p>
          </div>
        </div>
      </div>
      <h2 className='text_o'>Trusted by thousands of users around the world</h2>
      {/* <Card />
      <Section />
      <Img_card /> */}

    </>
  )
}


function Card() {
  return (
    <div className='card'>
      <div className="inner_card">
        <img src="motionarteffect-img2.png" alt="" />
        <div className="rating">
          <img src="motionarteffect-img4.png" alt="" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>

      <div className="inner_card">
        <img src="motionarteffect-img1.png" alt="" />
        <div className="rating">
          <img src="motionarteffect-img4.png" alt="" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>

      <div className="inner_card">
        <img src="motionarteffect-img3.png" alt="" />
        <div className="rating">
          <img src="motionarteffect-img4.png" alt="" />
          <p>4.5 Score, 9 Reviews</p>
        </div>
      </div>
    </div>
  )
}

function Section() {
  return (
    <>
      <div className='section'>
        <div className="content">
          <h2>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
          <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
          <button className="gradient_btn">Purchase From Envato</button>
        </div>
        <img src="motionarteffect-img5.png" alt="" />
      </div>
      <h1 className="text" style={{ textAlign: "center", width: "50%" }}>Apply On Any Section Or Enable For Whole Page</h1>
    </>
  )
}


function Img_card() {
  return (
    <div className='img_card'>
      <div className="img_card_child">
        <h2>Apply On Section</h2>
        <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
        <img src="motionarteffect-img11.png" alt="" />
      </div>
      <div className="img_card_child" style={{ margin: "50px 0 0 0" }}>
        <h2>Apply On Page</h2>
        <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
        <img src="motionarteffect-img10.png" alt="" />
      </div>
    </div>
  )
}

function Browser() {
  return (
    <div className='browesr'>
      <h2>Supported by All Popular Browsers</h2>
      <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
      <img src="motionarteffect-img8.png" alt="" />
    </div>
  )
}




function Text() {
  return (
    <div className='text'>
      <h2>
        An All-Round Plugin With Powerful Features
      </h2>
      <p>
        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
      </p>
    </div>
  )
}

import React from 'react'

function Third_card() {
  return (
    <div className='third_card'>
      <div className="last_card">
        <img src="motionarteffect-img9.png" alt="" />
        <h2>Light Weight</h2>
        <p>Motion Art for Elementor is designed to be lightweight.</p>
      </div>
      <div className="last_card">
        <img src="motionarteffect-img6.png" alt="" />
        <h2>100% Responsive</h2>
        <p>Create a consistent visual experience across all devices.</p>
      </div>
      <div className="last_card">
        <img src="motionarteffect-img7.png" alt="" />
        <h2>User Friendly Interface</h2>
        <p>Ensure a smooth experience for both applicants and administrators.</p>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>Documentations</li>
        <li>Support</li>
      </ul>
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
    </div>
  )
}


// export default Hero


export default App
