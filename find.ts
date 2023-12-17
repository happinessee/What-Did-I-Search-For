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

//const nameProperty = [
//  "q",
//  "p",
//  "wd",
//  "query",
//  "text",
//  "search",
//  "field-keywords",
//  "_nkw",
//  "search-query",
//  "ss",
//  "k",
//];

//(async () => {})();

//document.addEventListener("DOMContentLoaded", async () => {
//  window.postMessage({ type: "test", text: "minho-jjang" }, "*");
//  console.log("FLAME");
//  localStorage.setItem("flameCharismaMinho", "flame");
//  const checkProperty = nameProperty.find(
//    (val) => document.querySelector(`input[name="${val}"]`) !== null
//  );
//  window.postMessage(
//    { type: "test", text: `checkProperty: ${checkProperty}` },
//    "*"
//  );
//  localStorage.setItem("flameCharismaMinho", `${checkProperty}`);
//  console.log("CHARISMA");
//  if (checkProperty) {
//    const searchBox = document.querySelector(
//      `input[name="${checkProperty}"]`
//    ) as HTMLInputElement;

//    window.postMessage({ type: "test", text: `searchBox${searchBox}` }, "*");
//    if (searchBox) {
//      // 여기에서 검색창에 대한 추가 작업을 수행합니다.
//      window.postMessage(
//        {
//          type: "test",
//          text: `검색창이 발견되었습니다. 불꽃-카리스마 민호.`,
//        },
//        "*"
//      );
//      console.log("MINHO");
//      localStorage.setItem("flameCharismaMinho", `flame charisma minho!`);
//    }
//  }
//});

var greeting = "hola, ";
var button = document.getElementById("mybutton") as any;
button.person_name = "Roberto";
button.addEventListener(
  "click",
  () => {
    alert(greeting + button.person_name + ".");
    console.log("flame charisma minho.");
    alert("불꽃 카리스마 민호. 마이 네임 이즈 민호.");
  },
  false
);
