const articles = {
  "football-beyond-the-pitch": {
    title: "Football Beyond the Pitch: A Language of Resistance Against Exploitation and Oppression",
    byline: "Mayukh Ghosh · UG IV",
    cover: "football_beyond.png",
    file: "football-beyond-the-pitch.txt"
  },
  "when-protest-becomes-the-last-language": {
    title: "When Protest Becomes the Last Language of Democracy: The Cockroach Janata Party Movement and the Crisis of Democratic Accountability in India",
    byline: "Arpam Ghosh · UG III",
    cover: "when_protest.webp",
    file: "when-protest-becomes-the-last-language.txt"
  },
  "institutional-capture-of-social-media": {
    title: "Institutional Capture of Social Media Algorithms: The Kashmir Case and the Emergence of a National Panopticon",
    byline: "Jitendra Kumar · UG II",
    cover: "institutional_capture.png",
    file: "institutional-capture-of-social-media.txt"
  },
  "viksit-bharat-2047": {
    title: "Viksit Bharat 2047 and the Inclusion of Indian Muslims in the Development Process: Assessing Socio-Economic Challenges and Prospects",
    byline: "Rayhana Hossain",
    cover: "vikshit bharat.webp",
    file: "viksit-bharat-2047.txt"
  },
  "trivia-of-teesta": {
    title: "The Trivia of Teesta and the Triumvirate of Bangladesh-India-and-China: Bangladesh on a Tightrope, Juxtaposing Regional Rivalries, and Domestic Voices",
    byline: "Bhumit Kumar Sancheti · Jadavpur University, Sociology · UG III",
    cover: "the_trivia_of_teesta.webp",
    file: "trivia-of-teesta.txt"
  },
  "neighbourhood-first-mirage": {
    title: "The Neighbourhood First Mirage: Beijing's Encirclement of South Asia",
    byline: "Debadrito Sarkar · UG III",
    cover: "the_neighbourhood.webp",
    file: "neighbourhood-first-mirage.txt"
  },
  "chasing-shadows-across-borders": {
    title: "Chasing Shadows Across Borders: India-ASEAN Against Transnational Crimes",
    byline: "Koyel Bal · UG III · Ritoja Sen · UG II",
    cover: "chasing shadows.webp",
    file: "chasing-shadows-across-borders.txt"
  },
  "vasudhaiva-kutumbakam-in-age-of-algorithms": {
    title: "Vasudhaiva Kutumbakam in the Age of Algorithms: Toward an Indian Philosophy of Artificial Intelligence Governance",
    byline: "Soham Das · PG I, JUIR",
    cover: "vasudhaiva.png",
    file: "vasudhaiva-kutumbakam-in-age-of-algorithms.txt"
  },
  "end-of-history-new-one": {
    title: "End of History and the Beginning of a New One: India’s Role in Reforming Multilateralism",
    byline: "Madhuwrita Nandy · UG III",
    cover: "science_technology.png",
    file: "end-of-history-new-one.txt"
  },
  "republic-of-gilead": {
    title: "The Republic of Gilead: A Dystopia or Reality?",
    byline: "Madhuwrita Nandi · UG II",
    cover: "republic_of_gilead.webp",
    file: "republic-of-gilead.txt"
  }
};

const articleSlug = new URLSearchParams(window.location.search).get("slug");
const article = articles[articleSlug];
const titleElement = document.getElementById("article-title");
const bylineElement = document.getElementById("article-byline");
const coverElement = document.getElementById("article-cover");
const bodyElement = document.getElementById("article-body");
const suggestedArticlesElement = document.getElementById("suggested-articles");
const suggestionsPrevious = document.getElementById("suggestions-previous");
const suggestionsNext = document.getElementById("suggestions-next");

function isSubheading(paragraph) {
  if (paragraph.startsWith("## ")) return true;
  const letters = paragraph.replace(/[^A-Za-z]/g, "");
  return letters.length > 5 && paragraph.length < 100 && letters === letters.toUpperCase();
}

function renderArticle(text) {
  const paragraphs = text
    .replace(/\r/g, "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\n+/g, " ").replace(/\s{2,}/g, " ").trim())
    .filter(Boolean)
    .filter((paragraph) => paragraph.toLowerCase() !== article.title.toLowerCase());

  bodyElement.replaceChildren(...paragraphs.map((paragraph) => {
    const element = document.createElement(isSubheading(paragraph) ? "h2" : "p");
    element.textContent = paragraph.replace(/^##\s+/, "");
    return element;
  }));
}

function renderSuggestedArticles() {
  if (!suggestedArticlesElement) return;

  Object.entries(articles)
    .filter(([slug]) => slug !== articleSlug)
    .forEach(([slug, suggestedArticle]) => {
      const link = document.createElement("a");
      const image = document.createElement("img");
      const copy = document.createElement("span");
      const title = document.createElement("strong");
      const byline = document.createElement("small");

      link.className = "suggested-article-card";
      link.href = `./article.html?slug=${encodeURIComponent(slug)}`;
      image.src = `./assets/images/${suggestedArticle.cover}`;
      image.alt = "";
      image.loading = "lazy";
      title.textContent = suggestedArticle.title;
      byline.textContent = suggestedArticle.byline;
      copy.append(title, byline);
      link.append(image, copy);
      suggestedArticlesElement.append(link);
    });
}

function scrollSuggestions(direction) {
  if (!suggestedArticlesElement) return;
  suggestedArticlesElement.scrollBy({
    left: direction * Math.max(suggestedArticlesElement.clientWidth * .82, 300),
    behavior: "smooth"
  });
}

if (!article) {
  titleElement.textContent = "Article not found";
  bodyElement.textContent = "Return to the Articles page to choose a published IRSC article.";
} else {
  titleElement.textContent = article.title;
  bylineElement.textContent = article.byline;
  coverElement.src = `./assets/images/${article.cover}`;
  coverElement.alt = `Cover image for ${article.title}`;
  document.title = `${article.title} | IRSC 2026`;
  renderSuggestedArticles();
  suggestionsPrevious?.addEventListener("click", () => scrollSuggestions(-1));
  suggestionsNext?.addEventListener("click", () => scrollSuggestions(1));

  fetch(`./assets/article-content/${article.file}`)
    .then((response) => {
      if (!response.ok) throw new Error("Article content could not be loaded.");
      return response.text();
    })
    .then(renderArticle)
    .catch(() => {
      bodyElement.textContent = "This article is temporarily unavailable. Please return to the Articles page and try again.";
    });
}
