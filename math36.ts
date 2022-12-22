/**
 * Just some extra functions
 * for mathematics
 */

//% color="#9b61e2" weight=100
namespace Math {
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
    //% block="Polar r=$r θ=$theta to rectangular, get $getX"
    //% getX.shadow = "toggleYX"
    export function pol2Rect(r: number, theta: number, getX?: boolean) {
        if (typeof (getX) !== 'undefined') { return { x: r * Math.cos(theta), y: r * Math.sin(theta) } }
        else if (getX) { return r * Math.cos(theta) }
        else { return r * Math.sin(theta) }
    }
    //% block="Polar r=$r θ=$theta to rectangular, get $getR"
    //% getR.shadow = "toggleThetaR"
    export function rect2Pol(x: number, y: number, getR?: boolean) {
        if (typeof (getR) !== 'undefined') { return { r: Math.sqrt(x * x + y * y), theta: Math.atan2(y, x) } }
        else if (getR) { return Math.sqrt(x * x + y * y) }
        else { return Math.atan2(y, x) }
    }
}