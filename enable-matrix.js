//led.enable(false)
pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)



basic.forever(function () {
    basic.showNumber(0);
    for (let index = 0; index <= 3071; index++) {

        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P0, index)

            } else {
                pins.analogWritePin(AnalogPin.P0, 1023 - (index - 1023))

            }
        } else {
            pins.analogWritePin(AnalogPin.P0, 0)

            console.log("" + AnalogPin.P0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P1, index - 1023)

            } else {
                pins.analogWritePin(AnalogPin.P1, 1023 - (index - 2047))

            }
        } else {

            pins.analogWritePin(AnalogPin.P1, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P2, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P2, index - 2048)
        } else {

            pins.analogWritePin(AnalogPin.P2, 0)
        }
        control.waitMicros(1000)
    }




})
