window.ProjectModalTemplate = {
  shell() {
    return `
      <div
        id="project-modal"
        class="fixed inset-0 z-[10000] hidden items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="modal-panel flex h-[calc(100vh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl dark:bg-slate-900">
          <div class="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700">
            <p class="text-sm font-semibold text-primary">Detail Proyek</p>
            <button
              id="modal-close"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-primary hover:text-primary dark:border-slate-700"
              aria-label="Tutup detail proyek"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <div id="modal-content" class="min-h-0 flex-1 p-4"></div>
        </div>
      </div>
    `;
  },

  content(project) {
    return `
      <div class="h-full min-h-0 overflow-hidden">
        <figure class="modal-project-image">
          <img src="${project.image}" alt="Gambar proyek ${project.title}" class="h-full w-full object-contain" />
        </figure>
        <p class="mb-2 text-sm font-semibold text-primary">${project.period}</p>
        <h2 id="modal-title" class="mb-3 text-xl font-bold leading-tight text-dark dark:text-white lg:text-2xl">${project.title}</h2>
        <p class="mb-4 text-sm leading-relaxed text-secondary lg:text-base">${project.summary}</p>
        <h3 class="mb-2 font-semibold text-dark dark:text-white">Pekerjaan</h3>
        <ul class="mb-4 space-y-2 text-sm leading-relaxed text-secondary lg:text-base">
          ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
        <h3 class="mb-2 font-semibold text-dark dark:text-white">Stack</h3>
        <div class="flex flex-wrap gap-2">
          ${project.stack.map((item) => `<span class="stack-chip">${item}</span>`).join("")}
        </div>
      </div>
    `;
  },
};
