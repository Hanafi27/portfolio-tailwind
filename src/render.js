const { qs, qsa, icon, iconClass, externalTarget } = window.AppUtils;

function iconBadge(name) {
  return `<div class="icon-badge ${iconClass(name)}">${icon(name)}</div>`;
}

function renderStaticIcons() {
  qsa("[data-icon]").forEach((target) => {
    target.innerHTML = icon(target.dataset.icon);
  });
}

function renderStats() {
  qs("#hero-stats").innerHTML = PortfolioData.stats
    .map(
      (item) => `
        <article class="interactive-card rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-2xl font-bold text-dark dark:text-white">${item.value}</p>
          <p class="text-xs font-semibold uppercase text-secondary">${item.label}</p>
        </article>
      `,
    )
    .join("");
}

function renderExperiences() {
  qs("#experience-grid").innerHTML = PortfolioData.experiences
    .map(
      (item) => `
        <article class="reveal interactive-card rounded-lg bg-white p-6 shadow-sm dark:bg-dark">
          ${iconBadge(item.icon)}
          <p class="mb-2 text-sm font-semibold text-primary">${item.period}</p>
          <h3 class="mb-1 text-xl font-bold text-dark dark:text-white">${item.role}</h3>
          <p class="mb-4 text-sm font-semibold text-slate-500">${item.place}</p>
          <p class="text-secondary">${item.description}</p>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  qs("#project-grid").innerHTML = PortfolioData.projects
    .map(
      (project, index) => `
        <button
          class="project-card reveal interactive-card overflow-hidden rounded-lg border border-slate-200 bg-white text-left dark:border-slate-700 dark:bg-dark"
          type="button"
          data-project-index="${index}"
        >
          <img src="${project.image}" alt="Template gambar ${project.title}" class="project-thumb" />
          <div class="p-6">
            ${iconBadge(project.icon)}
            <p class="mb-2 text-sm font-semibold text-primary">${project.period}</p>
            <h3 class="mb-3 text-xl font-bold text-dark dark:text-white">${project.title}</h3>
            <p class="mb-4 text-secondary">${project.summary}</p>
            <span class="text-sm font-semibold text-primary">${project.role}</span>
          </div>
        </button>
      `,
    )
    .join("");
}

function renderSkills() {
  qs("#skill-grid").innerHTML = PortfolioData.hardSkills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <div class="skill-icon">${icon(skill.icon)}</div>
          <div>
            <h3 class="font-bold text-dark dark:text-white">${skill.name}</h3>
            <p class="text-sm text-secondary">${skill.group}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderContacts() {
  qs("#contact-grid").innerHTML = PortfolioData.contacts
    .map(
      (contact) => `
        <a href="${contact.href}" target="${externalTarget(contact.href)}" class="interactive-card rounded-lg border border-slate-200 p-5 transition hover:border-primary dark:border-slate-700">
          ${iconBadge(contact.icon)}
          <p class="text-sm font-semibold text-primary">${contact.label}</p>
          <p class="break-words font-medium text-dark dark:text-white">${contact.value}</p>
        </a>
      `,
    )
    .join("");
}

window.PortfolioRender = {
  renderPage() {
    renderStaticIcons();
    renderStats();
    renderExperiences();
    renderProjects();
    renderSkills();
    renderContacts();
    renderStaticIcons();
  },
};
