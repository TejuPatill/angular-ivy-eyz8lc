import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: any;
  sub: any;
  user: any = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params["name"];
      this.user.name = params["name"];
      this.user.email = params["email"];
      this.user.profile = params["profile"];
    });
    console.log(this.name, this.route.params, this.sub);
  }
}
