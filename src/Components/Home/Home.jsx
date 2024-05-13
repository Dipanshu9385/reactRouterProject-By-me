import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=''>
      <div className='w-[80%] mx-auto py-12 flex my-4 justify-between bg-white'>
        <div className=' w-1/2'>
          <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=626&ext=jpg&ga=GA1.1.1147112986.1689753985&semt=sph" alt="" 
          className='w-96 '
          />
        </div>
        <div className=' w-1/2 relative'>
          <div className='absolute bottom-10 right-20'>
          <h1 className='text-5xl font-bold'>Design Website </h1>
          <h3 className='text-4xl font-semibold my-3 text-right'>with devepoer</h3>
          <h3 className='mt-16 mb-3 text-right'>
          <Link
          to="/Contact"
          className='bg-orange-600 px-6 py-4 rounded-xl text-white font-semibold'>Design Now</Link>
          </h3>
          </div>
        </div>
      </div>
      <div className='border-2 pb-16'>
       <img src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?size=626&ext=jpg&ga=GA1.1.1147112986.1689753985&semt=sph" alt="" 
       className='w-72 mx-auto'
       />
      <h1 className='text-center font-mono font-semibold text-3xl pt-4'>Stand out from the digital crowd.</h1>
      </div>
    </div>
  )
}

export default Home
