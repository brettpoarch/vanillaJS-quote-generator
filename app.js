const display = document.querySelector('#text');
const button = document.querySelector('#new-quote');
const body = document.querySelector('body');
const twitter = document.querySelector('#tweet-quote');
const twitterLink = document.querySelector('.fa');
const author = document.querySelector('#author');



function setColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);	
	const rgb = (red + ', ' + green + ', ' + blue);
	
	return (
		body.style.backgroundColor = `rgb(${rgb})`,
		twitterLink.style.color = `rgb(${rgb})`,
		button.style.backgroundColor = `rgb(${rgb})`,
		display.style.color = `rgb(${rgb})`,
		author.style.color = `rgb(${rgb})`
		)

};

async function getQuote() {
	const response = await fetch(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`);
	const data = await response.json();
	return data;
};


async function render(){
	const quotes = await getQuote();
	const quote = quotes.message;
	const newAuthor = "Donald Trump"

	twitter.addEventListener('click', function(){
		twitter.href = `https://twitter.com/intent/tweet?text=${quote} - Donald Trump`
	});


	display.innerHTML = `<div">
		${quote}
	</div>`
	author.innerHTML = `<div>
		- ${newAuthor}
	</div>`
};


button.addEventListener('click', function(){
	render();
	setColor();
});	

render();

