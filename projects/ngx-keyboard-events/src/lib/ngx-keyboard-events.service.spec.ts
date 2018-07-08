import { TestBed, inject } from '@angular/core/testing';

import { NgxKeyboardEventsService } from './ngx-keyboard-events.service';

describe('NgxKeyboardEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxKeyboardEventsService]
    });
  });

  it('should be created', inject([NgxKeyboardEventsService], (service: NgxKeyboardEventsService) => {
    expect(service).toBeTruthy();
  }));
});
