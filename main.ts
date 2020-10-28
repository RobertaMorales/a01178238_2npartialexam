let AGE = 0
let SUM_AGE = 0
let CONT_YOUTH = 0
let CONT_SENIORITY = 0
let AVERAGE = 0
let RANDOM_1 = 0
let RANDOM2 = 0
let Y = 0
let X = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        AGE = randint(0, 70)
        basic.showNumber(AGE)
        SUM_AGE += AGE
        if (AGE >= 0 && AGE <= 14) {
            basic.showString("childhood")
        } else if (AGE >= 15 && AGE <= 24) {
            basic.showString("Youth")
            CONT_YOUTH += 1
        } else if (AGE >= 25 && AGE <= 64) {
            basic.showString("Adulthood")
        } else if (AGE >= 65) {
            basic.showString("Seniority")
            CONT_SENIORITY += 1
        }
    }
    AVERAGE = SUM_AGE / 15
    basic.showString("Avergae Age")
    basic.showNumber(AVERAGE)
    basic.showString("Total Youth")
    basic.showNumber(CONT_YOUTH)
    basic.showString("Total Senority")
    basic.showNumber(CONT_SENIORITY)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let NUMBER = 0; NUMBER <= 3; NUMBER++) {
        basic.showNumber(NUMBER)
        basic.clearScreen()
    }
    RANDOM_1 = randint(1, 6)
    RANDOM2 = randint(1, 6)
    if (RANDOM_1 == 6 && RANDOM2 == 6) {
        basic.showString("WIN!")
        music.playMelody("C5 C B D A E G F ", 350)
    } else {
        basic.showString("lOSE")
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        Y = randint(0, 4)
        X = 0
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
            led.unplot(X, Y)
            basic.pause(200)
        }
    }
})
