for (; ;) {
    //if voltage is present on A button pin, or pin 5
    if (input.buttonIsPressed(Button.B)) {
        //set the led on pin zero to on state
        pins.analogWritePin(AnalogPin.P1, 1023);

    }
    else {
        pins.analogWritePin(AnalogPin.P1, 0);
        //set the led to off.  
    }

}
