/**
 * A small shape
 *
 * @exports Card
 * @extends Sprite
 */

import { Sprite, Texture, Point } from 'pixi.js';
import CARD from './card2.png';

export default class Card extends Sprite {
  constructor() {
    const asset = CARD;
    const texture = Texture.fromImage(asset);
    super(texture);
    this.offset = new Point(0, 0);
    this.targetPosition = new Point(400, 0);
    this.originPosition = new Point(0, 0);
    this.animDuration = 200; //in seconds
    this.speed =
      Math.abs(this.targetPosition.x - this.position.x) / this.animDuration;
    this.alpha = 0.9;
  }

  setInitialPoint(x, y) {
    this.position.set(x, y);
    this.originPosition.set(x, y);
  }

  update() {
    if (Math.abs(this.targetPosition.x - this.position.x) >= this.speed) {
      this.offset.x += this.speed;
    }
    console.log(this.position);

    this.position.set(
      this.originPosition.x + this.offset.x,
      this.originPosition.y + this.offset.y
    );
  }
}
