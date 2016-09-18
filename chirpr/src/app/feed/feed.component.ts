import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  chirps = [

  { body: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', author: 'Glen', avatar: 'glen.jpg', date: new Date(), rechirps: ['Joe'], favorites: [] },
  { body: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight', author: 'Joe', avatar: 'joe.jpg', date: new Date(), rechirps: [], favorites: ['Mary'] },
  { body: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', author: 'Mary', avatar: 'mary.jpg', date: new Date(), rechirps: ['Glen'], favorites: ['Mary'] },
  { body: 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones', author: 'Glen', avatar: 'glen.jpg', date: new Date(), rechirps: ['Joe', 'Mary'], favorites: [] },
  { body: 'You can’t have great software without a great team, and most software teams behave like dysfunctional families.', author: 'Joe', avatar: 'joe.jpg', date: new Date(), rechirps: [], favorites: ['Mary', 'Glen'] },


  ];

  chirpText = '';

  constructor() { }

  ngOnInit() {
  }

  isUserInCollection(collection: string[], userId: string): boolean {
    return collection.indexOf(userId) !== -1;
  }

  OnFavorite(chirp) {
    if (!this.isUserInCollection(chirp.favorites, 'Glen')) {
      chirp.favorites.push('Glen');
    }

  }

  OnRechirp(chirp) {
    if (!this.isUserInCollection(chirp.rechirps, 'Glen')) {
      chirp.rechirps.push('Glen');
    }

  }

  OnNewChirp() {
    console.log(this.chirpText);
    this.chirps.unshift(
      { body: this.chirpText, author: 'Glen', avatar: 'glen.jpg', date: new Date(), rechirps: [], favorites: [] }
    );
    this.chirpText = '';
  }

}
