const express = require('express')
const { CustomerCreateLoan, AdminApproveLoan, BelongLoan ,CustomerRepayment} = require('../Controller/LoanController')
const tokenhandler = require('../middelware/TokenHandler')
const router = express.Router()
router.use(tokenhandler)
router.post('/createloan',CustomerCreateLoan)
router.put('/repayloan',AdminApproveLoan)
router.get('/belongloan',BelongLoan),
router.post('/repayment',CustomerRepayment)


module.exports = router