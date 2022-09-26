import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/service/moment.service';
import { MessagesService } from 'src/app/service/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText: string = 'Share';
  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
    this.messageService.add('New moment added with success!');
    this.router.navigate(['/']);
  }
}
