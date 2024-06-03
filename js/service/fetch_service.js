// Back
// Класс для работы с беком, используя fetch
// Это сервис
export class FetchService {
	// Конструктор для создания экземпляров класса
  	constructor() {
	  console.log('Всё работает! Сервис через Fetch создан!');
  	}

  	async GetRandomNumber(urlGet) {
		const dataGet = await fetch(urlGet, {
			method: 'GET'
	  	})
		  	.then(res => res.json())
			.catch((err) => {
				console.log('Error!');
				return err;
			});
	  return dataGet;
  	}
}