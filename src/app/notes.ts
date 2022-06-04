// 1. w serwisie masz tablicę z articles
// 2. masz metodę, która zwraca te articles
// 3. masz metodę do zmiany wartości w tablicy
// 4. w komponencie za pomocą DI wstrzykujesz serwis
// 5. tworzysz lokalną wersję zmiennej articles, która przechowuje wartość z service.getArticles()

// 6. kiedy w komponencie zapisujesz dane korzystasz z service.saveArticle(article); po czym do lokalnej wersji article podmieniasz wartość za pomocą service.getArticles()
// 7. na wstecz/anuluj pobierasz wartość z service.getArticle() do lokalnej article
// onInit() { this.articles = this.service.getArticles(); }

// lub

// fetchData(): void {
// this.articles = this.service.getArticles();
// }

// i wtedy

// onInit() { this.fetchData(); }

// saveArticle(): void {
// // ...
// this.service.saveArticle(article);
// this.fetchData();
// }

// onClickBack() {
// // ...
// this.fetchData();
// }
