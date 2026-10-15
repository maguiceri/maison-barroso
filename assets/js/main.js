/* =========================================================
   MAISON BARROSO — interactions & scroll choreography
   ========================================================= */

// ⬇︎ Cristina's WhatsApp number, international format, digits only
const WHATSAPP = "34600000000";

const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* ---------- Content: lifestyle collections ---------- */
const COLLECTIONS = [
  {
    id: "sea", n: "01", name: "The Sea Collection", short: "Sea",
    script: "for slow mornings by the water",
    areas: "Los Monteros · Golden Mile · Guadalmina Baja",
    homes: 9, img: "assets/img/c-sea.jpg",
    intro: "Beachfront and frontline homes where the day starts with a swim and ends with the sound of the sea.",
    props: [
      { ref: "MB-SEA-01", name: "Villa Azahar", area: "Los Monteros", beds: 5, baths: 6, m2: 620, price: "€6,950,000", img: "assets/img/p-sea1.jpg" },
      { ref: "MB-SEA-02", name: "Casa Brisa", area: "Golden Mile", beds: 4, baths: 4, m2: 410, price: "€4,250,000", img: "assets/img/p-sea2.jpg" },
      { ref: "MB-SEA-03", name: "Villa Orilla", area: "Guadalmina Baja", beds: 6, baths: 7, m2: 780, price: "Price on request", img: "assets/img/p-sea3.jpg" },
    ],
  },
  {
    id: "golf", n: "02", name: "The Golf Valley Collection", short: "Golf Valley",
    script: "for early tee times & long lunches",
    areas: "Nueva Andalucía · Las Brisas · Aloha",
    homes: 7, img: "assets/img/c-golf.jpg",
    intro: "Light-filled villas on the fairways of Nueva Andalucía, minutes from Puerto Banús.",
    props: [
      { ref: "MB-GLF-01", name: "Villa Las Brisas", area: "Nueva Andalucía", beds: 5, baths: 5, m2: 540, price: "€3,950,000", img: "assets/img/p-golf1.jpg" },
      { ref: "MB-GLF-02", name: "Casa del Green", area: "Los Naranjos", beds: 4, baths: 4, m2: 430, price: "€2,850,000", img: "assets/img/p-golf2.jpg" },
      { ref: "MB-GLF-03", name: "Villa Aloha", area: "Aloha Golf", beds: 6, baths: 6, m2: 690, price: "€5,400,000", img: "assets/img/p-golf3.jpg" },
    ],
  },
  {
    id: "hills", n: "03", name: "The Hills Collection", short: "Hills",
    script: "for privacy with a view",
    areas: "La Zagaleta · Sierra Blanca · El Madroñal",
    homes: 6, img: "assets/img/c-hills.jpg",
    intro: "Gated estates above the coast — total privacy, and the sea and Africa on the horizon.",
    props: [
      { ref: "MB-HLS-01", name: "Villa Altura", area: "La Zagaleta", beds: 7, baths: 9, m2: 1250, price: "Price on request", img: "assets/img/p-hills1.jpg" },
      { ref: "MB-HLS-02", name: "Casa Sierra", area: "Sierra Blanca", beds: 6, baths: 7, m2: 980, price: "€8,900,000", img: "assets/img/p-hills2.jpg" },
      { ref: "MB-HLS-03", name: "Villa Mirador", area: "El Madroñal", beds: 5, baths: 5, m2: 610, price: "€4,700,000", img: "assets/img/p-hills3.jpg" },
    ],
  },
  {
    id: "old", n: "04", name: "The Old Town Collection", short: "Old Town",
    script: "for whitewashed streets & plazas",
    areas: "Casco Antiguo · Plaza de los Naranjos",
    homes: 5, img: "assets/img/c-oldtown.jpg",
    intro: "Restored townhouses with patios and roof terraces, a short walk from everything.",
    props: [
      { ref: "MB-OLD-01", name: "Casa Naranjo", area: "Casco Antiguo", beds: 4, baths: 3, m2: 290, price: "€1,650,000", img: "assets/img/p-old1.jpg" },
      { ref: "MB-OLD-02", name: "Casa Cal", area: "Old Town", beds: 3, baths: 3, m2: 210, price: "€1,195,000", img: "assets/img/p-old2.jpg" },
      { ref: "MB-OLD-03", name: "Palacete Encarnación", area: "Old Town", beds: 6, baths: 5, m2: 520, price: "Price on request", img: "assets/img/p-old3.jpg" },
    ],
  },
  {
    id: "family", n: "05", name: "The Family Collection", short: "Family",
    script: "for gardens, schools & Sunday lunches",
    areas: "El Paraíso · Guadalmina Alta · Atalaya",
    homes: 8, img: "assets/img/c-family.jpg",
    intro: "Safe, green neighbourhoods close to the international schools — room to grow, and to host.",
    props: [
      { ref: "MB-FAM-01", name: "Villa Jardín", area: "El Paraíso", beds: 5, baths: 5, m2: 480, price: "€2,950,000", img: "assets/img/p-fam1.jpg" },
      { ref: "MB-FAM-02", name: "Casa Olivo", area: "Guadalmina Alta", beds: 5, baths: 4, m2: 450, price: "€3,450,000", img: "assets/img/p-fam2.jpg" },
      { ref: "MB-FAM-03", name: "Villa Cedro", area: "Atalaya", beds: 4, baths: 4, m2: 380, price: "€2,250,000", img: "assets/img/p-fam3.jpg" },
    ],
  },
  {
    id: "lock", n: "06", name: "The Lock & Leave Collection", short: "Lock & Leave",
    script: "for those who come & go",
    areas: "Puerto Banús · Sierra Blanca · Golden Mile",
    homes: 7, img: "assets/img/c-lock.jpg",
    intro: "Penthouses and apartments with concierge and security — close the door, and know it's cared for.",
    props: [
      { ref: "MB-LCK-01", name: "Penthouse Horizonte", area: "Puerto Banús", beds: 3, baths: 3, m2: 260, price: "€3,200,000", img: "assets/img/p-lock1.jpg" },
      { ref: "MB-LCK-02", name: "Apartment Lumière", area: "Sierra Blanca", beds: 3, baths: 3, m2: 190, price: "€2,100,000", img: "assets/img/p-lock2.jpg" },
      { ref: "MB-LCK-03", name: "Penthouse Alba", area: "Golden Mile", beds: 4, baths: 4, m2: 340, price: "€4,600,000", img: "assets/img/p-lock3.jpg" },
    ],
  },
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>';

/* ---------- WhatsApp links ---------- */
function wireWhatsApp(root = document) {
  $$("[data-wa]", root).forEach((a) => {
    a.href = waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* ---------- Render collections, picks, form chips ---------- */
const track = $("#colsTrack");
const SIZES = ["l", "m", "s", "l", "s", "m"];
track.innerHTML = COLLECTIONS.map((c, i) => `
  <div class="col-slot is-${SIZES[i]}">
    <span class="col-slot__label">${c.areas.split(" · ")[0]}</span>
    <button class="col-card" data-col="${c.id}" aria-label="${c.name}: view selection">
      <span class="col-card__img"><img src="${c.img}" alt="" loading="lazy"></span>
      <span class="col-card__num">${c.n}</span>
      <span class="col-card__count">${c.homes} homes</span>
      <span class="col-card__body">
        <span class="col-card__script">${c.script}</span>
        <span class="col-card__title">${c.name.replace("The ", "").replace(" Collection", "")}</span>
        <span class="col-card__areas">${c.areas}</span>
        <span class="col-card__cta">View selection</span>
      </span>
    </button>
  </div>`).join("");

$("#picksTabs").innerHTML = COLLECTIONS.map((c) =>
  `<button class="tab" role="tab" data-col="${c.id}" aria-selected="false">${c.short}</button>`).join("");

$("#formCollections").innerHTML = COLLECTIONS.map((c) =>
  `<button type="button" class="chip" data-v="${c.name}">${c.short}</button>`).join("") +
  `<button type="button" class="chip is-on" data-v="">Not sure yet</button>`;

let currentCol = null;
function renderPicks(id, animate = true) {
  const c = COLLECTIONS.find((x) => x.id === id);
  if (!c || id === currentCol) return;
  currentCol = id;

  $$(".tab").forEach((t) => {
    const on = t.dataset.col === id;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", on);
  });
  $$(".col-card").forEach((t) => t.classList.toggle("is-active", t.dataset.col === id));

  $("#picksIntro").innerHTML = `<p class="script">${c.script}</p><p>${c.intro}</p>`;
  $("#picksGrid").innerHTML = c.props.map((p) => `
    <article class="prop">
      <div class="prop__img">
        <img src="${p.img}" alt="${p.name}, ${p.area}" loading="lazy">
        <span class="prop__tag">${c.short}</span>
        <span class="prop__ref">${p.ref}</span>
      </div>
      <div class="prop__body">
        <p class="prop__area">${p.area}, Marbella</p>
        <h3 class="prop__name">${p.name}</h3>
        <p class="prop__specs"><span>${p.beds} bedrooms</span><span>${p.baths} baths</span><span>${p.m2.toLocaleString("en")} m²</span></p>
        <div class="prop__foot">
          <span class="prop__price">${p.price}</span>
          <a class="prop__cta" href="#" data-wa="Hello Cristina, I'd love to receive the dossier for ${p.name} (${p.ref}) in ${p.area}.">${WA_ICON}Request dossier</a>
        </div>
      </div>
    </article>`).join("");

  const more = c.homes - c.props.length;
  $("#picksMore").innerHTML = `
    <p><strong>${more} more homes</strong> in ${c.name.replace("The ", "the ")} — plus off-market properties I can only share privately.</p>
    <a href="#" class="btn btn--wa" data-wa="Hello Cristina, could you send me the full ${c.name}? I'm interested in the ${c.short.toLowerCase()} lifestyle.">${WA_ICON.replace("<svg", '<svg class="ico"')}Receive the full collection</a>`;

  wireWhatsApp($("#picks"));

  if (animate && window.gsap && !document.documentElement.classList.contains("no-anim")) {
    gsap.fromTo([".picks__intro", ...$$(".prop"), "#picksMore"],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", stagger: 0.08 });
  }
}
renderPicks("sea", false);

$("#picksTabs").addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (b) renderPicks(b.dataset.col);
});
track.addEventListener("click", (e) => {
  const b = e.target.closest(".col-card");
  if (!b) return;
  renderPicks(b.dataset.col);
  scrollToEl($("#picks"));
});

/* ---------- WhatsApp form ---------- */
$$("#waForm .chips").forEach((group) => {
  group.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    $$(".chip", group).forEach((c) => c.classList.toggle("is-on", c === chip));
  });
});
$("#waForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const pick = (g) => $(`[data-group="${g}"] .is-on`)?.dataset.v || "";
  const name = e.target.name.value.trim();
  const collection = pick("collection");
  let msg = `Hello Cristina!${name ? ` My name is ${name}.` : ""} I'm interested in ${pick("interest")}`;
  if (collection) msg += ` — ${collection}`;
  msg += `, ${pick("timing")}. Could we talk?`;
  window.open(waLink(msg), "_blank", "noopener");
});

