let cm = 0
basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
    cm = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    if (cm < 30) {
        music.playTone(262, 100)
    } else if (cm < 40) {
        music.playTone(262, 200)
    } else if (cm < 50) {
        music.playTone(262, 300)
    }
})
