import { ControllerService } from './controller.js';

// Внешний класс ArrangeBox
class TestServiceClass {
	constructor() {
		this.typeOfService = 'fetch';
		this.urlServer = 'http://localhost:8000/cgi-bin/hello.py';
		this.controllerService = new ControllerService(this.typeOfService, this.urlServer);
		// Запросы через fetch
		this.sizeList = 0;
		this.GetSizeListConsole();
	}

	async GetSizeListConsole() {
		const dataGetSL = await this.controllerService.GetSizeList();
		console.log(`Сервис ${this.controllerService.typeOfService} : Get size list: ${dataGetSL.size_list}`);
		this.sizeList = dataGetSL.size_list;
	}
}

const test_service_console = new TestServiceClass();
