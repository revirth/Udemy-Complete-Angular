import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // An observable is technically a collection of asyncronous data that arrives over time
    

    // 그냥 console.log(this.route.paramMap['id']) 를 사용하지 않는 이유는?

    // ngOnInit()은 컴포넌트 생성시 한번만 생성되므로 /followers/1 에서 /followers/2 로 이동시 작동 안함
    // 해서 아마도 SPA에선 observable로 감싸줘야 모든 변화에 대응할 수 있는듯?
    
    this.route.paramMap
      .subscribe(params => {
        console.log(params, params.get('id'), +params.get('id'));

        let id = +params.get('id');

      });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page:1, order:'newest'}
    })
  }

}
