export class Chirp {

    public avatar;

    constructor(public id: number, public body: string, public author: string, public date: Date, public rechirps: Array<string>, public favorites: Array<string>) {
        this.avatar = `${author.toLowerCase()}.jpg`;
    }

    hasFavorited(userId: string): boolean {
        return this.favorites.indexOf(userId) !== -1;
    }

    hasRechirped(userId: string): boolean {
        return this.rechirps.indexOf(userId) !== -1;
    }

}
