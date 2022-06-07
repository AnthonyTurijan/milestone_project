import React, {useState, useRef, useEffect} from "react";
import {NavLink, Link} from 'react-router-dom';
import {RiHomeFill} from 'react-icons/ri';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';

const categories= [
    {name: 'Black Lives Matter'},
    {name: "Stargazing"},
    {name: "CodeCamp"}
]

function Sidebar(){
    return(
        <div>
            <div className="flex flex-col justify-between h-full overflow-y-scroll mun-w-210 hide-scrollbar"> 
                <div className="flex flex-col gap-5">
                    <NavLink
                    to="/"
                    className={(isActive) => isActive? isActiveStyle : isNotActiveStyle}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base 2xl:text-xl">
                        Event Categories
                    </h3>
                    {categories.slice(0, categories.length-1).map((category)=>(
                        <NavLink
                        to={'/category/$category.name'}
                        className={(isActive) => isActive? isActiveStyle : isNotActiveStyle}
                        key={category.name}
                        >
                         {category.name}   
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;