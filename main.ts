basic.forever(function () {
    if (input.lightLevel() >= 100) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Happy)
    } else {
        led.setBrightness(14)
        basic.showIcon(IconNames.Sad)
        basic.pause(5000)
    }
})
