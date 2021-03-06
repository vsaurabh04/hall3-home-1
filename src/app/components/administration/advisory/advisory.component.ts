import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css']
})
export class AdvisoryComponent implements OnInit {
  loaded = false;
  title: string;
  members: object[];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.setTab('advisory');
    this.infoService.getAdministration('advisory')
        .subscribe((d: object) => {
          if (d.hasOwnProperty('err')) {
            this.title = d['err'];
            this.members = [{}];
          } else {
            this.title = d['title'];
            this.members = d['members'];
          }
          this.loaded = true;
        });
  }
}
