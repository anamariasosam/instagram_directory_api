exports.show = function(res, err, data) {
  if (err) {
    res.status(500).send({ message: 'Some error occurred while retrieving data.' })
  } else {
    res.send(data)
  }
}
