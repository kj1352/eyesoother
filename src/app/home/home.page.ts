import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	totalMinutes: number;
	displayColorsUI: boolean = false;
	countInterval: any;
	displayColor: string;
	showColor: boolean = false;
	isExit: boolean = true;

	constructor() {
		this.displayColor = this.getRandomColor();
	}

	startCount() {
		let seconds = this.totalMinutes * 60;
		this.showColor = true;

		this.countInterval = setInterval(()=> {
			this.displayColor = this.getRandomColor();
			seconds -= 3;
			if (seconds <= 0){
				this.stopColor();
			};
		}, 3000);
	}

	stopColor() {
		this.totalMinutes = null;
		this.showColor = false;
		clearInterval(this.countInterval);
		this.isExit? navigator['app'].exitApp(): null;
	}

	getRandomColor() {
		let colors = ['#000101', '#041111', '#072121', '#0b3131', '#0e4242', '#115252', '#156262', '#187272', '#1c8282', '#1f9292', '#23a3a3', '#26b3b3', '#29c3c3', '#2ed2d2', '#3ed6d6', '#4ed9d9', '#5edddd', '#6ee0e0', '#7ee4e4', '#8fe7e7', '#9febeb', '#afeeee', '#3e3b00', '#514e00', '#787300', '#8c8600', '#a09900', '#c7be00', '#dad100', '#ffacbb', '#ff859a', '#ff728a', '#ff4a6a', '#ff2349', '#720014', '#99001b', '#3b5f3b', '#4a774a', '#528352', '#598f59', '#619b61', '#6ca36c', '#78ab78', '#84b384'];
		return colors[Math.floor(Math.random() * colors.length + 1)];
	}

}
