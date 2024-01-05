import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddSubjectPage implements OnInit {

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

  clickAddSubject(){
    this.router.navigate(['/add-subject']);
  }

}
