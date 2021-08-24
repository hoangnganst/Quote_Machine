/* eslint-disable jsx-a11y/anchor-is-valid */
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
				className="m-3 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 flex-col"
			>
				<div id="text">
					<p className="text-lg font-semibold">
						<i className="fa fa-quote-left"> </i>
						{` ${quote.quote}`}
					</p>
				</div>
				<div id="author" className="font-medium">
					- <span className="text-gray-500">{quote.author}</span>
				</div>
				<div className="flex space-x-3 mb-4 text-sm font-medium p-2">
					<div className="flex-auto flex space-x-3">
						<button
							className="p-2 flex items-center justify-center rounded-md bg-black text-white"
							id="new-quote"
							onClick={() => {
								setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
							}}
						>
							New Quote
						</button>
					</div>
					<a
						className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
						type="button"
						aria-label="like"
						id="tweet-quote"
						href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
							'"' + quote.quote + '" ' + quote.author
						)}`}
					>
						<i className="fa fa-twitter" />
					</a>
				</div>

				<div></div>
			</div>
		</>
	);
};
export default Quote;
