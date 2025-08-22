// import { injectFirestore } from '@angular/fire/firestore';
import { Component, OnInit, inject, model, signal } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInstructionsComponent } from '../game-instructions/game-instructions.component';
import { Firestore, collectionData, collection, doc, DocumentData, onSnapshot, addDoc, updateDoc, deleteDoc, query, orderBy, limit, where } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-game',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatDialogModule, PlayerComponent, GameInstructionsComponent, AsyncPipe],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
    pickCardAnimation = false;
    currentCard?: string;
    game?: Game;
    firestore: Firestore = inject(Firestore);
    games$: Observable<any[]>;
    private gamesSub?: Subscription;



    constructor(public dialog: MatDialog) {
        const gamesCollection = collection(this.firestore, 'games')
        this.games$ = collectionData(gamesCollection, { idField: 'id' }) as Observable<Game[]>;
    }


    ngOnInit(): void {
        this.newGame();
        // subscribe to log changes (real-time)
        this.gamesSub = this.games$.subscribe(games => {
            console.log('Game update', games);
        });
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

            this.game.currentPlayer++;
            this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

            setTimeout(() => {
                this.pickCardAnimation = false;
            }, 1500);
        }
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddPlayerComponent);

        dialogRef.afterClosed().subscribe(name => {
            if (name) {
                this.game?.players.push(name);
            }
        });
    }
}
