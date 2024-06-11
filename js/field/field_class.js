import { ButtonsForField } from '../buttons/buttons_for_field.js';

// Блок списка Available и списка Selected
export class FieldArrangeBox {
	is_selected_list;
	input_search_field;
	list_buttons_for_list;
	field_list_block;
	list_of_elements;

	constructor(idAB, select_type = false) {
		this.is_selected_list = select_type;

		this.field = document.createElement('field');

		this.createSearchInput();

		if (this.is_selected_list) {
			this.field.classList.add('selected');
		}

		// Блок кнопок для поля
		this.list_buttons_for_list = new ButtonsForField(this.is_selected_list);

		// Добавим непосредственно блок с полем для списка
		this.createFieldList(idAB);

		this.createStructureField();
	}

	createSearchInput() {
		// Поле поиска для списка
		this.input_search_field = document.createElement('input');
		this.input_search_field.type = 'search';
		this.input_search_field.placeholder = 'search...';
		this.input_search_field.classList.add('input-search');

		this.addSearchInputAction();
	}

	createFieldList(idAB) {
		this.field_list_block = document.createElement('list');
		const name_of_list = this.is_selected_list ? 'Selected' : 'Available';
		this.field_list_block.innerHTML = `<div class=list__header>${name_of_list}</div>`;

		this.list_of_elements = document.createElement('list-of-elements');
		if (!this.is_selected_list) {
			console.log(idAB);
			const id_SS = 'initArrangeBox_' + idAB;
			const data = JSON.parse(window.sessionStorage.getItem(id_SS));
			console.log(window.sessionStorage.getItem(`initArrangeBox_${idAB}`));
			this.addListsOfElements(data);
		}
	}

	addSearchInputAction() {
		this.input_search_field.oninput = function () {
			const filter_search =
				this.parentNode.childNodes[2].querySelectorAll('list-element');
			if (this.value) {
				for (let i = 0; i < filter_search.length; i++) {
					if (!filter_search[i].firstChild.firstChild.data.includes(this.value)) {
						filter_search[i].classList.add('not-search');
					} else {
						filter_search[i].classList.remove('not-search');
					}
				}
			} else {
			// Возвращаем все значения на место
				for (let i = 0; i < filter_search.length; i++) {
					if (filter_search[i].firstChild.firstChild.data !== this.value) {
						filter_search[i].classList.remove('not-search');
					}
				}
			}
		};
	}

	createStructureField() {
		this.field.append(this.list_buttons_for_list.list_btns_block);
		this.field.append(this.field_list_block);
		this.field_list_block.append(this.input_search_field);
		this.field_list_block.append(this.list_of_elements);
	}

	addListsOfElements(lists_of_elements) {
		console.log(lists_of_elements);
		for (const item_of_list of lists_of_elements) {
			console.log(item_of_list);
			const element = document.createElement('list-element');
			element.innerHTML = `<p>${item_of_list.id}</p><p>${item_of_list.value}</p>`;
			element.onclick = function () {
			element.classList.contains('focused')
				? element.classList.remove('focused')
				: element.classList.add('focused');
			};
			this.list_of_elements.append(element);
		}
	}

}