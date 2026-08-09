window.AppUtils = {
  qs(selector, scope = document) {
    return scope.querySelector(selector);
  },

  qsa(selector, scope = document) {
    return [...scope.querySelectorAll(selector)];
  },

  icon(name) {
    return PortfolioIcons[name] || PortfolioIcons.code;
  },

  iconClass(name) {
    const themes = {
      code: "icon-theme-code",
      database: "icon-theme-database",
      network: "icon-theme-network",
      chip: "icon-theme-chip",
      sensor: "icon-theme-sensor",
      plc: "icon-theme-plc",
      chart: "icon-theme-chart",
      ticket: "icon-theme-ticket",
      bolt: "icon-theme-bolt",
      briefcase: "icon-theme-briefcase",
      globe: "icon-theme-globe",
      mail: "icon-theme-mail",
      phone: "icon-theme-phone",
      linkedin: "icon-theme-linkedin",
      github: "icon-theme-github",
    };

    return themes[name] || themes.code;
  },

  externalTarget(href) {
    return href.startsWith("http") ? "_blank" : "_self";
  },
};
