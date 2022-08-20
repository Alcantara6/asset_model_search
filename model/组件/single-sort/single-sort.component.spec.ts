import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSortComponent } from './single-sort.component';

xdescribe('SingleSortComponent', () => {
	let component: SingleSortComponent;
	let fixture: ComponentFixture<SingleSortComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SingleSortComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SingleSortComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
