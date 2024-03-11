import React, { useState } from 'react';
import './support.css';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import que from '../assets/que.jpg';
import { Footer } from './footer';

const Support = () => {
  const navigate = useNavigate(); // Use the correct hook for navigation

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleEnquiry = (e) => {
    e.preventDefault();

    if (checkInput()) {
      console.log('Process Enquiry');
      // Implement form submission logic here (e.g., sending data to a server)
      toast.success("Thank you for contacting!");

      setTimeout(() => {
        navigate('/');  // Redirect after a short delay
      }, 1000); // Adjust delay as needed (in milliseconds)
    }
  };


  const checkInput = () => {
    let isValid = true;
    if (username.trim() === '') {
      toast.warning('Please Enter Your Name');
      isValid = false;
    }
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) { // Basic email validation
      toast.warning('Please Enter a Valid Email Address');
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className='full-div'>
      <img src={que} className='que' style={{ height: "100%", width: "100%", position: "absolute" }} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="card">
        <span className="title">Leave a Comment</span>

        <form className="form" onSubmit={handleEnquiry}>
          <div className="group">
            <TextField
              id="standard-basic"
              placeholder='Name'
              variant="standard"
              fullWidth
              value={username}
              required
              inputProps={{ pattern: "^[a-zA-Z]+$" }}
              onChange={(e) => {
                const newValue = e.target.value.replace(/[^a-zA-Z]/g, "");
                setUsername(newValue);
              }}
            
            />
          </div>
          <div className="group">
            <TextField
              id="standard-basic"
              placeholder='Email'
              variant="standard"
              fullWidth
              required
              value={email}

              onChange={(e) => setEmail(e.target.value)}
            
            />
          </div>
          <div className="group">
            <textarea placeholder="‎" id="comment" name="comment" rows="5" required></textarea>
            <label>Comment</label>
          </div>
          <button className='buttun' type="submit">
            Submit
          </button>
        </form>
      </div>
      {/* <Footer/>  */}
    </div>
  );
};

export default Support;
