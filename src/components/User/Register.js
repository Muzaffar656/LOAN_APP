import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const Register = () => {
    const navigate = useNavigate()
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
       
        localStorage.setItem('token',response.data.JWT)
        navigate('/applyloan')
    } catch (error) {
      enqueueSnackbar(error.response.data.message)

    }
    }
  return (
    <div>
  
      <h1 className='text-3xl font-bold text-center'>Register Here For Loan</h1>
      <form className='flex flex-col w-3/6 m-auto gap-5 mt-3' onSubmit={handleSubmit}>

      <input type="text" required onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='name' placeholder='Enter Name' />
      <input type="text" required onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='email' placeholder='Enter email' />
      <input type="text" required onChange={handledatachange} className='border px-2 rounded placeholder:text-gray-500 placeholder: text-base' name='password' placeholder='Enter Password' />
  

      <button type='submit' className='bg-black text-white rounded-sm p-2 text-lg font-semibold'>Sign in</button>
 
      </form>
      <SnackbarProvider/>

    </div>
  )
}

export default Register
