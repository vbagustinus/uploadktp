const router = require('express').Router()
const ktp =  require('../controllers/uploadControllers')
const images = require('../helpers/uploadImages')
const upload = images.multer.single('image');

/* GET Products listing. */
router.get('/', (req, res) => {
  // console.log('KESINI ROUTER UPLOAD KTP');
  res.json({GET: 'SUCCESS'})
})
router.post('/', (req, res, next) => {
  console.log('KESINI ROUTER UPLOAD KTP')
  upload(req, res, function (err) {
    console.log(err);
    
    if (err) {
      return res.status(400).json({
        error: 'err'
      });
    }
    console.log('GA ERROR ROUTER UPLOAD KTP');
    
    next();
  });
}, images.sendUploadToGCS, (req, res, next) => {
  // console.log('INI REQ', req)
  console.log('LOLOS UPLOAD');
  ktp.doUploadKtp(req, res, next)
})

module.exports = router
