import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectLoader } from './state/user.selectors';
import { loadUser } from './state/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private store: Store) {
  }
  ngOnInit(): void {
   
  }
}
