import React from 'react'
import roadmap from '../../assets/roadmap.png' // Adjust the path to your roadmap image

const Roadmap = () => {
  return (
    <div>
      <div className='bg-black py-12'>
        <div className='max-w-7xl mx-auto text-start px-4 mb-8'>
          <h6 className='text-green-700 italic text-sm md:text-base'>ROADMAP</h6>
          <h3 className='text-white text-2xl md:text-3xl font-semibold mt-2'>Project Roadmap</h3>
        </div>

        <div className='max-w-5xl mx-auto px-4 flex justify-center'>
          <img src={roadmap} alt="Roadmap" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Roadmap
