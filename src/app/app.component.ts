import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'Ring_Of_Fire-m14-';
    firestore: Firestore = inject(Firestore);

    constructor() {

    }
}