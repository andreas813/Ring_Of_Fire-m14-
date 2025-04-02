import { Component, OnInit, inject, model, signal } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInstructionsComponent } from '../game-instructions/game-instructions.component';


@Component({
    selector: 'app-game',
    imports: [PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, GameInstructionsComponent],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
    pickCardAnimation = false;
    currentCard: string | undefined;
    game: Game | undefined;

    readonly dialog = inject(MatDialog);

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


    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent);

        dialogRef.afterClosed().subscribe(name => {
            this.game?.players.push(name);
        });
    }
}
