import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Insta';
}


