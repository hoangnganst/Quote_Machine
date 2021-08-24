import React, { useEffect, useState } from 'react';
import { getQuote } from '../../api/Quote';
import { QuoteDto } from '../../api/QuoteDto';

const Quote: React.FC = () => {
	const [quotes, setQuotes] = useState<QuoteDto[]>([]);
	const [quote, setQuote] = useState<QuoteDto>({ quote: '', author: '' });

	useEffect(() => {
		const fetchQuote = async () => {
			const response = await getQuote();
			if (
				response &&
				response.status === 200 &&
				response.data.quotes.length > 0
			) {
				setQuotes(response.data.quotes);
			}
		};
		fetchQuote();
	}, []);

	useEffect(() => {
		if (quotes.length > 0)
			setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	}, [quotes]);
	return (
		<>
			<div
				id="quote-box"
				className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
			>
				<div id="text">{quote.quote}</div>
				<div id="author">{quote.author}</div>
				<button
					id="new-quote"
					onClick={() => {
						setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
					}}
				>
					new
				</button>
			</div>
		</>
	);
};
export default Quote;
