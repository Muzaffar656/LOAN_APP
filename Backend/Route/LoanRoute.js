const express = require('express')
const { CustomerCreateLoan, AdminApproveLoan, BelongLoan ,CustomerRepayment} = require('../Controller/LoanController')
const tokenhandler = require('../middelware/TokenHandler')
const router = express.Router()

router.post('/createloan',tokenhandler,CustomerCreateLoan)
router.put('/repayloan',AdminApproveLoan)
router.get('/belongloan/:id',BelongLoan),
router.post('/repayment',tokenhandler,CustomerRepayment)


module.exports = router