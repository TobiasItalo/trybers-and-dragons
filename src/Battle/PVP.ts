import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerA: Fighter;
  private _playerB: Fighter;

  constructor(playerA: Fighter, playerB: Fighter) {
    super(playerA);
    this._playerA = playerA;
    this._playerB = playerB;
  }

  fight(): number {
    while (this._playerA.lifePoints > 0 && this._playerB.lifePoints > 0) {
      this._playerA.attack(this._playerB);
      if (this._playerB.lifePoints > -1) this._playerB.attack(this._playerA);
    }

    return super.fight();
  }
}
