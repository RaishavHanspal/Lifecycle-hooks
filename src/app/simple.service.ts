import { Injectable } from '@angular/core';
/* Using service without @Injectable.
@Injectable({
  providedIn : 'root'
})
*/
export class SimpleService {

  constructor() { 
    console.log('SimpleService');
  }
  
}
