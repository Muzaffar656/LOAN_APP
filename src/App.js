import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import ApplyLoan from './components/ApplyLoan';
import UserLoans from './components/UserLoans';
import Register from './components/User/Register';
function App() {
  const [loanId, setLoanId] = useState('');

  const id = (n)=>{
    console.log(n)
    setLoanId(n)
  }


 

  // handleCreateLoan()
  // console.log(loanId)
  // const handleApproveLoan = async () => {
  //   try {
  //     const response = await axios.put(`http://localhost:5000/api/approve-loan/${loanId}`);
  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };



  // const handleAddRepayment = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:5000/api/add-repayment/${loanId}`, {
  //       amount,
  //     });
  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (value.customerId) {
  //     handleViewLoans();
  //   }
  //    eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [value.customerId]);

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Register/>} />
        <Route path='/applyloan' element={<ApplyLoan id={id}/>} />
        <Route path='/userloan' element={<UserLoans loanId={loanId} />} />
      </Routes>
    </Router>
  )
}


export default App