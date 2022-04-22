
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Alerta from "../components/Alerta";
import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const { id } = useParams()
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
      
      const obtenerClienteAPI = async () => {
          try {
              const url = `http://localhost:4000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)

          } catch (error) {
              console.log(error)
          }
          setCargando(!cargando)
          
      }
      obtenerClienteAPI()
  }, []);

  return (
    <>
        <h1 className='text-blue-900 text-4xl font-black'>Editar Cliente</h1>
        <p className='mt-3'>Modifique los campos necesarios del cliente</p>

        {cliente?.nombre ? (
          <Formulario
            cliente={cliente}
            cargando={cargando}
          />
        ): <Alerta>El ID no corresponde a ningun cliente</Alerta>}
        
    </>
  )
}

export default EditarCliente