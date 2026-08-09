document.addEventListener("DOMContentLoaded", () => {
  AppUtils.qs("#app").innerHTML = [
    LayoutTemplate.header(),
    LayoutTemplate.main(),
    LayoutTemplate.footer(),
  ].join("");
  AppUtils.qs("#modal-root").innerHTML = ProjectModalTemplate.shell();
  AppUtils.qs("#floating-actions").innerHTML = LayoutTemplate.backToTop();

  PortfolioRender.renderPage();
  PortfolioInteractions.initNavigation();
  PortfolioInteractions.initDarkMode();
  PortfolioInteractions.initTypewriter();
  PortfolioInteractions.initProjectModal();
  PortfolioInteractions.initReveal();
});
