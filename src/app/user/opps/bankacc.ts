export class Bankaccount {
  private _balence: number = 0;

  public get balence(): number {
    return this._balence;
  }

  public set balence(newbalence: number) {
    if (newbalence < 0) {
      console.log('invalid balence');
    }
    this._balence = newbalence;
  }
}
