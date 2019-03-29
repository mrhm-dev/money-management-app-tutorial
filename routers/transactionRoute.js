const router = require('express').Router()
const {getAll, create, update, getSingleTransaction, remove} = require('../controllers/transactionController')
const authenticate = require('../authenticate')

router.get('/', authenticate, getAll)

router.post('/', authenticate, create)

router.get('/:transactionId', authenticate, getSingleTransaction)

router.put('/:transactionId', authenticate, update)

router.delete('/:transactionId', authenticate, remove)

module.exports = router