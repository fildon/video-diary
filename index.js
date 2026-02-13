const template = document.querySelector("#video-diary-entry-template");
const diaryEntriesSection = document.querySelector("#diary-entries");

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
  diaryEntriesSection.appendChild(clone);
};

const videoDiaryEntries = [
  {
    year: 2025,
    src: "https://www.youtube.com/embed/ZIE79QnTb4E?si=hlGO9f_LiLfSXH1P",
  },
  {
    year: 2026,
    month: 1,
    src: "https://www.youtube.com/embed/Mx5q7QuLTFQ?si=S-y7MN7akxUBpRO1",
  }
];

videoDiaryEntries.forEach(render);
