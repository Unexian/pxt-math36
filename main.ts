function angleBetween(sprite1: Sprite, sprite2: Sprite) {
    let deltaX = sprite2.x - sprite1.x
    let deltaY = sprite2.y - sprite1.y
    return Math.atan2(deltaX, deltaY)
}
function pol2Rect(r: number, theta: number) {
    return {x: r * Math.cos(theta), y: r * Math.sin(theta)}
}