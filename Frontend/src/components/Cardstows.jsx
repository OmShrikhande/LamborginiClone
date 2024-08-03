import revuelto from "../../public/media/image/mainrevuelto-removebg.png"
import './css/Cardstows.css';
function Cardstows(){
    return(
        <>
    <div className="cardstow">
        
    <img src={revuelto} alt="revuelto" />
    <div className="textonimage">
    <p> REVUELTO</p>  
    </div>

    <div className="infotext">
    <p>Lorem ipsum </p>
    <p>Get ready to start</p>
    <p>Discover the future of</p>
    <p>Revulto</p>
             
    </div>
    </div>

   
         
       </>
    )
};

export default Cardstows;