import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedsApiServiceService } from '../feeds/services/feeds-api-service.service';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss'],
})
export class EditSectionComponent implements OnInit {
  userId!: number;
  feedItem!: FeedData ;
  editedLogo!: string ;
  editedName!: string ;
  editedContent!: string;

  constructor(
    private route: ActivatedRoute,
    private feedService: FeedsApiServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.userId = parseInt(res['id']);
    });

    this.feedService.fetchFeedById(this.userId).subscribe((item) => {
      if(item){
        this.feedItem = item;
        this.editedLogo = this.feedItem?.logo;
        this.editedName = this.feedItem?.name;
        this.editedContent = this.feedItem?.content;
      }
    });
  }
  
  onSave() {
    if (!this.feedItem) {
      return;
    }

    this.feedItem.logo = this.editedLogo;
    this.feedItem.name = this.editedName;
    this.feedItem.content = this.editedContent;
    console.log(this.feedItem.content);
    this.router.navigate(['home']);
  }

  onCancel(){
    this.router.navigate(['home']);
  }
}
