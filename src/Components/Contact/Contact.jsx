import React from 'react'

function Contact() {
  return (
    <div className='min-h-[500px] flex items-center'>
      <div className='border-4 bg-slate-700 w-[600px] mx-auto px-6 py-10 rounded-lg'>
        <form action="#"
        >
          <div className='flex flex-col text-center space-y-7 text-white'>
            <div className=''>
              <label htmlFor="name">Full Name : </label>
              <input type="text" 
              id='name'
              placeholder='enter your full name'
              className='ml-4 px-3 py-1 rounded-lg outline-none'
              />
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input type="email" name="" id="email" 
              placeholder='enter your email'
              className='ml-4 px-3 py-1 rounded-lg outline-none'
              />
            </div>
            <div>
              <label htmlFor="phone">Contact : </label>
              <input type="number" name="" id="phone" 
              placeholder='enter your contact number'
              className='ml-4 px-3 py-1 rounded-lg outline-none'
              />
            </div>
            <button type='submit'
            onClick={()=>alert("your form is submitted our team will contact you within 2 hours")}
            className='bg-green-600 w-fit px-4 py-1 mx-auto rounded-xl text-white font-semibold'
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
