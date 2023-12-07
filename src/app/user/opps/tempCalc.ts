export class TempCalc {
  private _celsius: number = 0;

  public get getcelsius(): number {
    return this._celsius;
  }

  public set setcelsius(newCelsius: number) {
    this._celsius = newCelsius;
  }

  public get getfahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  public set setfahrenheit(newFahrenheit: number) {
    this._celsius = ((newFahrenheit - 32) * 5) / 9;
  }
}
