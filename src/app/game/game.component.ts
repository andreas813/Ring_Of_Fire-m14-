import { Component } from '@angular/core';

@Component({
    selector: 'app-game',
    imports: [],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})
export class GameComponent {
    pickCardAnimation = false;

    /** Triggered when clicking the top card of the card stack. */
    takeCard() {
        this.pickCardAnimation = true;
    }

}
