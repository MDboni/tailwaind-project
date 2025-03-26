import React from 'react'
import heroImg from '../assets/imges/hero-img.png';

const Header = () => {
  return (
    <div className='bg-[#2b2d33] '>
       <section>
          <div className='container flex items-center mx-auto justify-around border '>
            <div>
                <h2 className='text-4xl text-white'>Smarts Coders <br></br>
                Learn Programm
                </h2>
                <button className='mt-10 text-orange-200'>Buton</button>
            </div>
            <div>
            <img src={heroImg} alt="Hero" />
            </div>
          </div>
       </section>
    </div>
  )
}

export default Header