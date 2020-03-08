const display = document.querySelector('#root');
const button = document.querySelector('#quote-generator');
const body = document.querySelector('body');

function setColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);	
	const rgb = (red + ', ' + green + ', ' + blue);
	
	return body.style.backgroundColor = `rgb(${rgb})`

}

async function getQuote() {
	const response = await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`);
	const data = await response.json();
	return data;
}


async function render(){
	const randomNumber = Math.floor(Math.random() * 10);
	const quotes = await getQuote();
	const quote = quotes[randomNumber].content.rendered;
	const author = quotes[randomNumber].title.rendered;
	// quotes.map(quote => quote.content.rendered)
	// quotes.map(quote => quote.title.rendered)

	display.innerHTML = `<div>
	${quote}
	${author}
	</div>`
}

button.addEventListener('click', function(){
	render();
	setColor();
});	

render();

