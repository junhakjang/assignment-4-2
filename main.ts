input.onButtonPressed(Button.A, function () {
    NUmber_1 += 1
    basic.showString("" + (NUmber_1))
})
input.onButtonPressed(Button.AB, function () {
    Number_2 = NUmber_1
    if (Number_2 > 0) {
        basic.showString("P")
    } else if (Number_2 < 0) {
        basic.showString("N")
    } else {
        basic.showString("Z")
    }
})
input.onButtonPressed(Button.B, function () {
    NUmber_1 += -1
    basic.showString("" + (NUmber_1))
})
input.onGesture(Gesture.Shake, function () {
    Number_2 = NUmber_1
    if (Number_2 % 2 == 1) {
        basic.showString("O")
    } else {
        basic.showString("E")
    }
})
let Number_2 = 0
let NUmber_1 = 0
NUmber_1 = 0
basic.forever(function () {
	
})
