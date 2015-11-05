module.exports = ->
  Interface: { type: "Tablet", make: "Apple", model: "iPad", price: 250}
  interfaces: [
    { type: "Tablet", make: "Apple", model: "iPad", price: 250}
    { type: "Phone", make: "Apple", model: "iPhone", price: 150}
    { type: "Remote", make: "Crestron", model: "HR-150", price: 125}
    { type: "Remote", make: "Crestron", model: "MLX-3", price: 125}
  ]
  Processor: {make: "Crestron", model: "AV3", price: 75}
  processors: [
    { make: "Crestron", model: "AV3", price: 75}
    { make: "Crestron", model: "CP3", price: 100}
    { make: "Crestron", model: "C3PO", price: 4200}
    { make: "Crestron", model: "CP2", price: 50}
  ]
  Video_Distributor: { make: "Crestron", model: "DM-MD8x8", price: 200}
  video_distributors: [
    { make: "Crestron", model: "DM-MD8x8", price: 200}
    { make: "Crestron", model: "DM-4x4", price: 100}
    { make: "Crestron", model: "DM-2x2", price: 75}
  ]
  Audio_Processor: { make: "Crestron", model: "SWAMP-24x8", price: 150}
  audio_processors: [
    { make: "Crestron", model: "SWAMP-24x8", price: 150}
    { make: "Crestron", model: "SWAMP-8x8", price: 100}
    { make: "Crestron", model: "SWAMP-6x4", price: 50}
  ]
  Video_Display: { make: "Digital Projections", model: "4K Dual-LED Projector\"", price: 135000}
  video_displays: [
    { make: "Digital Projections", model: "4K Dual-LED Projector\"", price: 135000}
    { make: "LG", model: "64\"", price: 50}
    { make: "Samsung", model: "84\"", price: 100}
    { make: "Sony", model: "4K 48\"", price: 175}
  ]
  Source: { make: "Blu-ray", model: "3rd Gen", price: 50}
  sources: [
    { make: "Blu-ray", model: "3rd Gen", price: 50}
    { make: "AppleTV", model: "3rd Gen", price: 100}
    { make: "DirecTV", model: "1st Gen", price: 125}
    { make: "Kaleidescape", model: "2nd Gen", price: 125}
  ]
  Device: { make: "Nest", model: "HVAC (4 zone)", price: 75}
  devices: [
    { make: "Nest", model: "HVAC (4 zone)", price: 75}
    { make: "Lutron", model: "", price: 150}
    { make: "Honeywell VISTA-21iP", model: "(The Hellish One)", price: 500} #we also accept a literal arm and leg
  ]



