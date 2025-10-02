const template = document.querySelector("#video-diary-entry-template");
const main = document.querySelector("main");

const render = ({ date, src }) => {
    // Derived state
    const year = date.getFullYear();
    const shortMonth = date.toLocaleString("default", { month: "short" });
    const longMonth = date.toLocaleString("default", { month: "long" });
    const title = `${longMonth} ${year}`;
    const id = `${year}${shortMonth}`;

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
    { date: new Date("2025-01"), src: "https://www.youtube.com/embed/bKIL70iP5Nc?si=Xc0D-TvtZ0Dx_WU3" },
    { date: new Date("2025-02"), src: "https://www.youtube.com/embed/lggIn-1yd8Q?si=fmNzsKmeaKYTCAxQ" },
    { date: new Date("2025-03"), src: "https://www.youtube.com/embed/1tHzphoNXXM?si=Qzx7iRUMz7pKr0_-" },
    { date: new Date("2025-04"), src: "https://www.youtube.com/embed/sTchSm6BqQQ?si=FoASemMCdjp9IKFm" },
    { date: new Date("2025-05"), src: "https://www.youtube.com/embed/zfbSivZ_u5Q?si=E6f_tT2rImdNz_BZ" },
    { date: new Date("2025-06"), src: "https://www.youtube.com/embed/-V3wYZhvFFc?si=vf0d2GJXKFaedFIQ" },
    { date: new Date("2025-07"), src: "https://www.youtube.com/embed/Ud6et5IuZoM?si=UVE1j_zdaVTO-AsR" },
    { date: new Date("2025-08"), src: "https://www.youtube.com/embed/tZ-v_yiVtxE?si=I0Xkfe4-Ywgjvf-s" },
    { date: new Date("2025-09"), src: "https://www.youtube.com/embed/rbUynoE2LeY?si=9XECwDBEc5fCaLS-" }
];

videoDiaryEntries.forEach(render);
