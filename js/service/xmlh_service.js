export class XMLHService {
	// Конструктор для создания экземпляров класса
	constructor() {
		this.xhr = new XMLHttpRequest();
		console.log('Всё работает! Сервис через XMLHttpRequest создан!');
	}

	async GetRandomNumber(url) {
		const urlGet = url;

		const dataGetAll = await new Promise((resolve, reject) => {
			this.xhr.open('GET', urlGet);
			this.xhr.onload = () => {
				if (this.xhr.status !== 200) {
					resolve('Ошибка ' + this.xhr.status + ' ' + this.xhr.statusText);
				} else {
					resolve(JSON.parse(this.xhr.response));
				}
			};
			this.xhr.onerror = () => reject('Запрос не удался');
			this.xhr.send();
		})
			.then((res) => res)
			.catch((err) => err);

		return dataGetAll;
	}
}