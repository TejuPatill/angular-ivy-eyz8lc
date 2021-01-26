import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-userlist",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserlistComponent implements OnInit {
  users = [
    { name: "john", id: 1, email: "john@user.com", profile: "teacher" },
    { name: "smith", id: 2, email: "smith@user.com", profile: "farmer" },
    { name: "peter", id: 3, email: "peter@user.com", profile: "engineer" }
  ];

  constructor() {}

  ngOnInit() {}
}
