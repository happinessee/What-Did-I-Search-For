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
  let mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        const checkProperty = nameProperty.find(
          (val) => document.querySelector(`input[name="${val}"]`) !== null
        );

        if (checkProperty) {
          const searchBox = document.querySelector(
            `input[name="${checkProperty}"]`
          ) as HTMLInputElement;
          if (searchBox) {
            // 여기에서 검색창에 대한 추가 작업을 수행합니다.
            console.log("검색창이 발견되었습니다: ", searchBox);
          }
        }
      }
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
