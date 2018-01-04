import {
  Component, OnInit, ChangeDetectionStrategy,
  ViewChild, ElementRef, ChangeDetectorRef
} from '@angular/core';
import { EventService } from 'meepo-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(
    public event: EventService
  ) {
    let now = new Date();

    let version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
    this.event.checkVersion(version);
  }

  test() {
    this.event.publish('role.change', {
      title: '管理员',
      code: 'admin',
      items: ['admin']
    });
  }
  quit() {
    this.event.publish('role.change', {
      title: '游客',
      code: 'fans',
      items: ['fans']
    });
  }
}
