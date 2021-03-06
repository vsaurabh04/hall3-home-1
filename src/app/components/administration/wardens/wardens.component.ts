import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from '../../../services/info/info.service';

@Component({
  selector: 'app-wardens',
  templateUrl: './wardens.component.html',
  styleUrls: ['./wardens.component.css']
})
export class WardensComponent implements OnInit {
  loaded = false;
  title: string;
  members: object[];
  images: string[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getAdministration('wardens')
      .subscribe((d: object) => {
        if (d.hasOwnProperty('err')) {
          this.title = d['err'];
          this.members = [{}];

          this.loaded = true;
        } else {
          this.title = d['title'];
          this.members = d['members'];
          this.images = this.members.map(member => member['photo']);
        }
      });
  }

  load() {
    this.images.pop();
    if (this.images.length === 0) {
      this.loaded = true;
    }
  }

}
