import React, { useEffect, useRef } from 'react';
import human from '../assets/human.jpg';
import { Footer } from './footer';
import { gsap } from 'gsap';
import ChatBot from 'react-simple-chatbot';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ai1 from '../assets/vrr2.webp';
import ai2 from '../assets/vrr1.webp';
import joy from '../assets/joy.jpg'
import joy3 from '../assets/joy3.jpg'
import joy4 from '../assets/human1.jpg';
import joy5 from '../assets/joy-4.jpg';
import joy6 from '../assets/AI.jpg';
import joy7 from '../assets/joy1.jpg';




import './platform.css';

const Platform = () => {
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Hiii!',
      // end: true, 
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0%",
        end: "5% ",
        scrub: 3,
        // markers: true,
      }
    });

    tl.to(".human-text", {
      top: "-20vh",
      // left: "40vw",
      y: "-20%",
      scale: 10,
      duration: 1,
      opacity: 0,
      // pin: true,
    });

    tl.to(".para-main-div-two", {
      bottom: "10vh",
      scrub: 1,
      duration: 1,
      delay: 2,

    })

    tl.to(".para-main-div-two-2", {
      bottom: "-10%",
      scrub: 1,
      duration: 1,
      delay: 2,

    })


    tl.to(".ball-moving-human", {
      left: "70vw",
      top: "88vh",
      opacity: 0.8,
      scrub: 1,
      delay: 2,
      duration: 3,


    })

    tl.to(".ball-moving-human-sm", {

      left: "70vw",
      top: "90vh",

      opacity: 1,
      scrub: 1,
      duration: 1,
      delay: 2,
      borderRadius: "none",

    })


  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "90%",
        end: "100% ",
        scrub: 3,
        // markers: true,
      }
    });


    tl1.to(".span-1-main-2", {

      left: "20vw",
      top: "22vh",
      pin: true,
      scale: 20,
      scrub: 1,
      rotation: 160,
      pin: true,
      opacity: 0.04,
      backgroundColor: "white",




    })
    tl1.to(".span-side-tesx-container-2", {
      y: "-80%",
      ease: "all",
      scrub: 1,
      zIndex: 2,
      opacity: 0,


    });
    tl1.to(".span-side-tesx-container-5", {
      x: "51%",
      ease: "all",
      scrub: 1,
      zIndex: 1,
      opacity: 1,
      scale: 2,
    });
    tl1.to(".joy-div", {

      opacity: 10,
      zIndex: 2,
      transformY: "-100px",
      delay: 2,
      duration: 2,
      scrub: 2,

    })
    tl1.to(".joy2-div", {

      opacity: 10,
      zIndex: 2,
      delay: 2,
      duration: 2,
      scrub: 2,
      marginLeft: "-400px",


    })
    tl1.to(".joy3-div", {

      opacity: 10,
      zIndex: 2,
      delay: 2,
      duration: 2,
      scrub: 2,
      marginLeft: "-890px",


    })
  }, [])
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-div-elements",
        start: "0%",
        end: "20% ",
        scrub: 3,
        markers: true,

      }

    });

    tl1.to(".scroll-span", {
      opacity: '0',
      scale: 12,
      scrub: 2,
      rotate: "-50deg",

    })

    tl1.to(".scroll-span-1", {
      opacity: '0',
      scale: 12,
      scrub: 2,
      rotate: "30deg",
    })

    tl1.to(".scroll-span-2", {
      opacity: '0',
      scale: 12,
      scrub: 2,
      rotate: "50deg",

    })


  }, [])

  return (

    <div id='main-div'>

      <ChatBot steps={steps}
        floating={true}
        diabled='false'
        className="chat-bot"

      />
      <div className='two'>
        <img src={human} className='human-main-div' alt='human' />
        <span className='human-text'><h1>Revolutionary AI Website</h1></span>
        <span className='ball-moving-human'></span><span className='ball-moving-human-sm'></span>
        <p className='para-main-div-two'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        <h2 className='para-main-div-two-2' >The standard Lorem Ipsum passage, used since the 1500s</h2>
      </div>

      {/* Part-2 */}

      <div id="main-div-2">
        <div id="dv-2-main">
          <span className='span-1-main-2'><img className='vr1' src={ai1} /></span>
          <span className='span-side-tesx-container-2'>
            <h2 className="span-side-tesx-container-3">Tech-Dash</h2>
            <p className="span-side-tesx-container-4">Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, maTech Dashking it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

          </span>
          <p className="span-side-tesx-container-5">potential to make the world a better place</p>
        </div>

      </div>

      {/*  Part three*/}
      <div className='joy-main'>
        <img src={joy} className='joy-div' alt='human' />
        <img src={joy3} className='joy3-div' alt='human' />
        <img src={joy4} className='joy2-div' alt='human' />

      </div>

      {/* last - div */}

      <div className='last-div'><h2 className='my-h2-element'>Let's Connect with us </h2>
        <div style={{ color: "rgb(0, 255, 247" }} className='f1-div'>What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>


        <div className='scroll-div-elements'>
          <span className='scroll-span'><img src={joy5} /></span>
          <span className='scroll-span-2'><img src={joy7} /></span>

        </div>


      </div>
      <span><Footer /></span>
    </div>

  );
};

export default Platform;
