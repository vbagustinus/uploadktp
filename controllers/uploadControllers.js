const doUploadKtp = (req, res) => {
  // console.log('REQ',req);
  // console.log('FILE', req.file);
  let inputObj = {
    imageUri: req.file.cloudStoragePublicUrl
  }
  res.json(inputObj)
}

module.exports = {
  doUploadKtp,
}
