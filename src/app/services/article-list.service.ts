import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {


  postz = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1649264889763-5cba7bca8335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut',
      date: '2014-04-24',
      type: 'excerpt',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1649390753159-263d6a0b80ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla. Donec eu maximus leo, at pretium lectus. Fusce malesuada, dui eu sodales aliquet, sem lorem imperdiet eros, et eleifend arcu eros ac nibh. Proin id condimentum libero, non tincidunt quam. Sed rhoncus eros lectus, vel egestas sem iaculis quis. Curabitur vestibulum felis et mi facilisis, non commodo dui malesuada. Vivamus convallis tellus at mi convallis varius. Sed sodales sed mi ut vestibulum. Curabitur sagittis malesuada tortor, non sagittis mi lobortis ut. Aliquam erat volutpat. Nam semper viverra nisl, id pellentesque lectus iaculis vitae. Mauris lobortis non velit ac condimentum. Donec vel ex lacus. Pellentesque magna nisi, maximus id semper at, dapibus sed est. Vivamus vitae mauris porta, pellentesque lectus non, consectetur ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      date: '2017-02-14',
      type: 'full',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1649482565637-68ce26ce5ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      date: '2014-06-24',
      type: 'excerpt',
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1649436971901-fa2c16f8aa57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      date: '2021-04-24',
      type: 'excerpt',
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1649251798348-d9b50713d2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      title: 'dolorem eum magni eos aperiam quia',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae Donec eu maximus leo, at pretium lectus. Fusce malesuada, dui eu sodales aliquet, sem lorem imperdiet eros, et eleifend arcu eros ac nibh. Proin id condimentum libero, non tincidunt quam. Sed rhoncus eros lectus, vel egestas sem iaculis quis. Curabitur vestibulum felis et mi facilisis, non commodo dui malesuada. Vivamus convallis tellus at mi convallis varius. Sed sodales sed mi ut vestibulum. Curabitur sagittis malesuada tortor, non sagittis mi lobortis ut. Aliquam erat volutpat. Nam semper viverra nisl, id pellentesque lectus iaculis vitae. Mauris lobortis non velit ac condimentum. Donec vel ex lacus. Pellentesque magna nisi, maximus id semper at, dapibus sed est. Vivamus vitae mauris porta, pellentesque lectus non, consectetur ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      date: '2017-06-18',
      type: 'full',
    },
  ] as Array<{id: number, thumbnail: string,title: string,body: string, date: string, type:'excerpt'|'full'}>;

  constructor() { }
}
