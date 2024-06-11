// Блок кнопок для списка поля
export class ButtonsForField {
	list_btns_block;
	titleBtn;
	is_select_type;

	constructor (select_type = false) {
		this.is_select_type = select_type;
		this.titleBtn = [
			['/images/up-arrow-one.svg', 'Переместить элемент вверх на одну позицию'],
			['/images/up-arrow-double.svg', 'Переместить элементы в начало списка'],
			['/images/down-arrow-double.svg', 'Переместить элементы в конец списка'],
			['/images/down-arrow-one.svg', 'Переместить элемент вниз на одну позицию'],
			['/images/reset.svg', 'Сброс arrange box к начальному состоянию']
		];
		this.list_btns_block = document.createElement('btn-for-field');
		this.createStructureListOfBtns();
		this.addOnclickAction();
	}

	createButton(titleBtn) {
		const new_button = document.createElement('button');
		new_button.classList.add('btn-list');
		new_button.innerHTML = `<img src='${titleBtn[0]}' title='${titleBtn[1]}'></img>`;
		return new_button;
	}

	createStructureListOfBtns() {
		const size_button_list = !this.is_select_type ?
			this.titleBtn.length : (this.titleBtn.length - 1);
		for (let i = 0; i < size_button_list; i++) {
			this.list_btns_block.append(this.createButton(this.titleBtn[i]));
		}
	}

	addOnclickAction(focused = true) {
		// Обработчики нажатия на кнопки
		console.log(this.list_btns_block.children[0]);
		// Кнопка = Переместить элемент вверх на одну позицию в Available
		this.list_btns_block.children[0].onclick =  () => {
			const search = 'list-element' + (focused ? '.focused' : '');
			const elem_to_move = this.getFocusElements(true);
			console.log(elem_to_move);
			if (elem_to_move.length === 1) {
				if (elem_to_move[0].previousSibling) {
					elem_to_move[0].parentNode.insertBefore(elem_to_move[0],
						elem_to_move[0].previousSibling);
				}
			}
		};
	}

	// Получение списка list-element для обработки
	getFocusElements(focused) {
		const search = 'list-element' + (focused ? '.focused' : '');
		const result =
				this.list_btns_block.parentNode.childNodes[1].childNodes[2].querySelectorAll(
					search
				);
		return result;
	}
}