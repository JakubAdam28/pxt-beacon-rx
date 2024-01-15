
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(4) // 0..7
//radio.setGroup() // 0..255




radio.setGroup(15)

input.onButtonPressed(Button.A, function() {
    
    radio.sendNumber(randint(1, 10))
    
})

input.onButtonPressed(Button.B, function() {
    
    radio.sendString("Nickha")
})
input.onButtonPressed(Button.AB, function() {
    
    radio.sendValue("name", 0)
})