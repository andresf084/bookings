const mongoose = require('mongoose')

var PatientsSchema = new mongoose.Schema
({
    date: {type: Date, default: Date.now()},
    Patient_Document: {type: Number},
    Patient_Name: {type: String},
    Patient_Phone: {type: Number},
    Patient_Mail: {type: String},
    Patient_Status: {type: Boolean, default: true},
    Date_Update: {type: Date, default: Date.now()}

})


module.exports = mongoose.model('bookings_patients', PatientsSchema)