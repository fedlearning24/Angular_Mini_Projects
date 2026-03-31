import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {

  questions = [
    {
      question: 'Angular is developed by ?',
      options: ['Google', 'Facebook', 'Microsoft'],
      answer: 'Google'
    },
    {
      question: 'Signals relpace with ?',
      options: ['RxJs', 'HTML', 'CSS'],
      answer: 'RxJs'
    },
    {
      question: 'TailwindCSS is ?',
      options: ['Framework', 'Library', 'Utility CSS'],
      answer: 'Utility CSS'
    }
  ];

  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false);

  currentQuestion = () => this.questions[this.currentIndex()];

  answer(option: string) {
    if (option === this.currentQuestion().answer) {
      this.score.update(s => s + 1);
    }

    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update(i => i + 1);
    }else{
      this.finished.set(true);
    }
  }

  restart(){
    this.currentIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
  }

}
