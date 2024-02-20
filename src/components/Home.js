import React from 'react'
import video1 from '../assets/Video3.mp4';
import video2 from '../assets/Video4.mp4'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import './home.css'
import LinkIcon from '@mui/icons-material/Link';
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
        <span className='sp-1-float'><InstagramIcon className='icon-svg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '34px', color: '#fff' }} />Instagram</span>
        <span className='sp-2-float'><LinkedInIcon className='icon-svg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '34px', color: '#fff' }} />linkedin</span>
        <span className='sp-3-float'><AlternateEmailOutlinedIcon className='icon-svg' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '34px', color: '#fff' }} />Email</span>


      </div>

      <video src={video1} autoPlay loop disablePictureInPicture />
      <h1 className='h1-div1'>The
        world's
        leading
        <span className='span-div1'>AI-native</span><hr className='loader' />
        <br />
      </h1>



      <p className='p-div2'>It is a long established fact that a reader  </p>

      <p className='p-div1'> typesetting industry. Lorem Ipsum has been the industry's standard dumm<br /></p>

      <a href='https://www.linkedin.com/in/mallikarjun-mooke/'><button class="button2-home" >Contact</button></a>


      <div className='text-home-div-3'>

        <h4 className='h3-main-div'> <img className='sc-main-div' src={image} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

        <h4 className='h3-main-div'><img className='sc-main-div' src={image1} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

        <h4 className='h3-main-div'> <img className='sc-main-div' src={image2} /></h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random  <br />It has roots in a piece of classical Latin literature from 45 BC,<br /> making it over 2000 years old. Richard McClintock    </p>

      </div>




      {/* second card */}

      <div className='div-1-main'>

        <div className='div-card-photos'>
          <span><img className='photo1-div-second' src={photo1} />
            <span className='span-text-cards'><h2>Meetings</h2><p>Lorem Ipsum is simply dummy text  <br />typesetting industry. Lorem Ipsum has been the industry's <br /> </p></span>
          </span>

          <span><img className='photo1-div-second' src={photo2} />
            <span className='span-text-cards'><h2>Technology</h2><p>Lorem Ipsum is simply  <br />typesetting industry. Lorem Ipsum <br />, </p></span>
          </span>

          <span><img className='photo1-div-second' src={photo3} />
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
        <div className='final-div-conatiner'><h1 className='heading-welcome'>See your IT from a better place !!</h1>
          <img className="final-image1" src={image} />
          <p className='final-image-text'>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanmake a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s<br /> with the release of Letraset with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>
        <div className='final-div-conatiner'><h1 className='heading-welcome'>Connect with US</h1>
         
          <p className='final-image-text'>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanmake a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s<br /> with the release of Letraset with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> <img className="final-image2" src={image3} />

        </div>

        <footer>
          <div className='foo-1'>
          <span>Docs
            <p>DOC's guideline</p>
          </span>
          <span>Community
          <p>community guideline</p>
          </span>
          <span><p>Link<a  href='https://github.com/MallikarjunMooke'> git hub<LinkIcon style={{color:'#000'}}className='link-git-hub'/></a></p></span>
          </div>
        </footer>
      </div>




    </div>
  )
}

export default Home;