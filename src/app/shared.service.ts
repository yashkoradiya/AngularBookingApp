import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  BookingDetails() {
    throw new Error('Method not implemented.');
  }
  addDepartment(val: { userId: number; userUserName: string; userContact: number; userGender: string; }) {
    throw new Error('Method not implemented.');
  }
  addUserDetails(val: { userId: number; userUserName: string; }) {
    throw new Error('Method not implemented.');
  }
  readonly APIUrl ="https://localhost:7116/api";


  constructor(private http : HttpClient) { }
  
//get method
  getUserDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BookingDetails');
  }

  // for Deleting
  DeleteDetails(val:any){
    return this.http.delete<any>(this.APIUrl+'/BookingDetails/'+val);
  }




  //Event Details

  getEventDetailsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/EventDetails');
  }

  

  DeleteEventDetails(val:any){
    return this.http.delete<any>(this.APIUrl+ '/EventDetails'+val);
  }

}
