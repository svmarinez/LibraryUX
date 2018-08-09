/// <reference types='googlemaps' />
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MapsAPILoader, LatLng, LatLngLiteral } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  public latitude = 0;
  public longitude = 1;
  public searchControl: FormControl;
  public zoom: number;
  passive;
  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    // // set google maps defaults
    this.zoom = 10;
    this.latitude = 40.392677;
    this.longitude = -3.698653;
    // create search FormControl
    this.searchControl = new FormControl();
    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ['address']
        }
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          console.log(place);
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 16;
      });
    }
  }
}

export interface LatLng {
  lat(): number;
  lng(): number;
}

export interface MouseEvent {
  latLng: LatLngLiteral;
}

export interface MapTypeStyle {
  elementType?: 'geometry';
}

export interface MapOptions {
  center?: LatLngLiteral;
  clickableIcons?: true;
  draggable?: true;
}

export interface InfoWindow {
  getContent(): string|Node;
  getPosition(): LatLng;
  setContent(content: string|Node): void;
  setPosition(position: LatLngLiteral): void;
}
