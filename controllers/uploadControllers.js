const doUploadKtp = (req, res) => {
  let inputObj = {
    imageUri: req.file.cloudStoragePublicUrl
  }
  res.json(inputObj)
}

module.exports = {
  doUploadKtp,
}
