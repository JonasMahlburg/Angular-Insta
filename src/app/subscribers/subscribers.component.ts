import { Component, inject } from '@angular/core';
import { AboserviceService } from '../services/aboservice.service';

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [],
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss'
})


export class SubscribersComponent {
  abonenten = inject(AboserviceService);
}
