import React from 'react'
import './learn.css'
import vrfirst from '../assets/vrfirst.jpg';
import vrsec from '../assets/vrsec.jpg';
import vrthird from '../assets/vrthird.jpg';
import team from '../assets/team.jpg';
import { Footer } from './footer';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Learn = () => {
  return (
    <div className='learn-main-div'>
      <span className='main-side-text'>
        <h1>Improve your practice.<CrisisAlertIcon /></h1><p>
          Enhance your soft skills with a range of award-winning courses.</p>
        <button className='exp-button'>Explore Courses <ArrowCircleRightIcon fontSize='large' sx={{ verticalAlign: "centre", paddingTop: "1px" }} /> </button>
      </span>
      <span><img className='firstvr' src={vrfirst} /></span>
      <div className='learn-main-1'>
        <h1>History of VR – Timeline of Events and Tech Development</h1>
        <h4 className='blog-head-1'>February 20, 2023 - Dom Barnard</h4>
        <h3 className='blog-head'>In 1935 Stanley Weinbaum released Pygmalion’s Spectacles – a science fiction story. The story’s main character wears a pair of goggles which transports him to a fictional world which stimulates his senses aptly and features holographic recordings. Some consider it to be the origin of the virtual reality (VR) concept as this story was a good prediction of the aims and achievements of the future.

          However the first VR technical developments were in the 1830s, so this is where our timeline starts:</h3>
        <br />

        <span>
          <h2>1838</h2>
          <p>Sir Charles Wheatstone was the first to describe stereopsis in 1838 and was awarded the Royal Medal of the Royal Society in 1840 for his explanation of binocular vision, a research which led him to construct the stereoscope.

            The research demonstrated that the brain combines two photographs (one eye viewing each) of the same object taken from different points to make the image appear to have a sense of depth and immersion (3-dimensional).

            This technology enabled Wheatstone to create the earliest type of stereoscope. It used a pair of mirrors at 45 degree angles to the user’s eyes, each reflecting a picture located off to the side.</p>
          <img className=' vrthird' src={vrsec} />
          <h4 className='blog-head-1'>The Wheatstone mirror stereoscope.</h4><br />

          <span><h4 className='blog-head-1'>1935</h4>


            <h3>In 1935 American science fiction writer Stanley Weinbaum presented a fictional model for VR in his short story Pygmalion’s Spectacles. In the story, the main character meets a professor who invented a pair of goggles which enabled “a movie that gives one sight and sound […] taste, smell, and touch. […] You are in the story, you speak to the shadows (characters) and they reply […] the story is all about you, and you are in it.”

            </h3>

            <h4>Pygmalion’s Spectacles short story..</h4>
          </span>


        </span>
        <span><h4 className='blog-head-1'>1956</h4>


          <p>Cinematographer Morton Heilig created Sensorama, the first VR machine (patented in 1962). It was a large booth that could fit up to four people at a time. It combined multiple technologies to stimulate all of the senses: there was a combined full colour 3D video, audio, vibrations, smell and atmospheric effects, such as wind.

            This was done using scent producers, a vibrating chair, stereo speakers and a stereoscopic 3D screen. Heilig thought that the Sensorama was the “cinema of the future” and he wanted to fully immerse people in their films. Six short films were developed for it.

          </p>
          <img src={vrthird} className='vrthree' />
          <h4 className='blog-head-1'>Pygmalion’s Spectacles short story..</h4>
        </span>

        <span><h4 className='blog-head-1'>1960</h4>


          <p>Heilig also patented the Telesphere Mask which was the first head-mounted display (HMD). This provided stereoscopic 3D images with wide vision and stereo sound. There was no motion tracking in the headset at this point

          </p></span>

        <span><h4 className='blog-head-1'>1961</h4>
          <p>Until Headsight was created by Comeau and Bryan, two Philco Corporation engineers. Headsight was the first motion tracking HMD. It had built-in video screens for each eye and a head-tracking system.

            However, this wasn’t used for virtual reality; it was developed for the military to allow them to remotely look at hazardous situations. A remote camera imitated the head movements so the user could look around the setting.

          </p>

        </span>

        <span><h4 className='blog-head-1'>1965</h4>
          <p>Ivan Sutherland, a computer scientist, presented his vision of the Ultimate Display. The concept was of a virtual world viewed through an HMD which replicated reality so well that the user would not be able to differentiate from actual reality. This included the user being able to interact with objects. This concept featured computer hardware to form the virtual world and to keep it functioning in real-time. His paper is seen as the fundamental blueprint for VR.

            “The ultimate display would, of course, be a room within which the computer can control the existence of matter. A chair displayed in such a room would be good enough to sit in. Handcuffs displayed in such a room would be confining, and a bullet displayed in such a room would be fatal. With appropriate programming such a display could literally be the Wonderland into which Alice walked.”

          </p>

        </span>


        <span><h4 className='blog-head-1'>1966</h4>
          <p>Thomas Furness, a military engineer, created the first flight simulator for the Air Force. This assisted in the progression of VR because the military subsequently provided a lot of funding for producing better flight simulators.

          </p>

        </span>

        <span><h4 className='blog-head-1'>1968</h4><img />
          <p>Sutherland, with his student Bob Sproull, created the first virtual reality HMD, named The Sword of Damocles. This head-mount connected to a computer rather than a camera and was quite primitive as it could only show simple virtual wire-frame shapes.

            These 3D models changed perspective when the user moved their head due to the tracking system. It was never developed beyond a lab project because it was too heavy for users to comfortably wear; they had to be strapped in because it was suspended from the ceiling.

          </p>

        </span>

        <span><h4 className='blog-head-1'>1969</h4><img src={team} className='teamimg' />
          <p>Myron Krueger, a computer artist, developed a succession of “artificial reality” experiences using computers and video systems. He created computer-generated environments that responded to the people in it. These projects led to VIDEOPLACE technology which is mentioned later.
          </p>

        </span>

        <span><h4 className='blog-head-1'>1972</h4><img />
          <p>General Electric Corporation built a computerised flight simulator which featured a 180-degree field of vision by using three screens surrounding the cockpit.
          </p>

        </span>

        <span><h4 className='blog-head-1'>1972</h4><img />
          <p>Krueger’s VIDEOPLACE, the first interactive VR platform, was displayed at the Milwaukee Art Center. It used computer graphics, projectors, video cameras, video displays and position-sensing technology and it didn’t use goggles or gloves. VIDEOPLACE consisted of dark rooms with large video screens to surround the user in “VR”.
          </p><img />
          <p>The users could see their computer-generated silhouettes imitating their own movements and actions – the users’ movements were recorded on camera and transferred onto the silhouette. Also, users in different rooms could interact with other users’ silhouettes in the same virtual world. This encouraged the idea that people could communicate within a virtual world even if they weren’t physically close.</p>
          <p className='last-para-tag'>The users could see their computer-generated silhouettes imitating their own movements and actions – the users’ movements were recorded on camera and transferred onto the silhouette. Also, users in different rooms could interact with other users’ silhouettes in the same virtual world. This encouraged the idea that people could communicate within a virtual world even if they weren’t physically close.</p>

        </span>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Learn;