const express = require('express')
const router = express.Router();
const kategoriController = require('../controller/kategoriController')

router.get('/', kategoriController.getAllKategori)
router.get('/:id', kategoriController.getById)
router.post('/', kategoriController.createKategori)
router.delete('/:id', kategoriController.deleteKategori)
router.put('/:id', kategoriController.editKategori)
module.exports = router;