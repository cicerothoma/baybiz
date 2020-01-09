import { AuthService } from '../form/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private authService: AuthService) {
    
   }
}
