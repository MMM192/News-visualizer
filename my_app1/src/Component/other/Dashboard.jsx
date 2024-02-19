import '../other/Dashboard.css';
import Piechart from '../other/Piechart';
import StepdAreaChart from '../other/StepdAreaChart';
import GeoChart from '../other/GeoChart';
import Barchart from '../other/Barchart';
import Barchart2 from '../other/Barchart2';
import MiniDashboard1 from '../other/MiniDashboard1';
import MiniDashboard2 from '../other/MiniDashboard2';
import TopicFilter from '../other/TopicFilter';
import ContryFilter from '../other/ContryFilter';
import Swot from '../other/Swot';
import City from '../other/City';
import Source from '../other/Source';

















import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


let Dashboard = () => {




    return (


        <div id="body1">


            <div className="row">
                <div className="col-sm-2" id="fixed">
                    <div id="sidenav">
                        <br></br>

                        <table id="table1">
                            <tr>
                                <td>
                                    <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                                        <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
                                    </svg>
                                </td>
                                <td>
                                    <h6 className="itle1">Headline Explorer</h6>

                                </td>

                            </tr>
                        </table>

                        <hr id="hr1" />


                        <br />




                        <a href='/'>

                            <button id="homebtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-highlights" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8 5v1H4.5a.502.502 0 0 0-.093.009A7.029 7.029 0 0 1 3.1 13H8Zm0-1H2.255a6.998 6.998 0 0 1-.581-1H8v1Zm-6.71-2a6.96 6.96 0 0 1-.22-1H8v1H1.29ZM1 8c0-.34.024-.673.07-1H8v1H1Zm.29-2c.103-.345.231-.68.384-1H8v1H1.29Zm.965-2c.25-.36.534-.694.846-1H8v1H2.255Zm2.137-2A6.967 6.967 0 0 1 8 1v1H4.392Z" />
                                </svg> Home
                            </button>

                        </a>

                        <br />
                        <br />





                        <br></br>
                        <div className='link1'>




                            <table className="margin1" >
                                <tr>
                                    <td>
                                        <svg id="up596" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                        </svg>

                                    </td>

                                    <td>
                                        <h5 >FILTER'S </h5>
                                        <hr></hr>

                                    </td>

                                </tr>
                            </table>
                        </div>



                        <br></br>
                        <a href='/F_year' className='link1'>
                            <button className='btn245'>
                                End year Filter
                            </button>
                        </a>



                        <div className='spam1'></div>

                        <a href='/Topic' className='link1'>
                            <button className='btn245'>
                                Topic Filter
                            </button>
                        </a>

                        <div className='spam1'></div>

                        <a href='/Swot' className='link1'>
                            <button className='btn245'>
                                Swot Filter
                            </button>
                        </a>



                        <div className='spam1'></div>


                        <a href='/ContryFilter' className='link1'>
                            <button className='btn245'>
                                Country Filter
                            </button>
                        </a>


                        <div className='spam1'></div>


                        <a href='/City' className='link1'>
                            <button className='btn245'>
                                City Filter
                            </button>
                        </a>


                        <div className='spam1'></div>


                        <a href='#' className='link1'>
                            <button className='btn245'>
                                Sector Filter
                            </button>
                        </a>

                        <div className='spam1'></div>


                        <a href='#' className='link1'>
                            <button className='btn245'>
                                Region Filter
                            </button>
                        </a>

                        <div className='spam1'></div>

                        <a href='#' className='link1'>
                            <button className='btn245'>
                                Pest Filter
                            </button>
                        </a>
                        <div className='spam1'></div>


                        <a href='/Source' className='link1'>
                            <button className='btn245'>
                                Source Filter
                            </button>
                        </a>










                    </div>
                </div >
                <div className="col-sm-2">
                </div >


                <div className="col-sm-10">





                    <Router>
                        <Routes>
                            <Route path='/' element={<MiniDashboard1 />} />

                            <Route path='/F_year' element={<MiniDashboard2 />} />
                            <Route path='/Topic' element={<TopicFilter />} />
                            <Route path='/ContryFilter' element={<ContryFilter />} />
                            <Route path='/Swot' element={<Swot />} />
                            <Route path='/City' element={<City />} />
                            <Route path='/Source' element={<Source />} />
                            <Route path='/Swot' element={<Swot />} />














                        </Routes>

                    </Router>







                </div >




            </div >



        </div>


    );
}

export default Dashboard;
