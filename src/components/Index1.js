import React from 'react'
import './inde1.css';
import cssDoodle from 'css-doodle'; 
import { NavLink } from "react-router-dom";
import DeckSharpIcon from '@mui/icons-material/DeckSharp';
import RouteIcon from '@mui/icons-material/Route';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import { Card, CardContent, Grid } from '@mui/material';
const Index1 = () => {
  
  return (

    <div>
      <Grid container >
        <Grid item xs={12}>
          
          
          <nav className='navbar-div'>
            {/* <Grid item xs={12} sm={6} lg={12} > */}
              <ul className='ul-div-1'>
                {/* <li className='logo-conatiner'><NavLink>Logo</NavLink>
                </li> */}

                <li className='container'>
                  <NavLink to="/home"><DeckSharpIcon style={{ margin: '15px',textAlign:'center' }} />Home</NavLink>
                  <Grid item xs={12} sm={6} lg={3}>
                    <div className='dp-1'>
                      <div className='dp-2'>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            <p><h3>Falcon Bundles</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>

                        <div className='dp-3'>
                          <ul className='ul-1'>
                            <p><h3>Platform Ctagories</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Capabilities</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />

                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div>
                          <p className='p-1'>Please Click here To Know More About US</p>
                          <button>

                            <div class="svg-wrapper-1">
                              <div class="svg-wrapper">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 0h24v24H0z" fill="none"></path>
                                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                            <span>Click Me</span>
                          </button>
                        </div>


                      </div>
                    </div>
                  </Grid>


                </li>
                <Grid item xs={12} sm={6} lg={3}>
                  <li className='container'>
                    <NavLink to="/platform"><RouteIcon style={{ margin: '15px',textAlign:'center' }}/>Platform</NavLink>
                    <Grid item xs={12} sm={6} lg={3}>
                    <div className='dp-1'>
                      <div className='dp-2'>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Prepare</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>

                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Respond</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Profit</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />

                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div>
                        </div>


                      </div>
                    </div>
                  </Grid>


                  </li>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <li className='container'>
                    <NavLink to="/services"><FeedbackSharpIcon style={{ margin: '15px',textAlign:'center' }}/>Services</NavLink>
                    <div className='dp-1'>
                      <div className='dp-2'>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Falcon Bundles</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>

                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Ctagories</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Capabilities</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />

                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div>
                          </div>


                      </div>
                    </div>
                  </li>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <li className='container'>
                    <NavLink to="/support"><SupportAgentSharpIcon style={{ margin: '15px',textAlign:'center' }}/>Support</NavLink>
                    <div className='dp-1'>
                      <div className='dp-2'>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Falcon Bundles</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>

                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Ctagories</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Capabilities</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />

                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div>
                          </div>


                      </div>
                    </div>

                  </li>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <li className='container'>
                    <NavLink to="/learn"><LocalLibrarySharpIcon style={{ margin: '15px',textAlign:'center' }}/>Learn</NavLink>
                    <div className='dp-1'>
                      <div className='dp-2'>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Falcon Bundles</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>

                        <div className='dp-3'>
                          <ul className='ul-1'>
                          <p><h3>Platform Catagories</h3></p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            <p>Platform Capabilities</p><hr />
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />

                          </ul>
                        </div>
                        <div className='dp-3'>
                          <ul className='ul-1'>
                            {/* <p>Falcon Bundles</p><hr /> */}
                            <p className='p-1-dp'>What is Lorem Ipsum?
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the </p>
                            <li className='text-dp'>It is a long established fact that a reader will be </li>
                            <li className='text-dp'> distracted by the readable content of a layout.</li>
                            <li className='text-dp'>page when looking at its </li><br />
                          </ul>
                        </div>
                        <div>
                          </div>


                      </div>
                    </div>
                  </li>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                  <li className='container'>
                    <NavLink to="/login"><PermIdentitySharpIcon style={{ margin: '15px',textAlign:'center' }}/>Login</NavLink>
                    
                  </li>
                </Grid>

              </ul>
            {/* </Grid> */}

          </nav>
        </Grid>

      </Grid>
      {/* nav bar */}




    </div>
  )
}

export default Index1;