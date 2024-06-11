import { ListBtnBetweenFields } from './buttons/buttons_between.js';
import { FieldArrangeBox } from './field/field_class.js';

// Внешний класс ArrangeBox
export class ArrangeBoxClass {
	main_id;
	// Внешний контейнер для двух полей и блока кнопок
	arrange_box_main;
	// Блок списка Available
	available_field_block;
	// Блок списка Selected
	selected_fiels_block;
	// Блок кнопок между списками
	button_between_fields_block;


	constructor() {
		this.main_id = +window.sessionStorage.getItem('countArrangeBox') + 1;
		window.sessionStorage.setItem('countArrangeBox', this.main_id);
		// Создание внешнего контейнера для двух полей и блока кнопок
		this.arrange_box_main = document.createElement('main-control');
		this.arrange_box_main.setAttribute( 'id', `${this.main_id}`);
		this.button_between_fields_block = new ListBtnBetweenFields();
		this.generateInitialStateOfList();
		this.available_field_block = new FieldArrangeBox(this.main_id);
		this.selected_fiels_block = new FieldArrangeBox(this.main_id, true);

		// Добавление на страницу ArrangeBox
		this.createStructureArrangeBox();
		this.addToPage();
	}

	createStructureArrangeBox() {
		this.arrange_box_main.append(this.available_field_block.field);
		this.arrange_box_main.append(this.selected_fiels_block.field);
		this.arrange_box_main.append(this.button_between_fields_block.list_buttons_between);
	}

	addToPage() {
		// Поиск места вставки
		const node_push = document.getElementsByClassName('arrange-box')[0];
		// Добавить на страницу
		node_push.append(this.arrange_box_main);
	}

	generateInitialStateOfList() {
		// Генерирование списка Available
		const size_list = Math.floor(Math.random() * (25 - 5) + 5);
		const initialStateOfList = [];
		for (let i = 0; i < size_list; i++) {
			const length = Math.floor(Math.random() * (10 - 3) + 3);
			initialStateOfList.push({
				'id': i,
				'value': this.generateRandomString(length)
			});
		}
		// Закидываем в sessionStorage
		window.sessionStorage.setItem(`initArrangeBox_${this.main_id}`,
			JSON.stringify(initialStateOfList));
	}

	// Пока просто погенерируем)
	generateRandomString(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
}


// +window.sessionStorage.setItem('name_1', JSON.stringify([{ 'id_1': 56, 'value': 'prada' }, { 'id_2': 78 }]));
// +window.sessionStorage.setItem('name_2', JSON.stringify([{ 'id': 82 }]));


// +const name = JSON.parse(window.sessionStorage.getItem('name_1'));
// +console.log('name_1 ', name);
// +console.log('name[0] ', name[0]);