wireWhatsApp();
$(".js-phone").textContent = "+" + WHATSAPP.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
$("#year").textContent = new Date().getFullYear();

/* ---------- Mobile menu ---------- */
const burger = $(".header__burger");
const menu = $("#menu");
function setMenu(open) {
  burger.setAttribute("aria-expanded", open);
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", !open);
  open ? lenis?.stop() : lenis?.start();
}
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));

/* ---------- Smooth scrolling + anchors ---------- */
let lenis = null;
function scrollToEl(el) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || a.hasAttribute("data-wa")) return;
  const id = a.getAttribute("href");
  if (id.length < 2) return;
  e.preventDefault();
  setMenu(false);
  if (id === "#top") return lenis ? lenis.scrollTo(0) : scrollTo({ top: 0, behavior: "smooth" });
  scrollToEl($(id));
});

/* =========================================================
   MOTION
   ========================================================= */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = $("#header");
const fab = $("#fab");

if (reduce || !window.gsap || !window.ScrollTrigger) {
  document.documentElement.classList.add("no-anim");
  header.classList.add("is-visible", "is-solid");
  fab.classList.add("is-visible");
} else {
  gsap.registerPlugin(ScrollTrigger);

  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  initIntro();
  initSplits();
  initReveals();
  initMarquees();
  initManifesto();
  initCollections();
  initServiceCards();
  initCounters();
  initStack();
  ScrollTrigger.sort();

  window.addEventListener("load", () => ScrollTrigger.refresh());
}

