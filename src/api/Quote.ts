import axios, { AxiosResponse } from 'axios';
import { QuoteDto } from './QuoteDto';

export const getQuote = async (): Promise<void | AxiosResponse<{
	quotes: QuoteDto[];
}>> => {
	try {
		const response = await axios
			.request({
				method: 'GET',
				url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
			})
			.then(function (response: AxiosResponse<{ quotes: QuoteDto[] }>) {
				return response;
			})
			.catch(function (error) {
				console.error(error);
			});
		return response;
	} catch (error) {}
};
