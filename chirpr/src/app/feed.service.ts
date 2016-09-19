import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Chirp } from './chirp';

@Injectable()
export class FeedService {

    chirps = [

  new Chirp('Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', 'Glen', new Date(), ['Joe'], []),

  new Chirp('Measuring programming progress by lines of code is like measuring aircraft building progress by weight', 'Joe', new Date(), [], ['Mary']),

  new Chirp('Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 'Mary', new Date(), ['Glen'], ['Mary']),

  new Chirp('People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones', 'Glen', new Date(), ['Joe', 'Mary'], []),

  new Chirp('You can’t have great software without a great team, and most software teams behave like dysfunctional families.', 'Joe', new Date(), [], ['Mary', 'Glen']),


  ];

  constructor(private userService: UserService) { }

  getCurrentFeed(): Array<Chirp> {

    return this.chirps;


  }

  private isUserInCollection(collection: string[], userId: string): boolean {

    return collection.indexOf(userId) !== -1;

  }

  postNewChirp(chirpText: string) {
    this.chirps.unshift(
      new Chirp(chirpText, this.userService.getCurrentUser(), new Date(), [], [])
    );
  }

  reChirp(chirp: Chirp) {

    if (!this.isUserInCollection(chirp.rechirps, this.userService.getCurrentUser())) {
      chirp.rechirps.push(this.userService.getCurrentUser());
    }

  }

  favoriteChirp(chirp: Chirp) {

    if (!this.isUserInCollection(chirp.favorites, this.userService.getCurrentUser())) {
      chirp.favorites.push(this.userService.getCurrentUser());
    }

  }

  getFriends(): Array<string> {
    return [ 'Mary', 'Joe', 'Karen', 'Phil', 'Toni' ];
  }


}
