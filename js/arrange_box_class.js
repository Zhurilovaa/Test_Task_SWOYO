import { ListBtnBetweenFields } from './buttons/buttons_between.js';

// Внешний класс ArrangeBox
export class ArrangeBoxClass {
	// Внешний контейнер для двух полей и блока кнопок
	arrange_box_main;
	// Блок списка Available
	available_field_block;
	// Блок списка Selected
	selected_fiels_block;


	constructor() {
		// Создание внешнего контейнера для двух полей и блока кнопок
		this.arrange_box_main = document.createElement('main-control');

		this.button_between_fields_block = new ListBtnBetweenFields();
		console.log(this.button_between_fields_block);

		this.arrange_box_main.append(this.button_between_fields_block.list_buttons_between);

		// Добавление на страницу ArrangeBox
		this.addToPage();
		// window.sessionStorage.setItem('name_1', JSON.stringify([{ 'id_1': 56, 'value': 'prada' }, { 'id_2': 78 }]));
		// window.sessionStorage.setItem('name_2', JSON.stringify([{ 'id': 82 }]));
	}

	addToPage() {
		// Поиск места вставки
		const node_push = document.getElementsByClassName('arrange-box')[0];
		// Добавить на страницу
		node_push.append(this.arrange_box_main);
		// const name = JSON.parse(window.sessionStorage.getItem('name_1'));
		// console.log('name_1 ', name);
		// console.log('name[0] ', name[0]);
	}
}
