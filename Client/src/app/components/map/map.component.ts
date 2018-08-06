import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

lat: 40.392747;
lng: -3.698728;
apiKey: environment.apiKey;
  constructor() { }

  ngOnInit() {
  }

}
