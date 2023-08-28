import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: Monster[] | SimpleFighter[];
  private _player: Fighter;

  constructor(player: Fighter, enemy: Monster[] | SimpleFighter[]) {
    super(player);
    this._enemies = enemy;
    this._player = player;
  }

  fight(): number {
    let hasEnemyAlive = this._enemies.some((enemy) => enemy.lifePoints > 0);

    while (hasEnemyAlive && this._player.lifePoints > 0) {
      this._enemies.forEach((enemy) => {
        this._player.attack(enemy);
      });
      hasEnemyAlive = this._enemies.some((enemy) => enemy.lifePoints > 0);
      this._enemies.forEach((enemy) => {
        enemy.attack(this._player);
      });
    }

    return super.fight();
  }
}
