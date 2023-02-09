const quote = document.getElementById('text')
const author = document.getElementById('author')
const tweetButton = document.getElementById('tweet-quote')
const nextQuote = document.getElementById('new-quote')
const toggleButtons = document.getElementById('menu')

const getQuotes = async () =>{
	await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		.then(res => renderData(res.data))
		.catch(err => console.log(err))
}

window.onload = getQuotes();

const fadeInAnimation = (e) => {
	e.classList.remove("run-animation");
	void e.offsetWidth;
	e.classList.add("run-animation");	
}

const renderData = (info) => {
	let randomQuote = info.quotes[Math.floor(Math.random()*info.quotes.length)];
	
	fadeInAnimation(quote);
	fadeInAnimation(author);

	quote.textContent = randomQuote.quote;
	author.textContent = randomQuote.author;
	tweetButton.href = `https://twitter.com/intent/tweet?text=${randomQuote.quote} -${randomQuote.author}`;
}

nextQuote.addEventListener("click", () => getQuotes())


toggleButtons.addEventListener("click", () => {
	if (nextQuote.classList[0] === 'visible') {
		nextQuote.classList.remove("visible");	
		tweetButton.classList.remove("visible");		
	} else {
		nextQuote.classList.add("visible");	
		tweetButton.classList.add("visible");	
	}
})

