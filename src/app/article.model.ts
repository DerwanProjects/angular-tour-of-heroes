export class Article {
  constructor(
    public id: number,
    public thumbnail: string,
    public title: string,
    public body: string,
    public date: string,
    public type: string,
  ) {}
}

export interface ArticleResponse {
  id: number,
  reactions: number,
  userId: number,
  tags: string[],
  body: string
}

export interface ArticlesResponse {
  limit: number,
  skip: number,
  total: number,
  posts: ArticleResponse[]
}
