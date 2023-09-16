import {React,useState} from 'react'
import axios from 'axios';
const UserLoans = (props) => {
  const [loans, setLoans] = useState([]);

  const handleViewLoans = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/belongloan/${props.loanId}`);
      setLoans(response.data.loans);
      console.log(loans)
    } catch (error) {
      console.error(error);
    }
  };
  handleViewLoans()
  return (
    <div>
      <h1>user loan</h1>
    </div>
  )
}

export default UserLoans
