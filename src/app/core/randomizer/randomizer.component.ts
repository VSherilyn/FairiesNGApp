import { Component } from '@angular/core';

@Component({
  selector: 'randomizer',
  styleUrls: ['./randomizer.component.scss'],
  templateUrl: './randomizer.component.html'
})
export class RandomizerComponent {

  public answers: Array<string> = ["Да", "Нет", "Вполне возможно", "Ни в коем случае", "Без сомнений", "Пошел нахуй", "Ну хуй знает", "Какая нахуй разница"];
  public response: string;

  public getAnswer() {
    let max = this.answers.length;
    let index = Math.floor(Math.random()*max);
    this.response = this.answers[index];
  }
}