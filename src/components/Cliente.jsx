import React from 'react'
import { useNavigate } from "react-router-dom";

const Cliente = ({cliente, handleEliminar}) => {

    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, notas, id} = cliente
    return (
    <tr className='border-b hover:bg-gray-50'>
        <td className='p-3 text-center'>{nombre}</td>
        <td className='p-3 text-center'>
            <p><span className='text-gray-800 uppercase font-bold'>Email:</span>{' '}{email}</p>
            <p><span className='text-gray-800 uppercase font-bold'>Tel:</span>{' '}{telefono}</p>
            
        </td>
        <td className='p-3 text-center'>{empresa}</td>
        <td className='p-3 text-center'>
            <button 
                type='button'
                onClick={ () => navigate(`/clientes/editar/${id}`)}
                className="inline-flex items-center m-1 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"  
                    strokeWidth="2"  
                    strokeLinecap="round"  
                    strokeLinejoin="round"
                >  
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>    
            </button>
            <button
                type='button'
                onClick={ () => navigate(`/clientes/${id}`)}
                className="inline-flex items-center m-1  px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </button>
            <button
                type='button'
                onClick={ () => handleEliminar(id)} 
                className="inline-flex items-center m-1  px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                >
                    <path 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                </svg>
            </button>
        </td>

    </tr>
    )
}

export default Cliente