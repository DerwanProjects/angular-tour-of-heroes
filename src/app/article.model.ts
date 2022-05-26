export class Article {
  constructor(
    public id: number,
    public thumbnail: string,
    public title: string,
    public body: string,
    public date: string,
    public type: 'excerpt'|'full',
  ) {}
}
