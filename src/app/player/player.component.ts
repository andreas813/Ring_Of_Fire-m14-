import { Component, Input, input } from '@angular/core';

@Component({
    selector: 'app-player',
    imports: [],
    templateUrl: './player.component.html',
    styleUrl: './player.component.scss'
})
export class PlayerComponent {

    @Input() name: string = 'Default Player';
    @Input() playerActive: boolean = false;

}
