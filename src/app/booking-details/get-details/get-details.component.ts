import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  constructor(private service: SharedService) { }

  BookingDetails : any=[];

  ngOnInit(): void {

    this.refreshUserList();    
  }

 deleteClick(data: any){
  //console.log(val);
  if(confirm('Are You Sure??')){
    this.service.DeleteDetails(data.bookingId).subscribe(data=>{
    alert(data.toString());
    this.refreshUserList();
    })

  }

  
 }
 
  refreshUserList(){
    this.service.getUserDetailsList().subscribe(data=>{
      this.BookingDetails=data;
    });

}
}
