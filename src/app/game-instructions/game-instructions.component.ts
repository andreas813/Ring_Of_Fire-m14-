import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-game-instructions',
    imports: [MatCardModule],
    templateUrl: './game-instructions.component.html',
    styleUrl: './game-instructions.component.scss'
})
export class GameInstructionsComponent implements OnInit, OnChanges {
    cardAction = [
        { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
        { title: 'Commander', description: 'You decide who drinks' },
        { title: 'Me, myself and I', description: 'Congrats! Drink a shot!' },
        { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
        { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. Keep going until someone messes up or hesitates—they drink.' },
        { title: 'Chicks', description: 'All girls drink.' },
        { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
        { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
        { title: 'Thumbmaster', description: 'You are the Thumbmaster. At any point, you can place your thumb on the table. Everyone else must follow. The last person to do so drinks. You remain Thumbmaster until a new one is drawn.' },
        { title: 'Men', description: 'All men drink.' },
        { title: 'Quizmaster', description: 'You are the Quizmaster. Until the next Quizmaster is drawn, anyone who answers one of your questions must drink. Trick them by casually asking things!' },
        { title: 'Never have i ever...', description: `Say something you've never done. Everyone who has done it must drink.` },
        { title: 'Rule', description: 'Make a new rule (e.g., “No saying names”). For the rest of the game, anyone who breaks it must drink.' },
        { title: 'Story Time', description: 'Start a story with one sentence. Each player adds one sentence. The person who messes it up or hesitates drinks.' },
        { title: 'Rhyme Time', description: 'Say a word. Going around the circle, each player must say a word that rhymes. First to fail drinks.' },
        { title: 'Accent', description: 'Speak in an accent of your choice until your next turn. If you forget or someone catches you, you drink.' },
        { title: 'Silent Treatment', description: 'You may not speak until your next turn. If you do, you drink.' },
        { title: 'Social', description: 'Everyone drinks!' },
        { title: 'Challenge', description: 'Challenge another player to anything (e.g. arm wrestle, tongue twister). Loser drinks.' },
        { title: 'Freeze', description: 'At any point, you can freeze. Last to notice and freeze drinks.' },
    ];

    title: string = '';
    description: string = '';
    @Input() card?: string = 'no card drawn';

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        console.log('Current card: ', this.card);
        if (this.card) {
            let cardNumber = Number(this.card?.split('_')[1]);
            this.title = this.cardAction[cardNumber - 1].title;
            this.description = this.cardAction[cardNumber - 1].description;
        }
    }
}