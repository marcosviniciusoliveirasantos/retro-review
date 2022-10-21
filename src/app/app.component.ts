import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Retro Review';
  @ViewChild('mobile') sidenav?: ElementRef;

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sidenav?.nativeElement);
  }
}
