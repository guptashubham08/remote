import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styles: [],
})
export class RemoteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['home']);
  }
}
