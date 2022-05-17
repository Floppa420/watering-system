input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    basic.showString("" + (Moisture))
})
let Ghraph_Moisture = 0
let Moisture = 0
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    if (Moisture > 600) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    Ghraph_Moisture = Math.map(Moisture, 750, 150, 0, 25)
    led.plotBarGraph(
    Ghraph_Moisture,
    25
    )
    basic.pause(3000)
})
