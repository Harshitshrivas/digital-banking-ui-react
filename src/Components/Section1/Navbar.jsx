import React from 'react'

const Navbar = () => {
  return (
     <div className="flex items-center justify-between px-12 py-20 border border-gray-200 rounded-3xl bg-white shadow-lg">
  <h4 className="bg-linear-to-r from-blue-700 to-blue-500 text-white uppercase px-8 py-3 rounded-full text-lg font-semibold tracking-wide shadow-md">
    Target Audience
  </h4>

  <button className="px-8 py-3 rounded-full uppercase bg-gray-100 hover:bg-blue-700 hover:text-white tracking-widest text-sm font-medium transition-all duration-300 shadow-sm border border-gray-300 hover:border-blue-700">
    Digital Banking Platform
  </button>
</div>


    )
}

export default Navbar