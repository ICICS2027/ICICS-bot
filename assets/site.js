const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");
const config = window.ICICS_SITE_CONFIG || {};

document.querySelectorAll("[data-field]").forEach((element) => {
  const key = element.dataset.field;
  if (config[key]) element.textContent = config[key];
});

document.querySelectorAll("[data-config-href]").forEach((element) => {
  const url = config[element.dataset.configHref];
  if (!url) return;
  element.href = url;
  element.target = "_blank";
  element.rel = "noreferrer";
  element.classList.remove("button-disabled");
  element.removeAttribute("aria-disabled");
  element.textContent = "Open submission portal ↗";
});

document.querySelectorAll("[data-config-mail]").forEach((element) => {
  const email = config[element.dataset.configMail];
  if (!email) return;
  element.href = `mailto:${email}`;
  element.removeAttribute("aria-disabled");
  element.textContent = email;
});

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navigation?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  navigation.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  navigation?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

const navLinks = [...document.querySelectorAll(".site-nav a")];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-25% 0px -60%", threshold: [0, 0.15, 0.4] },
  );
  observedSections.forEach((section) => observer.observe(section));
}
