import '../other/Dashboard.css';
import Piechart from './Piechart';
import StepdAreaChart from './StepdAreaChart';
import GeoChart from './GeoChart';
import Barchart from './Barchart';
import Barchart2 from './Barchart2';
import LineChart from './LineChart';
import Navbar from './Navbar';











let MiniDashboard1 = () => {




    return (
        <>

            <Navbar />




            <div className="contener">
                <div className="row">
                    <div className="col-sm-10" >

                        <table>
                            <tr>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-columns-reverse" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z" />
                                    </svg>
                                </td>

                                <td>
                                    <h3>Visualizing News Articles Over Time</h3>

                                </td>
                            </tr>
                        </table>

                        <br></br>
                        <br></br>
                    </div>

                </div>







                <div className="row">


                    <div className="col-sm-4" id="divshadow">

                        <Piechart />


                    </div>

                    <div className="col-sm-1">




                    </div>


                    <div className="col-sm-6" id="divshadow">

                        <GeoChart />
                    </div>

                </div>




                <div className='row'>
                    <div className="col-sm-12">

                        <br></br>
                    </div>
                </div>






                <div className='row'>
                    <div className="col-sm-12" id="divshadow">

                        <Barchart />
                    </div>
                </div>



                <div className='row'>
                    <div className="col-sm-12" >

                        <br></br>
                        <br></br>
                        {/* <LineChart />*/}
                    </div>
                </div>









            </div>



        </>

    );
}

export default MiniDashboard1;
