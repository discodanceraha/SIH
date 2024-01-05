import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PendingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickProfile(){
    this.router.navigate(['/profile']);
  }

  clickAttendance(){
    this.router.navigate(['/attendance']);
  }

  clickPending(){
    this.router.navigate(['/pending']);
  }

}
