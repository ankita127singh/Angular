import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchInput: string): any[]{     
    if(!searchInput) {
        return  [];
    }
   searchInput = searchInput.toLowerCase();
   return users.filter(
       x =>{x.title.toLowerCase().includes(searchInput); 
        console.log(x);
      }
   )
 }
}

