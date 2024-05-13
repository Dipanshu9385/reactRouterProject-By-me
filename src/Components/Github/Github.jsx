import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Github() {
    const[data,setData]=useState(null)
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://api.github.com/users/dipanshu9385')
        .then((responce)=>responce.json())
        .then((data)=>{
            console.log(data)
            setData(data)
            setLoading(false)
        })
        .catch((error)=>{
            console.error("Something went wrong",error);
            setLoading(false)
        })

        console.log(data)
    },[])

    if (loading) return <div>Loading..... </div>;

  return (
    <>
    <div className='flex w-full justify-center space-x-32 items-center my-20'>
    <div>
        <img 
        className='rounded-full w-60'
        src={data.avatar_url} alt="" />
    </div>
    <div>
        <ul className='leading-10 text-xl font-medium'>
            <li>Name : {data.name}</li>
            <li>City : {data.location}</li>
            <li>Username : {data.login}</li>
            <li>Profile updated : {data.updated_at}</li>
        </ul>
    </div>


    </div>
    <div className='max-w-[80%] mx-auto my-10 px-10 py-4'>
        <p><strong className='text-orange-500'>H</strong>ey I'm {data.name} . I am passionate about MERN Development , 
        in future i become a successfull developer .
        I created some Project such as :-passwordGenerator App , BgChanger App , News App, CurrencyCanvertor App , Calculator and much more.
        For Check my project Click this link &nbsp; <Link to={data.html_url} target='_blank' className='text-blue-500 font-semibold underline hover:text-blue-800 duration-300'>Click here</Link>
        </p>
    </div>
    </>
  )
}

export default Github;
