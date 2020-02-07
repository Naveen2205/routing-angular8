import { Component, OnInit } from '@angular/core';
import { ListDetailService } from '../list-detail.service';
import { DataType } from '../list/dataType';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  storeDate: DataType[] = [];
  errorMessage: any;

  constructor(private _service: ListDetailService) { }

  ngOnInit() {
    console.log("detail component method :");
    this._service.serviceMethod()
                 .subscribe((data)=> this.storeDate = data,
                            (error)=> this.errorMessage = error)
    
  }

}
