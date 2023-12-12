document.addEventListener("DOMContentLoaded", () => {
  const mockdata = fetchMockData();
  mockdata.forEach((val, i, arr) => {
    const container = document.getElementById("card-container")!;
    container.innerHTML = "";
    container.className = "main-card";

    const indexElement = makeCardIndex(i);
    container.appendChild(indexElement);

    const cardContent = makeCardContent(val.mainWord, val.subWords);
    container.appendChild(cardContent);

    const countsElement = makeCountElement(val.counts);
    container.appendChild(countsElement);

    container.appendChild(makeIcon());
  });
});

type CardData = {
  mainWord: string;
  subWords: string[];
  counts: number;
};

const makeIcon = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 -960 960 960");
  svg.setAttribute("width", "24");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
  );

  // Append the path to the SVG
  svg.appendChild(path);
  return svg;
};

const makeCardIndex = (i: number) => {
  const indexElement = document.createElement("div");
  indexElement.className = "card-index";
  indexElement.textContent = i.toString();
  return indexElement;
};

const makeCardContent = (mainWord: string, subWords: string[]) => {
  const contentElement = document.createElement("div");
  contentElement.className = "card-content";

  const mainWordElement = document.createElement("div");
  mainWordElement.textContent = mainWord;
  contentElement.appendChild(mainWordElement);

  const subWordsElement = makeSubWords(subWords);
  contentElement.appendChild(subWordsElement);
  return contentElement;
};

const makeSubWords = (subWords: string[]) => {
  const subWordsElement = document.createElement("div");
  subWords.forEach((val) => {
    const subWord = document.createElement("div");
    subWord.textContent = val;
    subWordsElement.appendChild(subWord);
  });
  return subWordsElement;
};

const makeCountElement = (counts: number) => {
  const searchCountElement = document.createElement("div");
  searchCountElement.className = "card-searchCount";

  const countsElement = document.createElement("div");
  countsElement.textContent = counts.toString();
  countsElement.style.fontSize = "24px";

  const langElement = document.createElement("div");
  langElement.textContent = "counts";
  langElement.style.fontSize = "14px";

  searchCountElement.appendChild(countsElement);
  searchCountElement.appendChild(langElement);
  return searchCountElement;
};

const fetchMockData: () => CardData[] = () => {
  return [
    { mainWord: "MainWord1", subWords: ["subword1", "subword2"], counts: 14 },
    { mainWord: "MainWord2", subWords: ["subword12", "subword22"], counts: 7 },
  ];
};
