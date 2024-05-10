import React from 'react';
import {Link,NavLink} from 'react-router-dom';
function Header() {
  return (
    <div>
      <div className='w-full px-10 shadow-md flex justify-around py-3'>
        <div>
            <Link
            to="/"
            >
            <img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="" 
            className='w-24'
            />
            </Link>
        </div>
        <div>
            <ul className='flex items-center  h-full gap-x-10 '>
                <li>
                    <NavLink
                    to="/"
                    className={({isActive})=>`${isActive?"text-orange-600":"text-black-900"} font-semibold hover:text-blue-500 duration-300`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/About"
                    className={({isActive})=>`${isActive?"text-orange-600":"text-black-900"} font-semibold hover:text-blue-500 duration-300`}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/Contact"
                    className={({isActive})=>`${isActive?"text-orange-600":"text-black-900"} font-semibold hover:text-orange-700 duration-300`}
                    >
                        Contact us
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='flex items-center gap-x-10 my-2'>
            <Link className=' font-semibold hover:underline'>
            login
            </Link>
            <Link className="bg-orange-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-800 duration-300">
                Get Started
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
