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
const nameProperty = [
  "q",
  "p",
  "wd",
  "query",
  "text",
  "search",
  "field-keywords",
  "_nkw",
  "search-query",
  "ss",
  "k",
];

document.addEventListener("DOMContentLoaded", () => {
  const checkProperty = nameProperty.find(
    (val) => document.getElementsByName("input[name='${val}']") !== null
  );
  console.log(checkProperty);
  if (checkProperty) {
    const searchBox = document.querySelector(
      "input[name='${checkProperty}']"
    ) as HTMLInputElement;
    console.log(searchBox);

    if (searchBox) {
      searchBox.addEventListener("change", () => {
        const searchValue = searchBox.value;
        console.log("SEARCH_VALUE_TEST: ", searchValue);
      });
    }
  }
});
