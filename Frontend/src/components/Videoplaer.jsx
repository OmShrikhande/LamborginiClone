import React from "react";
import videobg from '/media/video/index/videoplayback1.mp4'
import './css/Videoplayer.css'
function Videoplayer(){
    return(
        <>
        <div className="videoplayer">
            
            <div className="overlay"></div>

            <video src={videobg} autoPlay loop muted/>

        <div className="content">
          <p>RACING TOGETHER TOWARDS SUCCESS</p>
          <h1>MACRON X</h1>
          <h1>AUTOMOBILI</h1>
          <h1>LAMBORGHINI</h1>  
       </div> 

        </div>
         
       </>
    )
};

export default Videoplayer;