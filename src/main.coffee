pdf = require 'jspdf'

window.kyleIsBoss = () ->
  doc = new pdf()

  carMake = document.getElementById('car-make').value
  doc.text(20, 20, 'Car Make: ' + carMake)

  doc.save()
