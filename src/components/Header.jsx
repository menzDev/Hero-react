import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between w-full h-auto px-[16px] py-[20px] lg:p-[32px]'>
        <div className='flex justify-between items-center gap-[20px]'>
        <img className='w-[52px] h-[52px]  ' src="./Logo.png" alt="" />
        <ul className='lg:flex gap-[40px] hidden'>
            <li>About US</li>
            <li>How it work</li>
            <li>Pricing</li>
            <li>FAQs</li>
        </ul>
        </div>
        <div className='btn-menu lg:flex gap-[20px] '>
            <div className="btn-pc hidden lg:flex gap-[20px]">
              <button className='w-[91px] h-[52px]  bg-[#ffff]'>Login</button>
              <button className='w-[91px] h-[52px] bg-[#151515] text-white'>Sing up</button>
            </div>
            <div className="btn-movil lg:hidden">
              <img src="./menu/menu.png" alt="" />
            </div>
        </div>
        
    </nav>
  )
}

export default Header