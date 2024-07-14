const express = require('express')
const router = express.Router();
const arsipController = require('../controller/arsipController');
const upload = require('../config/multer');

router.get('/', arsipController.getAllArsip)
router.get('/:id', arsipController.getById)
router.post('/', upload.single('file'), arsipController.createArsip)
router.delete('/:id', arsipController.deleteArsip)
router.put('/:id', upload.single('file'), arsipController.editArsip)
module.exports = router;