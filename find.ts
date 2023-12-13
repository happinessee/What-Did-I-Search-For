/** input tag name property
 *  "q": Google, Bing, DuckDuckGo, Daum, Pinterest, Twitter, Reddit, TripAdvisor, Quora, Github, StackOverflow, Expedia, IMDb,
 *  "p": Yahoo
 *  "wd": Baidu
 *  "query": Naver, Walmart
 * 	"text": Yandex
 *  "search": Wikipedia, Twitch
 *  "field-keywords": Amazon
 *  "_nkw": eBay
 *  "search_query": Youtube, Etsy
 *  "ss": Booking.com
 *  "k": Adobe Stock
 */
const inputQuery = ["q", "p", "wd", "query", "text"];

const searchBox = document.querySelector(`input[name="q"]`);
// Yahoo
const searchBox2 = document.querySelector(`input[name="p"]`);
// Baidu
