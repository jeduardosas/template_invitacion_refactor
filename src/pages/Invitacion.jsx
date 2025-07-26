import { Brindis, Comida, Confirmacion, Iglesia, Musica, Novia, Novio, Pausa, Play, Ramo, Recepcion, Regalo, Sobres, Vestimenta, Votos } from '../components/atoms/iconos/Index.jsx';
import Icono from '../components/atoms/iconos/Icono'

const Invitacion = () => {

  const iconos = [
    Brindis,
    Comida, 
    Confirmacion,
    Iglesia,
    Musica,
    Novia,
    Novio,
    Pausa,
    Play,
    Ramo,
    Recepcion,
    Regalo,
    Sobres,
    Vestimenta,
    Votos
  ]
  
  return (
  <>
  <h1>Prueba</h1>
    {
      iconos.map((icono, index)=>(
        <Icono 
        IconoSVG={icono}
        ajustes={{
        color:'#f107f1',
        ancho:'50px',
        alto:'50px'
        }}
    />
      ))
    }
   
  </>
  )
}

export default Invitacion