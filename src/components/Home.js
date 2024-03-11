import React from 'react'
import video1 from '../assets/Video3.mp4';
import video2 from '../assets/Video4.mp4'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './home.css'
// import { Footer } from './footer';
import ChatBot from 'react-simple-chatbot';
import photo1 from '../assets/p1.jpg';
import photo2 from '../assets/p2.jpg';
import photo3 from '../assets/p3.jpg';
import image from '../assets/scroll7.jpg';

import image1 from '../assets/scroll2.jpg';
import image2 from '../assets/scroll5.jpg';
import image3 from '../assets/scroll6.jpg';



function Home() {
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

  return (
    
    <div className='div-1'>

      <div className='floating-icons'>
        <span className='sp-1-float'><a href='https://www.instagram.com/mechc_oder/?next=%2F'><InstagramIcon className='icon-svg' style={{ fontSize: '32px', color: '#fff', marginRight: '27px' }} />Instagram</a> </span>
        <span className='sp-2-float'><a href='https://www.linkedin.com/in/mallikarjun-mooke/'><LinkedInIcon className='icon-svg' style={{ fontSize: '32px', color: '#fff', marginRight: '35px' }} />Linkedin </a></span>
        <span className='sp-3-float'><a href='https://api.whatsapp.com/qr/IEDD3DKR5X4DP1?autoload=1&app_absent=0'><WhatsAppIcon className='icon-svg' style={{ fontSize: '31px', color: '#fff', marginRight: '20px' }} />WhatsApp</a></span>


      </div>

      <video src={video1} autoPlay loop disablePictureInPicture />
      <h1 className='h1-div1 animate__animated animate__fadeInLeft animate__delay-0.5s'>The
        world's
        leading
        <span className='span-div1'>AI-native</span><hr className='loader' />
        <br />
      </h1>



      <p className='p-div2 animate__animated animate__fadeInLeft animate__delay-0.5s'>It is a long established fact that a reader  </p>

      <p className='p-div1 animate__animated animate__fadeInLeft animate__delay-0.5s'> typesetting industry. Lorem Ipsum has been the industry's standard dumm<br /></p>

      <button class="button2-home animate__animated animate__fadeInLeft animate__delay-1s" ><a href='https://www.linkedin.com/in/mallikarjun-mooke/'>Contact <EastOutlinedIcon className='arrow-icon' /></a></button>


      <div className='text-home-div-3'>

        <h4 className='h3-main-div '> <img className='sc-main-div' src={image} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

        <h4 className='h3-main-div'><img className='sc-main-div' src={image1} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

        <h4 className='h3-main-div'> <img className='sc-main-div' src={image2} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

      </div>




      {/* second card */}

      <div className='div-1-main'>

        <div className='div-card-photos'>
          <span><img className='photo1-div-second animate__animated animate__fadeInLeft animate__delay-3s' src={photo1} />
            <span className='span-text-cards'><h2>Meetings</h2><p>Lorem Ipsum is simply dummy text  <br />typesetting industry. Lorem Ipsum has been the industry's <br /> </p></span>
          </span>

          <span><img className='photo1-div-second animate__animated animate__fadeInUp animate__delay-3s' src={photo2} />
            <span className='span-text-cards'><h2>Technology</h2><p>Lorem Ipsum is simply  <br />typesetting industry. Lorem Ipsum <br />, </p></span>
          </span>

          <span><img className='photo1-div-second animate__animated animate__fadeInRight animate__delay-3s' src={photo3} />
            <span className='span-text-cards'><h2>Development</h2><p>Lorem Ipsum is s <br />typesetting industry. Lorem Ipsum has been the industry's <br />  </p></span>
          </span>

        </div>
        <p>Go Beyond Endpoints With One Platform for Threats Across Your <br />Attack Surfaces.</p>

      </div>

      <ChatBot steps={steps}
        floating={true}
        diabled='false'
        className="chat-bot"

      />

      {/* 3-rd div- container*/}
      <div>
        <div className='final-div-conatiner '><h1 className='heading-welcome '>See your IT from a better place !!</h1>

          <img className="final-image1 animate__animated animate__pulse animate__delay-4s" src={image} />

          <p className='final-image-text animate__animated animate__slideInRight animate__delay-4s'>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanmake a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s<br /> with the release of Letraset with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>
        <div className='final-div-conatiner'><h1 className='heading-welcome'>Connect with US</h1>

          <p className='final-image-text animate__animated animate__slideInLeft animate__delay-5s'>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanmake a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s<br /> with the release of Letraset with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

          <img className="final-image2 animate__animated animate__zoomIn animate__delay-5s" src={image3} />

        </div>

       
      </div>
    {/* <Footer/> */}



    </div>
  )
}

export default Home;