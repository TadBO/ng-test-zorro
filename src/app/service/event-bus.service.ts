import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public showGlobalLoading: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
