import {React,useState} from 'react'
import axios from 'axios';
const UserLoans = (props) => {
  const [loans, setLoans] = useState([]);
  
  const handleViewLoans = async () => {
    try {
      const config = {
   
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
          },
       
      }
      const response = await axios.get(`http://localhost:7000/api/belongloan`,config);
      setLoans(response.data.loans);
      console.log(loans)
    } catch (error) {
      console.error(error);
    }
  };
  handleViewLoans()
  return (
    <div>
      {
        loans.map((item,i)=>{
          return(
            <div className="bg-white py-20  sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Customer ID : {item.customerId}</h2>
        
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">AmountRequired : {item.amountRequired}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
            LoanTerm : {item.loanTerm}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">scheduledRepayments</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
       
                <li className="flex gap-x-3">
                  {/* <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                 
                </li>
          
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
              {
                item.scheduledRepayments.map((val,i)=>{
                  return(
                    <div key={i}>
                <p className="text-base font-semibold text-gray-600">Weakly EMI : {val.amount}</p>

         
                <p className="mt-6 text-xs leading-5 text-gray-600">
                 {val.status}
                </p>
                    </div>
                  )
                })
              }
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          )
        })
      }
      
     
    </div>
  )
}

export default UserLoans
