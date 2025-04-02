export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = 0;


    constructor() {
        const cardTypes = ['spades', 'hearts', 'clubs', 'diamonds'];


        /** Nested iteration for filling up the stack array with all cards. */
        for (let i = 1; i <= 13; i++) {
            cardTypes.forEach(cardType => this.stack.push(`${cardType}/${cardType}_${i}`));
        }


        /** Shuffle the elements of a given array using the Fisher-Yates algorithm. */
        for (let i = this.stack.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
        }
    }
}