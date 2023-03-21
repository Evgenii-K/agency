export class Particle {
  nextPositionX: number
  nextPositionY: number
  maxPositionX: number
  minPositionX: number
  maxPositionY: number
  minPositionY: number
  velocityX: number
  velocityY: number
  readonly startPositionX: number
  readonly startPositionY: number
  currentPositionX: number
  currentPositionY: number
  startDeltaX: number
  startDeltaY: number

  constructor(point: {top: number, right: number, height: number, width: number, velocity: number}) {
    this.maxPositionX = point.height
    this.minPositionX = 0
    this.maxPositionY = point.width
    this.minPositionY = 0
    this.startPositionX = point.top
    this.startPositionY = point.right
    this.currentPositionX = point.top
    this.currentPositionY = point.right
    this.nextPositionX = 0
    this.nextPositionY = 0
    this.startDeltaX = 0
    this.startDeltaY = 0
    this.velocityX = point.velocity
    this.velocityY = point.velocity
    this.nextPosition()
  }

  nextPosition() {
    this.nextPositionX = Math.random() * (this.maxPositionX - this.minPositionX) + this.minPositionX
    this.nextPositionY = Math.random() * (this.maxPositionY - this.minPositionY) + this.minPositionY
  }

  get currentPosition() {
    return { top: this.currentPositionX, right: this.currentPositionY }
  }

  position() {
    if (
      ((this.velocityX < 0) && ((this.currentPositionX + this.velocityX) < this.nextPositionX)) ||
      ((this.velocityX > 0) && ((this.currentPositionX + this.velocityX) > this.nextPositionX))
    ) {
      this.reCreateX()
    }
    this.currentPositionX += this.velocityX
    if (
      ((this.velocityY < 0) && ((this.currentPositionY + this.velocityY) < this.nextPositionY)) ||
      ((this.velocityY > 0) && ((this.currentPositionY + this.velocityY) > this.nextPositionY))
    ) {
      this.reCreateY()
    }
    this.currentPositionY += this.velocityY
  }

  // eslint-disable-next-line accessor-pairs
  set nextMax(size: { height: number, width: number }) {
    this.maxPositionX = size.height
    this.maxPositionY = size.width
  }

  reCreateX() {
    this.nextPositionX = Math.random() * (this.maxPositionX - this.minPositionX) + this.minPositionX
    this.startDeltaX = Math.abs(this.nextPositionX - this.currentPositionX)
    if (
      ((this.nextPositionX < this.currentPositionX) && this.velocityX > 0) ||
      ((this.nextPositionX > this.currentPositionX) && this.velocityX < 0)
    ) {
      this.velocityX *= -1
    }
  }

  reCreateY() {
    this.nextPositionY = Math.random() * (this.maxPositionY - this.minPositionY) + this.minPositionY
    this.startDeltaY = Math.abs(this.nextPositionY - this.currentPositionY)
    if (
      ((this.nextPositionY < this.currentPositionY) && this.velocityY > 0) ||
      ((this.nextPositionY > this.currentPositionY) && this.velocityY < 0)
    ) {
      this.velocityY *= -1
    }
  }

  ease(x: number): number {
    return -(Math.cos(Math.PI * x) - 1) / 2
  }
}
