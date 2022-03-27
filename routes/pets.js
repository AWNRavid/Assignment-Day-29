const express = require('express');
const ControllerPets = require('../controllers/pets');
const app = express();
const router = express.Router();

router.get('/all-pets', ControllerPets.getPets);
router.post('/add-new-pet', ControllerPets.addNewPet);
router.put('/update-pet/:id', ControllerPets.updatePetStatus);
router.delete('/delete-pet/:id', ControllerPets.deletePet);

module.exports = router;
