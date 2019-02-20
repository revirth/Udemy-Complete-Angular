import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {});
    // this.route.queryParamMap.subscribe(params => {});
    // 2 개를 동시에 subscribe 하려면 ???

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    // .map(combined => {  // combined = ParamMap[]
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   // this.service.getAll({ id: id, page: page });
    //   return this.service.getAll();
    // })
    .switchMap(combined => {  // combined = ParamMap[]
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page });
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers as Array<any>);
      // let id = combined[0].get('id');
      // let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page });
      // this.service.getAll() 
        // .subscribe(followers => this.followers = followers as Array<any>);
    // });
   
  }
}
