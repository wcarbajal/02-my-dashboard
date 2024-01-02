import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculator, IoInvertMode } from "react-icons/io5";
import SideBarMenuItem from './SideBarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoInvertMode size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación estática'
    }
]


function SideBar() {
    return (
        <div style= {{width:'400px'}} id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen ">

            <div  id="logo" className="px-6">

                <h1 className="text-lg md:text-2xl font-bold text-white pt-5">Ge<span className="text-blue-500">Ser</span>.</h1>
                <p className="text-slate-500 text-sm">Gestión de consumos de servicios</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image width={50} height={50} className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="Avatar" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Wuilmer Carbajal
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
               
                {
                    menuItems.map(menuItem => (
                        <SideBarMenuItem
                        key={menuItem.path}
                        {...menuItem}
                        />
                    ))
                }



            </div>
        </div>
    )
}

export default SideBar