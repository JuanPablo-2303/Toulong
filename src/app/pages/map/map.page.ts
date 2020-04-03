import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit 
{
  map=null;

  markers: Marker[] = [
    {
      position: {
        lat: 21.111510,
        lng: -86.933902,
      },
      title: 'Valle Verde'
    },
    {
      position: {
        lat: 21.087354,
        lng: -86.849371,
      },
      title: 'Alfredo Bonfil'
    },
    {
      position: {
        lat: 21.106945,
        lng: -86.961989,
      },
      title: 'Tres Reyes'
    },
    {
      position: {
        lat: 21.132678,
        lng: -86.897779,
      },
      title: 'El pedregal'
    },
    {
      position: {
        lat: 21.163029,
        lng: -86.907349,
      },
      title: 'Cuna Maya'
    },
    {
      position: {
        lat: 21.145900,
        lng: -86.913264,
      },
      title: 'Villas Otoch Paraiso'
    },
    {
      position: {
        lat: 21.198740,
        lng: -86.830721,
      },
      title: '237'
    },
    {
      position: {
        lat: 21.150290,
        lng: -86.914282,
      },
      title: 'Villas Otoch'
    },
    {
      position: {
        lat: 21.195309,
        lng: -86.880631,
      },
      title: 'Villas del Mar Plus'
    },
    {
      position: {
        lat: 21.196147,
        lng: -86.838883,
      },
      title: 'Rancho Viejo<'
    },
  ];

  constructor() { }

  ngOnInit() 
  {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 	21.1742897, lng: 	-86.8465576};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}
