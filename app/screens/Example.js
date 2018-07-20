import { Container, Point } from 'pixi.js';
import { canvasWidth, canvasHeight } from '../constants/AppConstants';
import { AnimationStore } from '../stores/Store';
import Logo from '../displayobjects/Logo/Logo';
import Background from '../displayobjects/Background/Background.js';
import Thingie from '../displayobjects/Thingie/Thingie';
import RedLine from '../displayobjects/RedLine/RedLine';
import Card from '../displayobjects/Card/Card';

const isNear = (p1, p2) => {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  const c = Math.sqrt(a * a + b * b);
  return c < 100;
};

/**
 * Main Display Object
 *
 * @exports Example
 * @extends Container
 */
export default class Example extends Container {
  constructor(...args) {
    var bg = new Background();

    super(...args);

    const logo = new Logo();
    this.addChild(bg);

    this.addCards();
    this.mousepos = new Point(500, 500);
  }

  addCards() {
    this.cards = [];
    for (let index = 0; index < 1; index++) {
      const t = new Card();
      t.setInitialPoint(
        canvasWidth * 0.1 + 0.1 * index,
        canvasHeight * 0.1 + 0.1 * index
      );
      // const near = this.cards.some(t2 => isNear(t.position, t2.position));
      // if (!near) {
      this.cards.push(t);
      this.addChild(t);
      // }
    }

    AnimationStore.subscribe(() => {
      let cardMoveIndex = 0;
      this.cards.forEach(c => c.update());
    });

    this.interactive = true;
  }
}
