pdf = require 'jspdf'

doc = new pdf()
doc.text(20, 20, 'Hello, World')

doc.save()
