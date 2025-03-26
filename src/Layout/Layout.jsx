import React from 'react'


const Layout = (props) => {
  return (
    <div>

        <nav className='bg-[#2b2d33] '>
            <div className='shadow'>
                <div className='sm:flex text-center justify-between  items-center '>
                    <div className='pl-5 p-2 font-bold text-3xl  py-5'>
                        <h2 className='text-white'><span className='text-orange-500'>B</span>oni <span className='text-orange-500'>A</span>min</h2>
                    </div>
                    <ul className='sm:flex text-xl font-bold text-white border-t sm:border-none'>
                       <li className='p-2'><a className='text-green-600' href="">Home</a></li>
                       <li className='p-2'><a className='hover:text-green-600' href="">Profile</a></li>
                       <li className='p-2'><a className='hover:text-green-600' href="">About</a></li>
                       <li className='p-2'><a className='hover:text-green-600' href="">Bloge</a></li>
                       <li className='p-2'><a className='hover:text-green-600' href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {props.children}
    </div>
  )
}

export default Layout