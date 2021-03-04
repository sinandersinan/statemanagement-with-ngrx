import {Injectable} from '@angular/core';
import {MyState} from './shared/myState';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: MyState = {
    counter: 0,
    anotherProperty: 'foobar'
  };

  state$: BehaviorSubject<MyState> = new BehaviorSubject<MyState>(this.state);

  incrementCounter(): void {
    this.state = {
      ...this.state,
      counter: this.state.counter + 1
    },
    this.state$.next(this.state);
  }

  constructor() {
  }
}
