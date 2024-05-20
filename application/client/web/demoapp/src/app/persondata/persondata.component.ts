import { Component, OnInit, ViewChild } from '@angular/core';
import { PersondataService } from './persondata.service';





@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.scss'],
})

export class PersondataComponent implements OnInit {
    public persondata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        address: '',
    }




    constructor (
        private persondataService: PersondataService,
    ) { }

    ngOnInit() {
        this.persondata.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;



  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

}





