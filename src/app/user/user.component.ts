import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectLoader } from '../state/user.selectors';
import { addUser, loadUser } from '../state/users.actions';
import { userModel } from '../state/userState';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {

  firstname = ''
  lastname = ''
  email = ''
  avatar = ''
  users$: any
  loader$: any
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.users$ = this.store.select(selectAllUsers);
    this.loader$ = this.store.select(selectLoader);
    this.store.dispatch(loadUser())
  }
  addNewUser() {
    let newUser: userModel = { firstName: this.firstname, lastName: this.lastname, email: this.email }
    this.store.dispatch(addUser(newUser));
  }
}
