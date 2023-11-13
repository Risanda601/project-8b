let timer = 0
let lemon_on_spoon = false
let lemon: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    basic.showString("3 2 1  go!")
    timer = 0
    lemon_on_spoon = true
    lemon = game.createSprite(2, 2)
    while (lemon_on_spoon) {
        let sprite = 0
        timer += 1
        if (input.acceleration(Dimension.X) > 200) {
        	
        }
        if (sprite) {
        	
        } else {
        	
        }
    }
})
basic.forever(function () {
	
})
