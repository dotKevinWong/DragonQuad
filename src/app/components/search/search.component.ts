import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products;
  startAt = new Subject()
  endAt = new Subject()

  constructor(private searchSvc: SearchService, private router: Router, private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.searchSvc.getProducts(this.startAt, this.endAt)
                    .subscribe(products => this.products = products)
  }
  
  search($event) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q+"\uf8ff")
    
  }

}
