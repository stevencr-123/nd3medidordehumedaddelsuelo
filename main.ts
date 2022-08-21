let conductividad = 0
input.onButtonPressed(Button.A, function () {
    conductividad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(conductividad)
})
