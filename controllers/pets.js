const { CLIENT_LOCAL_FILES } = require('mysql/lib/protocol/constants/client');
const modelPets = require('../models/pets');

class ControllerPets {
  static getPets(req, res) {
    const iyo = modelPets.getPets();
    res.status(200).json(iyo);
  }

  static addNewPet(req, res) {
    // console.log('ok');
    const data = req.body;
    console.log(data);
    modelPets.addPets(data);
    res.status(201).json(data);
  }

  static updatePetStatus(req, res) {
    const {id} = req.params;
    const {name, status} = req.body;
    // const dataId = req.params.id;
    // const data = req.body;
    // console.log(dataId, data);
    // modelPets.updatePetStatus(id, status);
    modelPets.updatePetStatus(req.params.id, req.body.status);
    res.status(201).json(`data with id = ${req.params.id} has been updated`);
  }

  static deletePet(req, res) {
    const data = req.params.id;
    // console.log(data);
    modelPets.deletePet(data);
    res.status(201).json(`data with id = ${req.params.id} has been deleted`);
  }
}

module.exports = ControllerPets;
