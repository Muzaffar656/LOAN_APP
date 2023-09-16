const mongoose = require('mongoose')

// Define Loan Schema
const loanSchema = new mongoose.Schema({
  user_id:{
    type:String,
    required:true
},
  customerId: String,
  amountRequired: Number,
  loanTerm: Number,
  scheduledRepayments: [{
    date: Date,
    amount: Number,
    status: String, // PENDING, PAID, etc.
  }],
  status: String, // PENDING, APPROVED, PAID, etc.
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan