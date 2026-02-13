const template = document.querySelector("#video-diary-entry-template");
const main = document.querySelector("main");

const render = ({ year, month, src }) => {
  const hasMonth = typeof month === "number";
  const date = hasMonth
    ? new Date(year, month - 1, 1)
    : new Date(year, 0, 1);
  const longMonth = date.toLocaleString("default", { month: "long" });
  const title = hasMonth ? `${longMonth} ${year}` : `${year}`;
  const id = hasMonth
    ? `video-${year}-${String(month).padStart(2, "0")}`
    : `video-${year}`;

  // Clone the template and fill in the details
  const clone = template.content.cloneNode(true);
  clone.querySelector("h3").id = id;
  clone.querySelector("h3 a").href = `#${id}`;
  clone.querySelector("h3 a").textContent = title;
  clone.querySelector("iframe").src = src;
  clone.querySelector("iframe").title = title;
  main.appendChild(clone);
};

const videoDiaryEntries = [
  {
    year: 2025,
    src: "https://youtu.be/ZIE79QnTb4E?si=viujxxCoa3-PxKGp",
  },
  {
    year: 2026,
    month: 1,
    src: "https://youtu.be/Mx5q7QuLTFQ?si=H2c8eHvaRz8qhBhv",
  }
];

videoDiaryEntries.forEach(render);
