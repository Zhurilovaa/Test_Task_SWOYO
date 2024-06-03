import { ArrangeBoxClass } from './arrange_box_class.js';
import { ArrangeBox } from './arrange_box_function.js';

// Обработчик на добавление нового экземпляра ArrangeBox
class AddArangeBoxButton {
	constructor(type = 'function') {
		this.add_AB_button = document.createElement('button');
		this.add_AB_button.setAttribute('type', 'button');
		this.addClassesStyle();
		this.addOnClickToButton(type);
		this.add_AB_button.innerHTML = '<p>Добавить новый arrange box</p>';
		this.addButtonToPage();
	}

	addOnClickToButton(type) {
		if (type === 'function') {
			this.add_AB_button.onclick = function () {
				const element = new ArrangeBox();
				// + arrange_box_tests.push(element);
				// + arrange_box_tests[arrange_box_tests.length - 1].addToPage();
				element.addToPage();
			};
		} else if (type === 'class') {
			this.add_AB_button.onclick = function () {
				const element = new ArrangeBoxClass();
				// + arrange_box_tests.push(element);
				// + arrange_box_tests[arrange_box_tests.length - 1].addToPage();
				element.addToPage();
			};
		}
	}

	addClassesStyle() {
		this.add_AB_button.classList.add('btn-new-arrange-box__comment');
		this.add_AB_button.classList.add('btn-list');
	}

	addButtonToPage() {
		// Поиск места вставки
		const node_push = document.getElementsByClassName('btn-new-arrange-box')[0];
		// Добавить на страницу
		node_push.append(this.add_AB_button);
	}
}

const add_button = new AddArangeBoxButton('function');

const add_button_class = new AddArangeBoxButton('class');