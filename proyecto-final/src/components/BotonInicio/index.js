import './BotonInicio.css'

export default function BotonInicio({nombreBoton}){
    return(
        <boton className="btn-inicio btn row btn-outline-success">{nombreBoton}</boton>
    )
}