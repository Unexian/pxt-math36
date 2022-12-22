/**
 * Just some extra functions
 * for mathematics
 */

//% color="#9b61e2" weight=100
namespace Math {
    //% block="Polar r=$r|θ=$theta|to rectangular"
    export function pol2Rect(r: number, theta: number) {
        return { x: r * Math.cos(theta), y: r * Math.sin(theta) }
    }
    //% block="Rectangular x=$x y=$y to polar"
    export function rect2Pol(x: number, y: number) {
        return { r: Math.sqrt(x * x + y * y), theta: Math.atan2(y, x) }
    }
}
//% color="#567ae4" weight=100
namespace Sprites {
    //% block="Angle between $sprite1 and $sprite2"
    export function angleBetween(sprite1: Sprite, sprite2: Sprite) {
        let deltaX = sprite2.x - sprite1.x
        let deltaY = sprite2.y - sprite1.y
        return Math.atan2(deltaY, deltaX)
    }
    //% block="Distance between $sprite1 and $sprite2"
    export function distanceBetween(sprite1: Sprite, sprite2: Sprite) {
        let deltaX = sprite2.x - sprite1.x
        let deltaY = sprite2.y - sprite1.y
        return Math.sqrt(deltaY * deltaY + deltaX * deltaX)
    }
}