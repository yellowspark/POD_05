import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService) { }

  ngAfterViewInit(): void {
    console.log(this.drawer);
  }

  @ViewChild('drawer') drawer!: MatSidenav;

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  logout() {
    this.authService.logout();
  }

}
