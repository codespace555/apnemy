import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between w-screen '>
        {/* logo */}
      <div >
<img src="" alt="" />
      </div>
      {/* menu */}
      <div>
        <nav>
            <ul className='text-[15px] flex'>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Project</li>
            </ul>
        </nav>
      </div>
      {/* btn */}
      <div>
        <button className='text-sm px-12 py-2 hover:bg-blue-500 border-2 border-blue-600 rounded-2xl'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
