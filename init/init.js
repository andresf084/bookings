const patients = require('../models/patients')


exports.createPatient = function(){
   var newPatient = new patients({
    Patient_Document: 132465,
    Patient_Name: "July Rodríguez",
    Patient_Phone: 3216549877,
    Patient_Mail: "julyrodriguez@gmail.com",
    })

   newPatient.save()
}