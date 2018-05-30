const router = require('express').Router()
const ktp =  require('../controllers/uploadControllers')
const images = require('../helpers/uploadImages')
const upload = images.multer.single('image');

/* GET Products listing. */
router.get('/', (req, res) => {
  console.log('KESINI GET');
  res.json({GET: 'SUCCESS'})
})
router.post('/', (req, res, next) => {
  console.log('KE ROUTER')
  upload(req, res, function (err) {
    if (err) {
      return res.status(400).json({
        error: 'err'
      });
    }
    next();
  });
}, images.sendUploadToGCS, (req, res, next) => {
  // console.log('INI REQ', req)
  ktp.doUploadKtp(req, res, next)
})

module.exports = router
