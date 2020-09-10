namespace SpriteKind {
    export const Widget = SpriteKind.create()
}
let timer = false
let Digi_second: DigitCounter = null
let Digi_minute: DigitCounter = null
let Digi_hour: DigitCounter = null
let Ændre_sprite: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let Second = 0
let Minute = 0
let Hour = 0
let Ændre = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (timer) {
        timer = false
    } else {
        timer = true
    }
})
function start_timer () {
    timer = false
    Digi_second = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
    Digi_second.x = 35
    Digi_minute = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
    Digi_minute.x = 80
    Digi_hour = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 2)
    Digi_hour.x = 125
    Ændre_sprite = sprites.create(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        `, SpriteKind.Player)
    Ændre_sprite.setPosition(35, 90)
    Ændre_sprite.setFlag(SpriteFlag.StayInScreen, true)
    mySprite = sprites.create(img`
        2 2 2 2 
        2 2 2 2 
        2 2 2 2 
        2 2 2 2 
        `, SpriteKind.Player)
    mySprite.setPosition(57, 76)
    mySprite2 = sprites.create(img`
        2 2 2 2 
        2 2 2 2 
        2 2 2 2 
        2 2 2 2 
        `, SpriteKind.Player)
    mySprite2.setPosition(102, 76)
}
forever(function () {
    if (timer) {
        pause(1000)
        Second += 1
        if (Second >= 60) {
            Minute += 1
            Second = 0
        }
        if (Minute >= 60) {
            Hour += 1
            Minute = 0
        }
        if (Hour >= 24) {
            Hour = 0
        }
    }
})
forever(function () {
    if (timer) {
        Digi_second.count = Second
        Digi_minute.count = Minute
        Digi_hour.count = Hour
    }
})
forever(function () {
    if (timer) {
        if (Ændre == 0) {
            if (controller.up.isPressed()) {
                Second += 1
            }
            if (controller.down.isPressed()) {
                Second += -1
            }
        }
        pause(50)
        if (Ændre == 1) {
            if (controller.up.isPressed()) {
                Minute += 1
            }
            if (controller.down.isPressed()) {
                Minute += -1
            }
        }
        pause(50)
        if (Ændre == 2) {
            if (controller.up.isPressed()) {
                Hour += 1
            }
            if (controller.down.isPressed()) {
                Hour += -1
            }
        }
        pause(50)
    }
})
forever(function () {
    if (timer) {
        if (Ændre == 0) {
            Ændre = 0
            if (controller.left.isPressed()) {
                Ændre_sprite.x += 90
                Ændre = 2
            }
            if (controller.right.isPressed()) {
                Ændre_sprite.x += 45
                Ændre = 1
            }
        }
        pause(50)
        if (Ændre == 1) {
            if (controller.left.isPressed()) {
                Ændre_sprite.x += -45
                Ændre = 0
            }
            if (controller.right.isPressed()) {
                Ændre_sprite.x += 45
                Ændre = 2
            }
        }
        pause(50)
        if (Ændre == 2) {
            if (controller.left.isPressed()) {
                Ændre_sprite.x += -45
                Ændre = 1
            }
            if (controller.right.isPressed()) {
                Ændre_sprite.x += -90
                Ændre = 0
            }
        }
        pause(50)
    }
})
