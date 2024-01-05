import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AttendancePage implements OnInit {

  constructor(private router: Router) { }

  clickProfile(){
    this.router.navigate(['/profile']);
  }

  clickAttendance(){
    this.router.navigate(['/attendance']);
  }

  clickPending(){
    this.router.navigate(['/pending']);
  }

  clickAddSubject(){
    this.router.navigate(['/add-subject']);
  }

  ngOnInit() {
  }

}
