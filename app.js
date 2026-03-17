const articles = [
  {
    title: "Home",
    file: "./wiki/Home.md",
    summary: "Top-level field manual and article index."
  },
  {
    title: "Project Overview",
    file: "./wiki/Project-Overview.md",
    summary: "Defines the project in one pass: what it is, what it is not, and why it exists."
  },
  {
    title: "Brand and Lore",
    file: "./wiki/Brand-and-Lore.md",
    summary: "Voice, visuals, taglines, and the thin layer of myth that makes the meme reusable."
  },
  {
    title: "Tokenomics",
    file: "./wiki/Tokenomics.md",
    summary: "Simple structure, visible allocations, and no detective-board token design."
  },
  {
    title: "Launch Plan",
    file: "./wiki/Launch-Plan.md",
    summary: "Funny on the outside, disciplined on the inside."
  },
  {
    title: "Community and Content",
    file: "./wiki/Community-and-Content.md",
    summary: "Content loops, community mechanics, and the assets that make the joke travel."
  },
  {
    title: "Risk and Transparency",
    file: "./wiki/Risk-and-Transparency.md",
    summary: "Disclosure standards and the lines the project should not cross."
  },
  {
    title: "FAQ",
    file: "./wiki/FAQ.md",
    summary: "Short answers for the obvious questions people will ask first."
  },
  {
    title: "Glossary",
    file: "./wiki/Glossary.md",
    summary: "Plain-language definitions for the terms people pretend everyone knows."
  },
  {
    title: "Roadmap",
    file: "./wiki/Roadmap.md",
    summary: "A narrow roadmap that only contains things worth saying out loud."
  }
];

const featuredArticles = [
  {
    title: "Brand and Lore",
    file: "./wiki/Brand-and-Lore.md",
    tag: "Identity Engine",
    summary: "The page that explains why the monkey reads instantly and why the hat is not optional.",
    bullets: [
      "Voice and taglines that can survive repost culture",
      "A lore model that stays thin instead of turning into nonsense",
      "Visual rules for making the meme repeatable"
    ]
  },
  {
    title: "Tokenomics",
    file: "./wiki/Tokenomics.md",
    tag: "Trust Layer",
    summary: "The page that keeps the project from developing detective-board economics and mystery wallets.",
    bullets: [
      "Simple allocation model",
      "Public controls and permissions checklist",
      "A short list of trust-killing mistakes to avoid"
    ]
  },
  {
    title: "Risk and Transparency",
    file: "./wiki/Risk-and-Transparency.md",
    tag: "Reality Check",
    summary: "The page that draws the line between a funny project and dishonest messaging.",
    bullets: [
      "Plain-language risk statement",
      "Rules for official links and corrections",
      "Messaging that should never ship"
    ]
  }
];

const articleGrid = document.querySelector("#article-grid");
const articleList = document.querySelector("#article-list");
const articleTitle = document.querySelector("#article-title");
const articleContent = document.querySelector("#article-content");
const featureGrid = document.querySelector("#feature-grid");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function inlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inUl = false;
  let inOl = false;
  let inBlockquote = false;

  function closeLists() {
    if (inUl) {
      html += "</ul>";
      inUl = false;
    }
    if (inOl) {
      html += "</ol>";
      inOl = false;
    }
  }

  function closeBlockquote() {
    if (inBlockquote) {
      html += "</blockquote>";
      inBlockquote = false;
    }
  }

  for (const line of lines) {
    if (!line.trim()) {
      closeLists();
      closeBlockquote();
      continue;
    }

    if (line.startsWith("### ")) {
      closeLists();
      closeBlockquote();
      html += `<h3>${inlineMarkdown(line.slice(4))}</h3>`;
      continue;
    }

    if (line.startsWith("## ")) {
      closeLists();
      closeBlockquote();
      html += `<h2>${inlineMarkdown(line.slice(3))}</h2>`;
      continue;
    }

    if (line.startsWith("# ")) {
      closeLists();
      closeBlockquote();
      html += `<h1>${inlineMarkdown(line.slice(2))}</h1>`;
      continue;
    }

    if (line.startsWith("> ")) {
      closeLists();
      if (!inBlockquote) {
        html += "<blockquote>";
        inBlockquote = true;
      }
      html += `<p>${inlineMarkdown(line.slice(2))}</p>`;
      continue;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      closeBlockquote();
      if (!inOl) {
        closeLists();
        html += "<ol>";
        inOl = true;
      }
      html += `<li>${inlineMarkdown(orderedMatch[1])}</li>`;
      continue;
    }

    const unorderedMatch = line.match(/^-\s+(.*)$/);
    if (unorderedMatch) {
      closeBlockquote();
      if (!inUl) {
        closeLists();
        html += "<ul>";
        inUl = true;
      }
      html += `<li>${inlineMarkdown(unorderedMatch[1])}</li>`;
      continue;
    }

    closeLists();
    closeBlockquote();
    html += `<p>${inlineMarkdown(line)}</p>`;
  }

  closeLists();
  closeBlockquote();
  return html;
}

function renderCards() {
  articleGrid.innerHTML = articles
    .map(
      (article) => `
        <article>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <a href="#wiki-browser" data-file="${article.file}">Read article</a>
        </article>
      `
    )
    .join("");

  bindLoadArticleTriggers(articleGrid);
}

function renderFeaturedArticles() {
  featureGrid.innerHTML = featuredArticles
    .map(
      (article) => `
        <article class="feature-panel">
          <span class="feature-panel__tag">${article.tag}</span>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <ul>
            ${article.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
          <div class="feature-panel__actions">
            <a class="button button--solid" href="#wiki-browser" data-file="${article.file}">Open in viewer</a>
            <a class="button button--ghost" href="${article.file}">Read raw markdown</a>
          </div>
        </article>
      `
    )
    .join("");

  bindLoadArticleTriggers(featureGrid);
}

function bindLoadArticleTriggers(container) {
  container.querySelectorAll("[data-file]").forEach((element) => {
    element.addEventListener("click", () => {
      loadArticle(element.dataset.file);
    });
  });
}

function renderList() {
  articleList.innerHTML = articles
    .map(
      (article) => `
        <button type="button" data-file="${article.file}" aria-pressed="false">
          <strong>${article.title}</strong><br />
          <span>${article.summary}</span>
        </button>
      `
    )
    .join("");

  articleList.querySelectorAll("button[data-file]").forEach((button) => {
    button.addEventListener("click", () => {
      loadArticle(button.dataset.file);
    });
  });
}

async function loadArticle(file) {
  articleList.querySelectorAll("button[data-file]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.file === file));
  });

  const current = articles.find((article) => article.file === file);
  articleTitle.textContent = current ? current.title : "Article";
  articleContent.innerHTML = "<p>Loading article...</p>";
  window.history.replaceState({}, "", `#${encodeURIComponent(file)}`);

  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    const markdown = await response.text();
    articleContent.innerHTML = markdownToHtml(markdown);
  } catch (error) {
    articleContent.innerHTML = `<p>Could not load this article. ${escapeHtml(error.message)}</p>`;
  }
}

renderCards();
renderFeaturedArticles();
renderList();

const initialHash = window.location.hash ? decodeURIComponent(window.location.hash.slice(1)) : "";
const initialFile = articles.some((article) => article.file === initialHash)
  ? initialHash
  : "./wiki/Home.md";

loadArticle(initialFile);