/* ---------- Intro: the envelope opens ---------- */
function initIntro() {
  const envWrap = $(".env-wrap");
  const env = $("#env");
  const flap = $(".env__flap");
  const flapBack = $(".env__flap-back");
  const letter = $("#letter");
  const sheet = $("#sheet");
  const pin = $(".intro__pin");

  // Entrance — the envelope arrives
  gsap.timeline({ delay: 0.15 })
    .from(".intro__glow", { opacity: 0, scale: 0.6, duration: 2.4, ease: "power2.out" }, 0)
    .fromTo(env,
      { opacity: 0, scale: 0.82, y: 90, rotate: -5, filter: "blur(16px) drop-shadow(0px 40px 60px rgba(10,0,2,0))" },
      { opacity: 1, scale: 1, y: 0, rotate: 0, filter: "blur(0px) drop-shadow(0px 40px 60px rgba(10,0,2,0.55))", duration: 2.2, ease: "expo.out" }, 0.1)
    .from(".intro__kicker", { opacity: 0, y: -16, letterSpacing: "0.6em", duration: 1.6, ease: "expo.out" }, 0.9)
    .from(".intro__hint", { opacity: 0, y: 16, duration: 1.2, ease: "expo.out" }, 1.3)
    .add(() => gsap.to(env, { y: -10, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 }));

  // Where the sheet starts: the visible part of the risen letter
  const start = { t: 0, r: 0, b: 0, l: 0 };
  const proxy = { p: 0 };
  // …and where the letter's logo sits, so the hero logo can start right on top of it
  const sheetLogo = $(".sheet__logo");
  const flip = { x: 0, y: 0, s: 1 };
  const applyClip = () => {
    const k = 1 - proxy.p;
    sheet.style.clipPath = `inset(${start.t * k}px ${start.r * k}px ${start.b * k}px ${start.l * k}px)`;
    sheetLogo.style.transform = `translate(${flip.x * k}px, ${flip.y * k}px) scale(${1 + (flip.s - 1) * k})`;
  };

  const tl = gsap.timeline({ defaults: { ease: "none" } });
  tl.to([".intro__hint", ".intro__kicker"], { opacity: 0, y: -20, duration: 0.5 }, 0)
    .to(envWrap, { rotate: 11.35, scale: 0.8, yPercent: 16, duration: 1.1, ease: "power2.inOut" }, 0)
    .to(flap, { "--flap": "180deg", duration: 1.2, ease: "power1.inOut" }, 0.8)
    .set(flapBack, { opacity: 1 }, 1.4)
    .set(flap, { className: "env__flap is-behind" }, 1.4)
    .to(letter, { yPercent: -80, duration: 1.1, ease: "power2.inOut" }, 1.7)
    .addLabel("unfold", 2.8)
    // the letter becomes the page: the sheet takes its exact place…
    .to(letter, { boxShadow: "0 0px 0px rgba(30, 2, 6, 0)", duration: 0.2 }, "unfold-=0.2")
    .set(sheet, { visibility: "visible" }, "unfold")
    .set(letter, { visibility: "hidden" }, "unfold+=0.01")
    // …the logo is written on it while it opens up into the website
    .add(writeLogo(), "unfold+=0.05")
    .to(proxy, { p: 1, duration: 1.7, ease: "power2.inOut", onUpdate: applyClip }, "unfold+=0.25")
    .to(".intro__glow", { opacity: 0, duration: 1 }, "unfold")
    .from(".sheet__inner > *:not(.sheet__logo)", { opacity: 0, y: 40, stagger: 0.08, duration: 0.6, ease: "power2.out" }, "unfold+=1.2")
    .from(".sheet__flower", { opacity: 0, rotate: "-=40", scale: 0.8, duration: 1.1, ease: "power2.out" }, "unfold+=1")
    .to({}, { duration: 0.3 });

  // the logo is written one pen stroke at a time, at a steady hand speed
  function writeLogo() {
    const pens = $$(".pen", sheet);
    pens.forEach((p) => p.setAttribute("pathLength", 1));
    const lengths = pens.map((p) => p.getTotalLength());
    const total = lengths.reduce((a, b) => a + b, 0);
    const write = gsap.timeline();
    pens.forEach((p, i) => {
      write.to(p, { strokeDashoffset: 0, duration: Math.max(0.06, (lengths[i] / total) * 1.7), ease: "none" }, i ? "+=0.03" : 0);
    });
    return write;
  }

  // the logo starts centred on the letter and travels to its place in the hero
  const measure = () => {
    const saved = tl.progress();
    tl.progress(tl.labels.unfold / tl.duration());
    const P = pin.getBoundingClientRect();
    const L = letter.getBoundingClientRect();
    start.t = L.top - P.top;
    start.l = L.left - P.left;
    start.r = P.right - L.right;
    start.b = P.bottom - L.bottom;
    const inner = $(".sheet__inner");
    const innerTransform = inner.style.transform;
    inner.style.transform = "none";
    sheetLogo.style.transform = "none";
    const to = sheetLogo.getBoundingClientRect();
    inner.style.transform = innerTransform;
    const w = L.width * 0.62;
    const h = w * (to.height / to.width);
    flip.x = L.left + (L.width - w) / 2 - to.left;
    flip.y = L.top + (L.height - h) / 2 - to.top;
    flip.s = w / to.width;
    tl.progress(saved);
    applyClip();
  };

  // the intro runs over 3 screens of scroll, then stays put while Founder slides over it
  const intro = $("#intro");
  const D = () => window.innerHeight * 3;
  const sizeIntro = () => (intro.style.height = D() + window.innerHeight + "px");
  sizeIntro();
  ScrollTrigger.addEventListener("refreshInit", sizeIntro);

  ScrollTrigger.create({
    trigger: intro, start: "top top", end: () => "+=" + (D() + window.innerHeight),
    pin: pin, pinSpacing: false, anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 3,
  });
  const st = ScrollTrigger.create({
    trigger: intro,
    start: "top top",
    end: () => "+=" + D(),
    scrub: 1,
    animation: tl,
    onRefresh: measure,
    onUpdate: (self) => {
      const p = self.progress;
      header.classList.toggle("is-visible", p > 0.8);
      header.classList.toggle("on-paper", p > 0.8);
      fab.classList.toggle("is-visible", p > 0.9);
    },
  });
  measure();

  // the hero recedes as Founder covers it
  const shade = document.createElement("span");
  shade.className = "stack-shade";
  sheet.appendChild(shade);
  gsap.timeline({
    scrollTrigger: { start: () => st.end, end: () => st.end + window.innerHeight, scrub: true, invalidateOnRefresh: true },
  })
    .to(shade, { opacity: 1, ease: "none" }, 0)
    .to(".sheet__inner", { scale: 0.92, yPercent: -6, ease: "none" }, 0);

  // after the hero: solid header, WhatsApp button stays
  ScrollTrigger.create({
    start: () => st.end + window.innerHeight * 0.6,
    end: "max",
    onToggle: (self) => {
      header.classList.toggle("is-solid", self.isActive);
      if (self.isActive) { header.classList.add("is-visible"); fab.classList.add("is-visible"); }
    },
  });
}

