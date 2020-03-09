const display = document.querySelector('#root');
const button = document.querySelector('#quote-generator');
const body = document.querySelector('body');
const twitter = document.querySelector('#tweet-quote');

// https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand

function setColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);	
	const rgb = (red + ', ' + green + ', ' + blue);
	
	return body.style.backgroundColor = `rgb(${rgb})`

};

async function getQuote() {
	const response = await fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`);
	const data = await response.json();
	return data;
};


async function render(){
	const quotes = await getQuote();
	const quote = quotes.message;
	console.log(quote)
	
	twitter.addEventListener('click', function(){
		twitter.href = `https://twitter.com/intent/tweet?text=${quote} - Donald Trump`
	});


	display.innerHTML = `<div>
		${quote}
		- Donald Trump
	</div>`
};


button.addEventListener('click', function(){
	render();
	setColor();
});	

render();

