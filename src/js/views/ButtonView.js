export default class ButtonView {
  _btnStart = document.getElementById("start-button");
  _btnEnd = document.getElementById("end-button");

  toggleClass() {
    this._btnStart.classList.toggle("hidden");
    this._btnEnd.classList.toggle("hidden");
  }

  btnStart() {
    return this._btnStart;
  }

  btnEnd() {
    return this._btnEnd;
  }
}