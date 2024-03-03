///** input tag name property
// *  "q": Google, Bing, DuckDuckGo, Daum, Pinterest, Twitter, Reddit, TripAdvisor, Quora, Github, StackOverflow, Expedia, IMDb,
// *  "p": Yahoo
// *  "wd": Baidu
// *  "query": Naver, Walmart
// * 	"text": Yandex
// *  "search": Wikipedia, Twitch
// *  "field-keywords": Amazon
// *  "_nkw": eBay
// *  "search_query": Youtube, Etsy
// *  "ss": Booking.com
// *  "k": Adobe Stock
// */

const nameTag = [
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

const storageKey = "whatDidISearchFor?";

// 페이지 로드 상태를 확인하고, 완료되었을 때 함수 실행
function checkDocumentReady() {
  if (document.readyState === "complete") {
    setupInputListener();
  } else {
    setTimeout(checkDocumentReady, 50);
  }
}

// 'myInput' input 요소에 이벤트 리스너를 설정하는 함수
async function setupInputListener() {
  const nameAttributes = nameTag.find(
    (val) => document.querySelector(`input[name="${val}"]`) !== null
  );
  if (nameAttributes === undefined) return;

  const input = document.querySelector(`input[name='${nameAttributes}']`);

  if (!!input) {
    const searchValue = input.getAttribute("value");
    const dateKey = new Date().toISOString().slice(0, 10);
    const localStorageData = await chrome.storage.local.get(dateKey);
    if (Object.keys(localStorageData).length === 0) {
      await chrome.storage.local.set({ [dateKey]: [searchValue] });
    } else {
      const addedValue = localStorageData[dateKey].concat(searchValue);
      await chrome.storage.local.set({ [dateKey]: addedValue });
    }
    console.log("chrome storage: ", await chrome.storage.local.get(dateKey));
  }
}

// 문서 로드 상태를 확인하는 함수 호출
checkDocumentReady();
