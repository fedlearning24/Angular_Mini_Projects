import { Component, inject } from '@angular/core';
import { PollStore } from '../Stores/poll.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-votes',
  imports: [FormsModule],
  templateUrl: './votes.html',
  styleUrl: './votes.css',
})
export class Votes {
  newOption = '';

  store = inject(PollStore);

  addOption() {
    if (!this.newOption.trim()) return;
    this.store.addOption(this.newOption);
    this.newOption = '';
  }

  getPercentage(votes:number){
    const total = this.store.totalVotes();
    return total ? (votes/total) * 100 : 0;
  }

}