/* ---------- Stacked screens: each section holds while the next slides over it ---------- */
function initStack() {
  const sections = $$("main > section").filter((s) => s.id !== "intro");
  sections.forEach((sec, i) => {
    sec.classList.add("stack");
    sec.style.zIndex = i + 2;
    if (i === sections.length - 1) return;          // the last one is covered by the footer as normal
    if (sec.contains($(".cols-stage"))) return;      // holds its own pinned carousel: pinning it again would break that pin
    const shade = document.createElement("span");
    shade.className = "stack-shade";
    sec.appendChild(shade);
    const kids = [...sec.children].filter((k) => k !== shade);
    const tall = () => sec.offsetHeight > window.innerHeight;
    // sections at/after the collections carousel must be measured after its pin adds its scroll space
    const cols = $(".cols-stage");
    const afterCols = sec.contains(cols) || !!(sec.compareDocumentPosition(cols) & Node.DOCUMENT_POSITION_PRECEDING);
    gsap.timeline({
      scrollTrigger: {
        trigger: sec,
        start: () => (tall() ? "bottom bottom" : "top top"),
        end: () => "+=" + window.innerHeight,
        pin: true, pinSpacing: false, scrub: true, invalidateOnRefresh: true,
        refreshPriority: afterCols ? -1 : 2,
      },
    })
      .to(shade, { opacity: 1, ease: "none" }, 0)
      .to(kids, { y: () => -window.innerHeight * 0.08, scale: 0.96, transformOrigin: "50% 100%", ease: "none" }, 0);
  });
}

