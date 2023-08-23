import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static quantityInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.quantityInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage.quantityInstance;
  }
}
