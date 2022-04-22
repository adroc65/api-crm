import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center my-2 p-1 font-bold uppercase rounded-md'>
        {children}
    </div>
  )
}

export default Alerta