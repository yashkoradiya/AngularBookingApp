import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private service: SharedService) { }
  UserDetailsList !: any[];

  ModalTitle !:string;
  ActivateAddEditDepComp:boolean=false;
  user:any;
  ngOnInit(): void {

    this.refreshUserList();
  }

  addClick(){
    this.user={
      userId:1,
      userUserName:""
    }
    this.ModalTitle="Add UserDetails";
    this.ActivateAddEditDepComp=true;

  }

  editClick(data: any){
    this.user=data;
    this.ModalTitle="Edit UserDetails";
    this.ActivateAddEditDepComp=true;
  }
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshUserList();
  }


  refreshUserList(){
    this.service.getUserDetailsList().subscribe(data=>{
      this.UserDetailsList=data;
    });

}
}
