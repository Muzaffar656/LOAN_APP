import {React,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Register = () => {
    
  const  [user, setUser] = useState({
    name:"",
    email:"",
    password:"",

  })
  const handledatachange = async(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        
        const response = await axios.post(`http://localhost:7000/api/register`,user)
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
    }
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Register Here</h1>
      <form className='flex flex-col w-3/6 m-auto gap-5 mt-3' onSubmit={handleSubmit}>

      <input type="text" onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='name' placeholder='Enter Name' />
      <input type="text" onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='email' placeholder='Enter email' />
      <input type="text" onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='password' placeholder='Enter Password' />
      <Link to='/applyloan' className='text-center'>

      <button type='submit' className='bg-black text-white rounded-sm p-2 text-lg font-semibold'>Sign in</button>
      </Link>
      </form>

    </div>
  )
}

export default Register
