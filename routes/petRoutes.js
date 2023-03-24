const express = require('express');
const router = express.Router();

const petList = require('../petList');


router.route('/:pet_type').get((req, res) => {
  const type = req.params.pet_type
  const petType = petList[type];
  if(petList[type] === undefined){
    res.status(404)
    res.send( `No ${req.params.pet_type} found`)
  }else{
    res.send(`
    
    <h1>List of ${req.params.pet_type}</h1>
    ${petType?.map((pet) => `<li> <a href='/animals/${req.params.pet_type}/${pet.name}'>${pet.name}</a></li>`).join('')}

  `);
  }
  
});

router.route('/:pet_type/:pet_id').get((req, res) =>{
  const type = req.params.pet_type;
  const petType = petList[type];
  const ID = req.params.pet_id;
  const petID = petType.find(pet => pet.name.toLowerCase() === ID.toLowerCase());

  res.send(`
    <h1>NAME: ${petID.name} </h1>
    <img src='${petID.url}'>
    <p>description: ${petID.description} </p>
    <ul>
      <li>Breed: ${petID.breed}</li>
      <li>Age: ${petID.age}</li>
    </ul>
  `)
})



module.exports = router;