const quote = document.getElementById('text')
const author = document.getElementById('author')
const tweetButton = document.getElementById('tweet-quote')
const nextQuote = document.getElementById('new-quote')


const getQuotes = async () =>{
	await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
		.then(res => renderData(res.data))
		.catch(err => console.log(err))
}
window.onload = getQuotes()


const renderData = (info) => {
	let randomQuote = info.quotes[Math.floor(Math.random()*info.quotes.length)]
	
	// ---- TEXT ANIMATION ----
	quote.classList.remove("run-animation");
	void quote.offsetWidth;
	quote.classList.add("run-animation");

	author.classList.remove("run-animation");
	void author.offsetWidth;
	author.classList.add("run-animation");
	//------------------------ 

	quote.textContent = randomQuote.quote;
	author.textContent = randomQuote.author
	tweetButton.href = `https://twitter.com/intent/tweet?text=${randomQuote.quote} -${randomQuote.author}`
}



nextQuote.addEventListener("click", () => {
	getQuotes()
})

