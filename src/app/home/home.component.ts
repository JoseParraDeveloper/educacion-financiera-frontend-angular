import { Location } from '@angular/common';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MediaService } from '../Services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {

  }



}
