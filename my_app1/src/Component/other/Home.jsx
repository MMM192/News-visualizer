import './Home.css';
import c2 from './img2.png';
import c3 from './pic-2.png';

let Home = () => {
    return (
        <div id="maindiv">


            <div id="navbar">
                <br></br>
                <table id="navtable">
                    <tr>
                        <td className='span1'></td>
                        <td>
                            <a href='#' className='red'>Home</a></td>
                        <td className='span1'></td>
                        <td><a href='#'>Message</a></td>
                        <td className='span1'></td>
                        <td><a href='#'>Notification</a></td>
                        <td className='span2'></td>
                        <td>
                            <svg id="icon0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alexa" viewBox="0 0 16 16">
                                <path d="M7.996 0A7.998 7.998 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.602 5.602 0 0 1 2.4 7.865 5.579 5.579 0 0 1 8.054 2.4a5.599 5.599 0 0 1 5.535 5.81l-.002.046a6.116 6.116 0 0 1-.012.192l-.005.061a4.85 4.85 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 7.998 7.998 0 0 0 7.996.001Z" />
                            </svg>
                        </td>
                        <td className='span2'></td>


                        <td >

                            <input id="srch" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                        </td>
                        <td >
                            <button id="srch" class="btn btn-outline-success " type="submit">Search</button>

                        </td>
                        <td>
                            <img src={c3} alt="" id="img4" />

                        </td>
                    </tr>
                </table>


            </div>




            <div id="img1">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <div className='container-sm'>

                    <div className='row'>
                        <div className='col-sm-1'>
                        </div>
                        <div className='col-sm-3'>
                            <img src={c2} alt="" id="img2" />
                        </div>
                    </div>
                </div>



            </div>




            <div id="div2">
                <div className='container-sm'>

                    <div className='row'>
                        <div className='col-sm-1'>
                        </div>
                        <div className='col-sm-3'>
                        </div>

                        <div className='col-sm-8'>
                            <br></br>
                            <table>
                                <tr>
                                    <td className='span1'></td>
                                    <td>
                                        <a href='#' className='red'>TimeLine</a></td>
                                    <td className='span1'></td>
                                    <td><a href='#'>About</a></td>
                                    <td className='span1'></td>
                                    <td><a href='#'>Photos</a></td>
                                    <td className='span1'></td>
                                    <td><a href='#'>Friends</a></td>
                                    <td className='span1'></td>
                                    <td><a href='#'>More</a></td>
                                    <td className='span1'></td>
                                    <td><button className='btn btn-danger' id="btn1">Edit Profil</button></td>



                                </tr>
                            </table>

                        </div >


                    </div >
                    <br></br>
                    <br></br>



                </div >


                <div id="row2">
                    <table id="table3"> <br></br>
                        <tr>
                            <td>

                                <h4>About</h4>
                            </td>
                            <td className='span2'></td>
                            <td >
                                <a href='#'>Facebook</a>
                            </td>
                            <td className='span1'></td>
                            <td>
                                <a href='#' className='red'>Twitter</a>

                            </td>
                            <td className='span1'></td>
                            <td>
                                <a href='#'>Google</a>

                            </td>
                            <td className='span1'></td>
                            <td>
                                <a href='#'>Pinterest</a>

                            </td>
                            <td className='span1'></td>
                            <td>
                                <svg id="icon1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-blockquote-right" viewBox="0 0 16 16">
                                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm10.113-5.373a6.59 6.59 0 0 0-.445-.275l.21-.352c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.326-.182.569-.182h.281a1.686 1.686 0 0 0-.123-.498 1.379 1.379 0 0 0-.252-.37 1.94 1.94 0 0 0-.346-.298zm-2.168 0A6.59 6.59 0 0 0 10 6.352L10.21 6c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.327-.182.569-.182h.281a1.749 1.749 0 0 0-.117-.492 1.402 1.402 0 0 0-.258-.375 1.94 1.94 0 0 0-.346-.3z" />
                                </svg>
                            </td>

                        </tr>
                    </table>
                </div>

            </div >


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div id="div3">

                <div className='container-sm'>

                    <div className='row'>
                        <br></br>
                        <div className='col-sm-1'>
                        </div>

                        <div className='col-sm-3' id="div4">
                            <p></p>


                            <a href='#' align="center" className='red'>Something About Me</a>


                            <hr className='hr1up' /> <a href='#'>Working Zone</a>


                            <hr className='hr1up' /> <a href='#'>Education Qualification</a>


                            <hr className='hr1up' /> <a href='#'>Work & Education</a>


                            <hr className='hr1up' /> <a href='#'>Friends & Family</a>


                            <hr className='hr1up' /> <a href='#'>Contact Detail</a>

                            <p></p>



                        </div>

                        <div className='col-sm-7' id="div5">
                            <h4 id="h42">Mili Raoulin</h4>
                            <hr></hr>
                            <p id="para">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for forem ipsum' will uncover many web sites still in their infancy.<br></br><br></br>

                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                        </div>


                    </div>
                </div>

            </div>





        </div >
    )
}

export default Home;