/* ---------- Split headings into characters ---------- */
function initSplits() {
  $$("[data-split]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute("aria-label", el.textContent.trim());
    el.innerHTML = words.map((w) =>
      `<span class="split-line" style="display:inline-block" aria-hidden="true">${[...w].map((ch) => `<span class="split-char">${ch}</span>`).join("")}</span>`
    ).join(" ");
    const chars = $$(".split-char", el);
    gsap.from(chars, {
      yPercent: 115, rotate: 6, opacity: 0, ease: "power2.out", stagger: 0.04,
      scrollTrigger: { trigger: el, start: "top 95%", end: "top 55%", scrub: 0.8 },
    });
    // letters keep breathing as you scroll past
    gsap.fromTo(el, { letterSpacing: "0.12em" }, {
      letterSpacing: "0.01em", ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}

/* ---------- Reveals & parallax ---------- */
function initReveals() {
  $$("[data-fade]").forEach((el) => {
    gsap.from(el, {
      y: 50, opacity: 0, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 96%", end: "top 72%", scrub: 0.8 },
    });
  });

  $$("[data-stagger]").forEach((el) => {
    gsap.from(el.children, {
      y: 60, opacity: 0, ease: "power2.out", stagger: 0.15,
      scrollTrigger: { trigger: el, start: "top 96%", end: "top 65%", scrub: 0.8 },
    });
  });

  $$("[data-reveal]").forEach((el) => {
    const img = $("img", el);
    gsap.timeline({ scrollTrigger: { trigger: el, start: "top 95%", end: "top 35%", scrub: 0.8 } })
      .fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" })
      .from(img, { scale: 1.35, duration: 1.2, ease: "power2.out" }, 0);
  });

  $$("[data-parallax-img]").forEach((img) => {
    gsap.fromTo(img, { yPercent: -7 }, {
      yPercent: 7, ease: "none",
      scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  $$("[data-speed]").forEach((el) => {
    const s = parseFloat(el.dataset.speed);
    gsap.fromTo(el, { y: () => -s * 300 }, {
      y: () => s * 300, ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
    });
  });

  // decorative flowers turn slowly with the scroll
  gsap.to(".manifesto__flower", {
    rotate: 50, ease: "none",
    scrollTrigger: { trigger: ".manifesto", start: "top bottom", end: "bottom top", scrub: true },
  });

}

/* ---------- Marquees ---------- */
function initMarquees() {
  $$("[data-marquee]").forEach((row) => {
    const dir = parseFloat(row.dataset.marquee);
    const tween = gsap.fromTo(row, { xPercent: dir < 0 ? 0 : -50 }, {
      xPercent: dir < 0 ? -50 : 0, duration: 46, ease: "none", repeat: -1,
    });
    ScrollTrigger.create({
      trigger: row, start: "top bottom", end: "bottom top",
      onUpdate: (self) => {
        const v = Math.min(6, 1 + Math.abs(self.getVelocity()) / 250);
        gsap.to(tween, { timeScale: v, duration: 0.2, overwrite: true });
        gsap.to(tween, { timeScale: 1, duration: 1.2, delay: 0.2, ease: "power2.out" });
      },
    });
  });

  $$("[data-marquee-scrub]").forEach((el) => {
    const dir = parseFloat(el.dataset.marqueeScrub);
    // a gentle sideways drift that never pushes the words off screen
    const room = () => Math.max(0, (window.innerWidth - el.offsetWidth) / 2 - 16);
    gsap.fromTo(el, { x: () => room() * dir }, {
      x: () => -room() * dir, ease: "none", invalidateOnRefresh: true,
      scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}

/* ---------- Manifesto: words light up ---------- */
function initManifesto() {
  const el = $("[data-words]");
  el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");
  gsap.to($$(".w", el), {
    opacity: 1, stagger: 0.1, ease: "none",
    scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 45%", scrub: true },
  });
}

/* ---------- Collections: cards assemble, then travel with the scroll ---------- */
function initCollections() {
  const stage = $(".cols-stage");
  const slots = $$(".col-slot");
  const mm = gsap.matchMedia();

  mm.add("(min-width: 961px)", () => {
    const bg = $(".cols-stage__bg");
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const scatter = [
      { x: -260, y: 340, rotate: -14, scale: 0.55 },
      { x: 160, y: -380, rotate: 11, scale: 0.5 },
      { x: 420, y: 300, rotate: -8, scale: 0.6 },
      { x: 600, y: -260, rotate: 15, scale: 0.5 },
      { x: 700, y: 360, rotate: -12, scale: 0.55 },
      { x: 900, y: -340, rotate: 9, scale: 0.5 },
    ];

    // 1 · while the section arrives, the cards fly in from everywhere and lock into the composition
    const assemble = gsap.timeline({
      scrollTrigger: { trigger: stage, start: "top 95%", end: "top top", scrub: 1 },
    });
    slots.forEach((slot, i) => {
      assemble.fromTo(slot, { ...scatter[i], opacity: 0 },
        { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, i * 0.12);
    });
    assemble.fromTo(bg, { xPercent: 10, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.4, ease: "power2.out" }, 0);

    // 2 · then the screen holds and the carousel travels sideways with the scroll
    const h = gsap.to(track, {
      x: () => -dist(), ease: "none",
      scrollTrigger: {
        trigger: stage, start: "top top", end: () => "+=" + dist() * 1.15,
        pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1, refreshPriority: 1,
        onUpdate: (self) => {
          $("#colsBar").style.transform = `scaleX(${self.progress})`;
          $("#colsNow").textContent = String(Math.min(6, Math.floor(self.progress * 5.999) + 1)).padStart(2, "0");
        },
      },
    });
    // the giant names behind drift the other way
    gsap.fromTo(bg, { x: 0 }, {
      x: () => -dist() * 0.45, ease: "none",
      scrollTrigger: { trigger: stage, start: "top top", end: () => "+=" + dist() * 1.15, scrub: 1, invalidateOnRefresh: true },
    });

    // each card grows as it reaches the centre and settles back as it leaves
    slots.forEach((slot) => {
      const card = $(".col-card", slot);
      gsap.timeline({
        scrollTrigger: { trigger: slot, containerAnimation: h, start: "left right", end: "right left", scrub: true },
      })
        .fromTo(card, { scale: 0.86, rotate: 2 }, { scale: 1.06, rotate: 0, ease: "power1.out", duration: 1 })
        .to(card, { scale: 0.88, rotate: -2, ease: "power1.in", duration: 1 });
      gsap.fromTo($(".col-card__img", slot), { xPercent: -7 }, {
        xPercent: 7, ease: "none",
        scrollTrigger: { trigger: slot, containerAnimation: h, start: "left right", end: "right left", scrub: true },
      });
      gsap.from($$(".col-card__script, .col-card__title, .col-card__areas, .col-card__cta", slot), {
        y: 40, opacity: 0, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: slot, containerAnimation: h, start: "left 85%", end: "left 45%", scrub: true },
      });
    });
  });

  // mobile: the mosaic pieces fly in from alternating sides and click into place
  mm.add("(max-width: 960px)", () => {
    slots.forEach((slot, i) => {
      const fromLeft = slot.classList.contains("is-l") ? i % 2 === 0 : i % 2 === 1;
      gsap.fromTo(slot,
        { x: fromLeft ? -120 : 120, y: 80, rotate: fromLeft ? -8 : 8, scale: 0.8, opacity: 0 },
        {
          x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, ease: "power2.out",
          scrollTrigger: { trigger: slot, start: "top 100%", end: "top 60%", scrub: 0.8 },
        });
      gsap.fromTo($(".col-card__img", slot), { yPercent: -6 }, {
        yPercent: 6, ease: "none",
        scrollTrigger: { trigger: slot, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  });
}

/* ---------- Services: cards rise in, tilt and catch the light ---------- */
function initServiceCards() {
  const cards = $$(".svc-card");
  const tilts = [-6, 0, 6];

  cards.forEach((card, i) => {
    const inner = $(".svc-card__inner", card);
    // arrive from below, slightly turned, and settle as you scroll
    gsap.fromTo(inner,
      { y: 160 + i * 60, rotationZ: tilts[i], rotationX: 18, opacity: 0 },
      {
        y: 0, rotationZ: 0, rotationX: 0, opacity: 1, ease: "power2.out",
        scrollTrigger: { trigger: ".cards", start: "top 95%", end: "top 35%", scrub: 1 },
      });
    // the arch opens like a window
    const st = { trigger: card, start: `top ${92 - i * 4}%`, end: `top ${45 - i * 4}%`, scrub: 0.8 };
    gsap.timeline({ scrollTrigger: st })
      .fromTo($(".svc-card__arch", card), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" }, 0)
      .from($(".svc-card__arch img", card), { scale: 1.4, duration: 1.3, ease: "power2.out" }, 0)
      // text lines follow, one after another
      .from($$(".svc-card__title, .svc-card__script, .svc-card__desc, .svc-card__tags, .svc-card__cta", card),
        { y: 30, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 }, 0.35);
    // the big watermark number drifts against the scroll
    gsap.fromTo($(".svc-card__wm", card), { yPercent: 30 }, {
      yPercent: -30, ease: "none",
      scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  // 3D tilt + light sheen following the mouse
  if (!matchMedia("(hover: hover)").matches) return;
  cards.forEach((card) => {
    const inner = $(".svc-card__inner", card);
    const rx = gsap.quickTo(inner, "rotationX", { duration: 0.7, ease: "power3" });
    const ry = gsap.quickTo(inner, "rotationY", { duration: 0.7, ease: "power3" });
    const lift = gsap.quickTo(inner, "z", { duration: 0.7, ease: "power3" });
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      ry((px - 0.5) * 12);
      rx(-(py - 0.5) * 9);
      inner.style.setProperty("--mx", `${px * 100}%`);
      inner.style.setProperty("--my", `${py * 100}%`);
    });
    card.addEventListener("mouseenter", () => lift(40));
    card.addEventListener("mouseleave", () => { rx(0); ry(0); lift(0); });
  });
}

/* ---------- Counters ---------- */
function initCounters() {
  $$("[data-count]").forEach((el) => {
    const o = { v: 0 };
    gsap.to(o, {
      v: +el.dataset.count, ease: "power1.out",
      onUpdate: () => (el.textContent = Math.round(o.v)),
      scrollTrigger: { trigger: el, start: "top 95%", end: "top 60%", scrub: 0.6 },
    });
  });
}
