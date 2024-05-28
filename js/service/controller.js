import { FetchService } from './fetch_service.js';
import { XMLHService } from './xmlh_service.js';
const URL = 'http://localhost:8000/cgi-bin/hello.py';

// Класс контроллер(фасад)
export class ControllerService {
	// Конструктор для создания экземпляров класса
	constructor(typeOfService, urlServer) {
    	this.typeOfService = typeOfService;

        (typeOfService === 'fetch') ?
            this.service = new FetchService() :
            (typeOfService === 'XMLH') ?
                this.service = new XMLHService() :
                console.log('Don`t find service with this type!');

        this.url = urlServer;
        console.log('Всё работает! Controller создан!');
	}

	// Get size list
	async GetSizeList() {
		const dataGetSizeList = await this.service.GetRandomNumber(this.url);
		return dataGetSizeList;
	}
}
