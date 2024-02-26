import { Link } from 'react-router-dom';
import './BotonInicio.css'


export default function BotonInicio({nombreBoton,pasaje}){
    return(
        <boton className="btn-inicio btn row btn-outline-success">
            
            <Link className="btn-inicio btn" to= {pasaje}  >{nombreBoton}</Link>
            
            </boton>
    )
}