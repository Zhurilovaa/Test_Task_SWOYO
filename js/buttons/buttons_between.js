
// Блок кнопок между полями
export class ListBtnBetweenFields {
	list_buttons_between;
	titleBetweenBtn = [
		['/images/right-arrow-one.svg', 'Переместить элементы вправо'],
		['/images/right-arrow-double.svg', 'Переместить все элементы вправо'],
		['/images/left-arrow-double.svg', 'Переместить все элементы влево'],
		['/images/left-arrow-one.svg', 'Переместить элементы влево']
	];
	count = 0;

	constructor() {
		this.list_buttons_between = document.createElement('btn-for-field');
		for (const title of this.titleBetweenBtn) {
			this.list_buttons_between.append(this.createButton(title));
		}
		this.addClasses();
		this.addActionButtons();
	}

	addClasses() {
		this.list_buttons_between.classList.add('btn-between');
	}

	createButton(titleBtn) {
		const new_button = document.createElement('button');
		new_button.classList.add('btn-list');
		new_button.innerHTML = `<img src='${titleBtn[0]}' title='${titleBtn[1]}'></img>`;
		return new_button;
	}

	addActionButtons() {
		// Кнопка = Переместить элементы вправо
		this.list_buttons_between.children[0].onclick = () => {
			this.count++;
			const temp = { 'id' : this.count };
			const data = JSON.parse(window.sessionStorage.getItem('name_1'));
			data.push(temp);
			window.sessionStorage.setItem('name_1',
				JSON.stringify(data));
			console.log('temp ', temp);
		};
		console.log('count ', this.count);
		// Кнопка = Переместить элементы влево
		this.list_buttons_between.children[3].onclick = () => {
			console.log('count ', this.count);
		};
	}

	// Получение списка list-element для обработки
	getListOfElements(elem, focused, in_list, in_select) {
		let result = [];
		const search = 'list-element' + (focused ? '.focused' : '');
		if (in_list) {
			result =
				elem.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
					search
				);
		} else {
			result = in_select
				? elem.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].querySelectorAll(
					search
				)
				: elem.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].querySelectorAll(
					search
				);
		}
		return result;
	}

	// Получение узла вставки list-element
	getNodePush(elem, in_select) {
		return in_select
		? elem.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2]
		: elem.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2];
	}
}