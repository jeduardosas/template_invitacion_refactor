import './cardStyle.css'
const Card = ({ajustes}) => {
  console.log(ajustes);

  const { titulo } = ajustes || {};

  console.log('titulo', titulo);
  return (
    <div className='card'> 
      <div className='card-titulo'>
        <img src={`${titulo.icono}`} alt="titulo-img" />
        <h2 className='card-titulo-nombre'>{titulo.nombre}</h2>
      </div>
    </div>
  )
}

export default Card