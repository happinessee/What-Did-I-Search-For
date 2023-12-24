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

// 페이지 로드 상태를 확인하고, 완료되었을 때 함수 실행
function checkDocumentReady() {
  if (document.readyState === "complete") {
    setupInputListener();
  } else {
    // 상태가 'complete'가 아니면, 이 함수를 다시 호출
    console.log("wait...");
    setTimeout(checkDocumentReady, 50);
  }
}

// 'myInput' input 요소에 이벤트 리스너를 설정하는 함수
function setupInputListener() {
  const nameAttirbutes = nameTag.find(
    (val) => document.querySelector(`input[name="${val}"]`) !== null
  );
  console.log("nameAttributes: ", nameAttirbutes);
  var input = document.querySelector(`input[name='${nameAttirbutes}']`);
  console.log((input as HTMLInputElement).value);

  if (input) {
    console.log("input value: true");
    input.addEventListener("input", (e) => {
      console.log((e.target as HTMLInputElement).value);
    });
  } else {
    console.log("input value: false");
  }
}

// 문서 로드 상태를 확인하는 함수 호출
checkDocumentReady();
