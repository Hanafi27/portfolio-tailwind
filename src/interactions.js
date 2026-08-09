function initNavigation() {
  const hamburger = AppUtils.qs("#hamburger");
  const navMenu = AppUtils.qs("#nav-menu");
  const toTop = AppUtils.qs("#to-top");
  const header = AppUtils.qs("header");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  window.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetTop) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
      return;
    }

    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  });
}

function initDarkMode() {
  const toggle = AppUtils.qs("#toggle-dark");
  const html = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkIsActive =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && prefersDark);

  html.classList.toggle("dark", darkIsActive);
  toggle.checked = darkIsActive;

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark", toggle.checked);
    localStorage.theme = toggle.checked ? "dark" : "light";
  });
}

function initTypewriter() {
  const element = AppUtils.qs("#mengetik");
  const textNode = element.childNodes[0];
  const text = textNode.textContent.trim();
  let index = 0;

  textNode.textContent = "";

  function type() {
    if (index >= text.length) return;
    textNode.textContent += text.charAt(index);
    index += 1;
    window.setTimeout(type, 120);
  }

  type();
}

function initProjectModal() {
  AppUtils.qs("#project-grid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-index]");
    if (!card) return;
    ProjectModal.open(
      PortfolioData.projects[Number(card.dataset.projectIndex)],
    );
  });

  AppUtils.qs("#modal-close").addEventListener("click", ProjectModal.close);
  AppUtils.qs("#project-modal").addEventListener("click", (event) => {
    if (event.target.id === "project-modal") ProjectModal.close();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") ProjectModal.close();
  });
}

function initReveal() {
  const revealItems = AppUtils.qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

window.PortfolioInteractions = {
  initNavigation,
  initDarkMode,
  initTypewriter,
  initProjectModal,
  initReveal,
};
