const express = require('express')
const business = require('../controllers/businessController')

const router = express.Router()

router.get('/businesses', business.findAll)
router.post('/businesses', business.create)

router.get('/businesses/:businessId', business.findOne)

module.exports = router
