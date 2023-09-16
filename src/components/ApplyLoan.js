import {React,useState} from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ApplyLoan = (props) => {
 
  const [loanId, setLoanId] = useState('');

    const [value, setValue] = useState({
        customerId:"",
        amountRequired:"",
        loanTerm:""
      });
    console.log(value)
      const handleChanges = (e)=>{
        setValue({...value,[e.target.name]:e.target.value})
      }
      const handleCreateLoan = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post('http://localhost:7000/api/createloan', 
        value);
          console.log(response.data.message);
          enqueueSnackbar(response.data.message)
          setLoanId(response.data.loan._id);
          props.id(response.data.loan._id)
        } catch (error) {
            console.error(error);
        }

        
      };
  return (
    <div className="App text-center r">
    <h1 className=' text-3xl font-bold text-center'>Mini Loan App  </h1>
 <Link to='/userloan'>

    <button className='bg-cyan-300 text-white text-sm rounded-sm p-1 font-semibold mt-2'>Your Loans</button>
 </Link>

    <SnackbarProvider/>
    <form onSubmit={handleCreateLoan} className='flex flex-col w-3/6 m-auto gap-5 mt-3'>

      <input type="text" name='customerId' onChange={handleChanges} placeholder='Enter Your id' className=' border px-2 rounded placeholder:text-gray-500 placeholder: text-base' />
      <input type="number" name='amountRequired' onChange={handleChanges} placeholder='Enter Your Amount' className=' border px-2 rounded placeholder:text-gray-500 placeholder: text-base' />
      <input type="number" name='loanTerm' onChange={handleChanges} placeholder='Enter Your Loan Term' className=' border px-2 rounded placeholder:text-gray-500 placeholder: text-base' />
    <button type='submit' className='bg-black text-white rounded-sm p-2 text-lg font-semibold'>Apply</button>
    </form>

    </div>
  )
}

export default ApplyLoan
