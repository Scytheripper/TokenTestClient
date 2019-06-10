import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token: any;
  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getTokenFromApi().subscribe( data => {
      this.token = data;
    });
  }

  getCachedToken() {
    this.tokenService.getTokenFromApi().subscribe( data => {
      this.token = data;
    });
  }

}
