import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { TrackByService } from '@libraries/track-by/track-by.service';

describe('CardsComponent', () => {
    let component: CardsComponent;
    let fixture: ComponentFixture<CardsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardsComponent],
            providers: [TrackByService],
        }).compileComponents();

        fixture = TestBed.createComponent(CardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
