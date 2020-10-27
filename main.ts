input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
