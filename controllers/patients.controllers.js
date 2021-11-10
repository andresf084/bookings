const ctrlPatients = {},
Patients = require('../models/patients'),
message = require('../config/message')

ctrlPatients.create = async (req, res) => {
  console.log(req.body)
  const newPatient = new Patients({
    Patient_Document: req.body.Patient_Document,
    Patient_Name: req.body.Patient_Name,
    Patient_Phone: req.body.Patient_Phone,
    Patient_Mail: req.body.Patient_Mail,    
  });
  console.log(newPatient)

  //await newPatient.save();
  res.json({ msg: message.success, status: true });
};


ctrlPatients.list = async (req, res) => {
    const patients = await Patients.find();
    res.json(patients);
};

ctrlPatients.delete = async (req,res) => {
    console.log(req.params._id);
    const {_id} = req.params ;
    const patients = await Patients.deleteOne({_id:_id});
    res.json({status : true});
}

ctrlPatients.update = async (req,res) => {
  console.log(req.body);
  const {Patient_Document, Patient_Name, Patient_Phone, Patient_Mail, Patient_Status} = req.body;
  await Patients.findOneAndUpdate({ _id: _id },
    {Patient_Document: Patient_Document,
    Patient_Name: Patient_Name,
    Patient_Phone: Patient_Phone,
    Patient_Mail: Patient_Mail,
    Patient_Status: Patient_Status
  })
  res.json({status: true});
}


/*ctrlPatients.put = async (req, res) => {
  var patients = req.patients;

  patients = _.extend(patients, req.body);

  patients.save(function(err) {
  if (err) {
      return res.send('/company', {
          errors: err.errors,
          patients: patients
      });
  } else {
      res.jsonp(patients);
  }
}*/

module.exports =  ctrlPatients

