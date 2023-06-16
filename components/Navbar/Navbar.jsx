import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

export const Navbar = ({isOpen, setIsOpen}) => {
    const [scroll,setScroll] = useState(true);
    const changeBg = () => {
        if (window.scrollY <= 60) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll",changeBg)
      }
    

    
    
  return (
    
    <div className={scroll ? 'px-12 py-2 flex justify-between items-center fixed top-0 w-full z-10': 'backdrop-blur-3xl shadow-md z-10 px-8 py-2 flex justify-between items-center fixed top-0 w-full'}>
        <div className='text-2xl font-semibold leading-10'>
            Portfo<span className='text-[#DC143C]'>lio.</span>
        </div>
        <div className='md:flex justify-around gap-6 mr-6 hidden'>
            {["Home","About","Expertise","Skills","Projects","Contact"].map(elem => (
                <a key={elem} href={`#${elem}`} className="font-semibold hover:text-[rgba(0,0,0,0.65)]">{elem}</a>
            ))}
        </div>
        <MenuIcon className='block md:hidden cursor-pointer' onClick={() => setIsOpen(true)} />
        

            
        
    </div>
  )
}
