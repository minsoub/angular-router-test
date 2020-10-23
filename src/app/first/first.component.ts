import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: any;
  constructor(private route: ActivatedRoute, 
    private router: Router ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.name = params['name'];
    })
  }

  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route});
  }
}
