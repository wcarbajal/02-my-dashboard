'use client'
import { useState } from "react";

interface Props {
    value: number
} 

export default function Contador({ value }: Props) {

    const [contador, setContador] = useState(value);
    

    const aumentarvalor = () =>{
        setContador(contador + 1);
    }

    const disminuirValor = () =>{
        setContador(contador - 1);
    }


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <span>Productos en el carrito de compras</span>
        <span className="text-9xl">{ contador }</span>

        <div className="flex">
            <button onClick={ aumentarvalor}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"

            > +1 

            </button>

            <button onClick={ disminuirValor}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                
            > -1 

            </button>
        </div>
    </div>
  );
}