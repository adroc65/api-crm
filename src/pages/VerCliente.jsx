import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Spinner from "../components/Spinner";

const VerCliente = () => {
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
        cargando ? 
            <Spinner/> : 
            Object.keys(cliente).length === 0 ? 
                <p>No Existe ese cliente</p> : 
                (
                    <div>
                        <h1 className='text-blue-800 text-4xl font-black'>Ver Cliente: {cliente.nombre}</h1>
                        <p className='mt-3 mb-3'>Información detallada del cliente</p>

                        <p className="text-gray-700 text-3xl mb-2">
                            <span className="uppercase font-bold text-blue-800">Cliente:</span>
                            {' '}{cliente.nombre}
                        </p>

                        <p className="text-gray-700 text-2xl mb-2">
                            <span className="uppercase font-bold text-blue-800">Empresa:</span>
                            {' '}{cliente.empresa}
                        </p>

                        <p className="text-gray-700 text-2xl mb-2">
                            <span className="uppercase font-bold text-blue-800">Email:</span>
                            {' '}{cliente.email}
                        </p>

                        { cliente.telefono && (
                            <p className="text-gray-700 text-2xl mb-2">
                                <span className="uppercase font-bold text-blue-800">Teléfono:</span>
                                {' '}{cliente.telefono}
                            </p>
                        )}
                        
                        { cliente.notas && (
                            <p className="text-gray-700 text-2xl mb-2">
                                <span className="uppercase font-bold text-blue-800">Notas:</span>
                                {' '}{cliente.notas}
                            </p>
                        )}
                    </div> 
                )
    )
}

export default VerCliente