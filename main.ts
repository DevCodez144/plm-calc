let CP = game.askForNumber("Input Cost price")
let SP = game.askForNumber("Input Selling price")
if (SP > CP) {
    game.splash("Profit of Rs." + (SP - CP))
} else {
    game.splash("Loss of Rs." + (CP - SP))
}
