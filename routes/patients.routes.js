const express = require('express'),
router =  express.Router(),
patientCtrl = require('../controllers/patients.controllers')

router.post('/', patientCtrl.create)
//router.get('/', patientCtrl.list);
//router.put('/', userCtrl.update)
//router.post('/status', userCtrl.enable)
//router.delete('/:_id', patientCtrl.delete)


module.exports = router