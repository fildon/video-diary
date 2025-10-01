class VideoDiaryEntry extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // Attributes
    const date = new Date(this.getAttribute("date"));
    const src = this.getAttribute("src");

    // Derived state
    const year = date.getFullYear();
    const shortMonth = date.toLocaleString("default", { month: "short" });
    const longMonth = date.toLocaleString("default", { month: "long" });
    const title = `${longMonth} ${year}`;
    const id = `${year}${shortMonth}`;

    this.shadowRoot.innerHTML = `
      <article>
        <h3 id="${id}">
          <a href="#${id}">${title}</a>
        </h3>
        <div class="iframe-container">
          <iframe
            src="${src}"
            title="${title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </article>
      <style>
        article {
          margin-bottom: 20px;
        }

        .iframe-container {
          position: relative;
          height: 0;
          width: min(85vw, 560px);
          /* This is a trick to preserve aspect-ratio on iframes */
          padding-bottom: 56.5%; /* Youtube exports the videos at 560 by 315 = 56.5% */
          overflow: hidden;
          border-radius: 8px;
        }

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }
      </style>
    `;
  }
}

customElements.define("video-diary-entry", VideoDiaryEntry);
