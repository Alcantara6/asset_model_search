import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderModel, OrderBy } from 'src/app/routes/shared/domain/models/common.model';

@Component({
	selector: 'app-single-sort',
	templateUrl: './single-sort.component.html',
	styleUrls: ['./single-sort.component.less']
})
export class SingleSortComponent implements OnInit {
	@Input() sortText: string;
	@Input() orderValue: OrderBy;
	@Input() orderWay: OrderModel;
	@Output() orderChange: EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	changeOrder() {
		if (this.orderValue !== this.orderWay.orderBy) {
			this.orderWay.order = 'descend';
		} else {
			this.orderWay.order = (this.orderWay.order === 'descend' ? 'ascend' : 'descend');
		}
		this.orderWay.orderBy = this.orderValue;
		this.orderChange.emit();
	}
}
