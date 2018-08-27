import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { SearchService } from './search.service';
import { JsonpModule, BaseRequestOptions, Jsonp, ResponseOptions, Response, Http } from '@angular/http';
import {MockBackend} from "@angular/http/testing";

describe('Service: Search', () => {
  let service: SearchService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        SearchService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]

    });

    backend = TestBed.get(MockBackend);
    service = TestBed.get(SearchService);

  } );

  it('search should return SearchItems', fakeAsync(() => {
    let response = {
      "resultCount": 1,
      "results": [{
        "artistId": 78500,
        "artistName": "U2",
        "trackName": "Beautiful Day",
        "artworkUrl60": "image.jpg"
      }]
    };

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{ body: JSON.stringify(response)}))
    });
  }));

});


