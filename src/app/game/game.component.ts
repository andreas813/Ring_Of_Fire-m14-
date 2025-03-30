import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-game',
    imports: [PlayerComponent, MatButtonModule, MatIconModule],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
    pickCardAnimation = false;
    currentCard: string | undefined;
    // game: Game;
    game: Game | undefined;

    constructor() { }

    ngOnInit(): void {
        this.newGame();
        console.log(this.game);
    }


    newGame() {
        this.game = new Game();
    }


    /** Triggered when clicking the top card of the card stack. */
    takeCard() {
        if (!this.pickCardAnimation && this.game) {
            this.currentCard = this.game.stack.pop()
            console.log(this.currentCard);
            this.pickCardAnimation = true;


            setTimeout(() => {
                this.pickCardAnimation = false;
            }, 1500);
        }
    }

}
