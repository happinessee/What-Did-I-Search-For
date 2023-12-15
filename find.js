"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
setTimeout(() => {
    document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
        const checkProperty = nameProperty.find((val) => document.querySelector(`input[name="${val}"]`) !== null);
        console.log(checkProperty);
        let mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (checkProperty) {
                    const searchBox = document.querySelector(`input[name="${checkProperty}"]`);
                    console.log(searchBox);
                    if (searchBox) {
                        // 여기에서 검색창에 대한 추가 작업을 수행합니다.
                        console.log("검색창이 발견되었습니다: ", searchBox);
                    }
                }
            });
        });
        mutationObserver.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    }));
}, 3000);
