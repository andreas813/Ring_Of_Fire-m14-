import { Component } from '@angular/core';
import {
    MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
    selector: 'app-dialog-add-player',
    imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
    templateUrl: './dialog-add-player.component.html',
    styleUrl: './dialog-add-player.component.scss'
})


export class DialogAddPlayerComponent {
    name: string = '';

    onNoClick() {

    }
}
