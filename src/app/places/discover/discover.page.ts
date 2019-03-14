import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(private placesServices: PlacesService, private menuCtrl: MenuController) { }


  ngOnInit() {
    this.loadedPlaces = this.placesServices.places;
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }
}
