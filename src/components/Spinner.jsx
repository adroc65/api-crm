// Se toman Spinner de esta pagina:
// https://tobiasahlin.com/spinkit/

import '../styles/Spinner.css'


const Spinner = () => {
  return (
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  )
}

export default Spinner