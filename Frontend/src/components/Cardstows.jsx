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
    <h9>CONFIGURTOR </h9>
    <p><b>CREATE YOUR</b></p>
    <p><b>REVUELTO</b></p>     
    </div>
    </div>

   
         
       </>
    )
};

export default Cardstows;