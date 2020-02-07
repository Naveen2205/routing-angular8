import { Component, OnInit } from '@angular/core';
import { ListDetailService } from '../list-detail.service';
import { Subscriber } from 'rxjs';
import { DataType } from './dataType';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  storeData: DataType[] = [];
  errorMessage: any;

  constructor(private _service: ListDetailService) { }

  ngOnInit() {
    console.log("List component :");
    this._service.serviceMethod()
                 .subscribe((data)=> {this.storeData = data
                    console.log(this.storeData);
                 },
                            (error)=> this.errorMessage = error);
  }

}
