import { Controller } from 'stimulus'; 
export default class extends Controller {
  static targets = ["heading", "paraph", "input", "text"]

  connect() {
    console.log("hello from StimulusJS")
  }
  greet() {
    this.headingTarget.innerHTML = "Hello World"
  }
  toogle() {
    if(this.paraphTarget.innerHTML === "Je suis un paragraph"){
      this.paraphTarget.innerHTML = "Je ne suis plus un paragraph"
    } else {
      this.paraphTarget.innerHTML = "Je suis un paragraph"
    }
  }

  inputChange() {
    this.textTarget.innerHTML = this.inputTarget.value
  }
}