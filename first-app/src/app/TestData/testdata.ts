import { InMemoryDbService } from 'angular-in-memory-web-api';
export class BookData implements InMemoryDbService {
createDb() {
    let books = [
        { id: '1', name: 'Angular made easy', category: 'Angular', writer: 'Krishna'},
        { id: '2', name: 'Professional Java', category: 'Angular', writer: 'Krishna' },
      { id: '3', name: 'AngularJS Programming', category: 'Angular', writer: 'Vishnu' },	
      { id: '4', name: 'J2EE -Servlets', category: 'Java', writer: 'Vishnu' },
      { id: '5', name: 'MS Azure Devlopment', category: 'Azure', writer: 'Vishnu' },
      { id: '6', name: 'Azure Admin', category: 'Azure', writer: 'Vishnu' },
      { id: '7', name: 'ASP.NET MVC', category: 'DotNET', writer: 'Krishna' },
       { id: '8', name: 'ABC', category: 'DotNET', writer: 'Krishna' }

    ];
  
      return {books};
 }
}