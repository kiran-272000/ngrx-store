import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.store';
import { selectCount } from './counter/counter.selector';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-store-counter';
  count$: Observable<number>;
  products$ = this.store.select(selectCartProducts);

  constructor(private store: Store<AppState>){
    this.count$ = this.store.select(selectCount)
  }
}
