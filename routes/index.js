const { Router } = require('express'),
router = Router()

router.use('/patients', require('../routes/patients.routes'))  

module.exports = router