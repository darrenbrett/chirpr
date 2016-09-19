import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [ UserService ]
})
export class FeedComponent implements OnInit {

  chirps = [];

  chirpText = '';

  constructor(private userService: UserService, private feedService: FeedService) { }

  ngOnInit() {
    this.chirps = this.feedService.getCurrentFeed();
  }

  isUserInCollection(collection: string[], userId: string): boolean {
    return collection.indexOf(userId) !== -1;
  }

  OnFavorite(chirp) {
    this.feedService.favoriteChirp(chirp);
  }

  OnRechirp(chirp) {
    this.feedService.reChirp(chirp);
  }

  OnNewChirp() {
    console.log(this.chirpText);
    this.feedService.postNewChirp(this.chirpText);
    this.chirpText = '';
  }


}
