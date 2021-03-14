import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ['text', 'btn', 'title']
  static values = { number: Number }
  static classes = ['red', 'redTitle']

  connect() {
    this.numberValueChanged()
  }

  greet() {
    this.textTarget.innerHTML = 'Coucou'
  }

  toogle() {
    this.btnTarget.classList.toggle(this.redClass)
    this.numberValue++
  }

  numberValueChanged() {
    this.textTarget.textContent = this.numberValue
  }

  titleColor(e) {
    e.currentTarget.classList.toggle(this.redTitleClass)
  }
}
