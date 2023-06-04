import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}

  open(app:string)
  {
    if (app==='linkedin')
    {
      window.open('https://www.linkedin.com/in/lyseis/', "_blank");
      
    }
    if (app==='instagram')
    {
      window.open('https://www.instagram.com/lyseis_sistemas/', "_blank");
    }
  }
}
