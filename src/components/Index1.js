import React from 'react'
import './inde1.css';
import cssDoodle from 'css-doodle';
import { Link, NavLink } from "react-router-dom";
import DeckSharpIcon from '@mui/icons-material/DeckSharp';
import RouteIcon from '@mui/icons-material/Route';
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import logo from '../assets/ai-logo.png';



import { Card, CardContent, Grid } from '@mui/material';
const Index1 = () => {

  const activePage = window.location.pathname;
  const NavLinks = document.querySelectorAll('nav NavLink').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active');
    }
  })
  return (

    <div>

      <Grid container className='grid'>
        <Grid item xs={12}>


          <nav className='navbar-div'>
            {/* <Grid item xs={12} sm={6} lg={12} > */}

            <ul className='ul-div-1'>
              <Link to='/' ><li className='logo-conatiner'><img src={logo} /></li></Link>


              <Grid item xs={12} sm={6} lg={3}>

                <li className='container'>
                  <NavLink activeClassName='active' to="/platform" className="nav-hover"><RouteIcon />Platform</NavLink>
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
                  <NavLink to="/service" className="nav-hover"><FeedbackSharpIcon />Services</NavLink>
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
                  <NavLink to="/support" className="nav-hover"><SupportAgentSharpIcon />Support</NavLink>
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
                  <NavLink to="/learn" className="nav-hover"><LocalLibrarySharpIcon />Learn</NavLink>
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
                  <NavLink to="/login" className='nav-hover'><PermIdentitySharpIcon />Login</NavLink>

                </li>
              </Grid>

            </ul>
            {/* </Grid> */}

          </nav>
        </Grid>

      </Grid>
      {/* nav bar */}

    </div >
  )
}

export default Index1;