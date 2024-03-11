import React from 'react'
import './services.css'
import LightbulbCircleRoundedIcon from '@mui/icons-material/LightbulbCircleRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import dot from '../assets/dot.jpg'
import { Button } from '@mui/material';
import { Footer } from './footer'
const Service = () => {
  return (
    <div id="main-service-div">
      <div className='service-second-div'><h1>Our Services</h1></div>
      {/* <img className='dot-img' src={dot}/> */}
      <div className='service-cards'>

        <span className='service-icon'><LightbulbCircleRoundedIcon sx={{ color: "aqua", fontSize: "5rem", marginLeft: "135px" }} /><h3>Stratergy</h3> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p> <button className='card-span-button'>Hover me</button></span>

        <span className='service-icon1'><CampaignRoundedIcon sx={{ color: "#0a82f2", fontSize: "5rem", marginLeft: "135px" }} /><h3>Branding</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p><button className='card-span-button'>Hover me</button></span>

        <span className='service-icon2'><WebhookRoundedIcon sx={{ color: "#21d618", fontSize: "5rem", marginLeft: "135px" }} /><h3>Development</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p><button className='card-span-button'>Hover me</button></span>

        <span className='service-icon3'><ViewCarouselRoundedIcon sx={{ color: "#f542a4", fontSize: "5rem", marginLeft: "135px" }} /><h3>Web Design</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p><button className='card-span-button'>Hover me</button></span>

        <span className='service-icon4'><Diversity1RoundedIcon sx={{ color: "#f2720a", fontSize: "5rem", marginLeft: "135px" }} /><h3>Social Media</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p><button className='card-span-button'>Hover me</button></span>

        <span className='service-icon5'><SettingsSuggestRoundedIcon sx={{ color: "#f20a30", fontSize: "5rem", marginLeft: "135px" }} /><h3>E-Commerce</h3><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p><button className='card-span-button'>Hover me</button></span>

      </div>

      {/* <Footer/> */}

    </div>
  )
};

export default Service;