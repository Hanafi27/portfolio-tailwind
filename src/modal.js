function openProjectModal(project) {
  const modal = AppUtils.qs("#project-modal");
  const content = AppUtils.qs("#modal-content");

  content.innerHTML = ProjectModalTemplate.content(project);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeProjectModal() {
  const modal = AppUtils.qs("#project-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

window.ProjectModal = {
  open: openProjectModal,
  close: closeProjectModal,
};
