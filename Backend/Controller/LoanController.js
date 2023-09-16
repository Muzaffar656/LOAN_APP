const Loan = require('../Model/LoanModel')

// API Endpoints

// 1) Customers can create a loan
const CustomerCreateLoan =  async (req, res) => {
  try {
    const { customerId, amountRequired, loanTerm } = req.body;
    const loan = new Loan({
      user_id:req.user.id,
      customerId,
      amountRequired,
      loanTerm,
      scheduledRepayments: [],
      status: 'PENDING',
    });

    // Calculate scheduled repayments
    const currentDate = new Date();
    console.log(currentDate)
    for (let i = 1; i <= loanTerm; i++) {
      const dueDate = new Date(currentDate); //10
  
      dueDate.setDate(currentDate.getDate() + 7 * i);
      const scheduledRepayment = {
        date: dueDate,
        amount: amountRequired / loanTerm,
        status: 'PENDING',
      };
      loan.scheduledRepayments.push(scheduledRepayment);
    }

    await loan.save();
    res.json({ success: true, message: 'Loan created successfully', loan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Loan creation failed' });
  }
  };

// 2) Admins can approve the loan
const AdminApproveLoan =  async (req, res) => {
  try {
    const loanId = req.params.loanId;
    const loan = await Loan.findById(loanId);
    if (!loan) {
      return res.status(404).json({ success: false, message: 'Loan not found' });
    }
    loan.status = 'APPROVED';
    await loan.save();
    res.json({ success: true, message: 'Loan approved successfully', loan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Loan approval failed' });
  }
  }; 
// 3) Customers can view loan belonging to him
const BelongLoan = async(req,res)=>{
  try {
    const customerId = req.params.customerId;
    const loans = await Loan.find({ customerId });
    res.json({ success: true, loans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch loans' });
  }
}
// 4) Customers add repayments
const CustomerRepayment = async (req, res) => {
  try {
    const { loanId } = req.params;
    const { amount } = req.body;
    const loan = await Loan.findById(loanId);
    if (!loan) {
      return res.status(404).json({ success: false, message: 'Loan not found' });
    }

    const latestRepayment = loan.scheduledRepayments.find(
      (repayment) => repayment.status === 'PENDING'
    );

    if (!latestRepayment) {
      return res.status(400).json({ success: false, message: 'No repayments are pending' });
    }

    if (amount >= latestRepayment.amount) {
      latestRepayment.status = 'PAID';
      await loan.save();
      res.json({ success: true, message: 'Repayment added successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Repayment amount is less than required' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Repayment failed' });
  }
};

module.exports = {CustomerCreateLoan,AdminApproveLoan,BelongLoan,CustomerRepayment}


