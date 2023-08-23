import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static quantityInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.quantityInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling.quantityInstance;
  }
}
