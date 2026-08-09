window.LayoutTemplate = {
  header() {
    return `
      <header class="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
        <div class="container">
          <div class="relative flex items-center justify-between">
            <a href="#home" class="block px-4 py-6 text-lg font-bold text-primary">Hanafi Ilham</a>
            <div class="flex items-center px-4">
              <button id="hamburger" name="hamburger" class="absolute right-4 block lg:hidden" aria-label="Buka navigasi">
                <span class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span class="hamburger-line transition duration-300 ease-in-out"></span>
                <span class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
              <nav id="nav-menu" class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-400 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
                <ul class="block lg:flex">
                  <li><a class="nav-link" href="#home">Home</a></li>
                  <li><a class="nav-link" href="#about">Profil</a></li>
                  <li><a class="nav-link" href="#portfolio">Proyek</a></li>
                  <li><a class="nav-link" href="#skill">Skill</a></li>
                  <li><a class="nav-link" href="#contact">Kontak</a></li>
                  <li class="mt-3 flex items-center pl-8 lg:mt-0">
                    <div class="flex">
                      <span class="mr-2 text-sm text-slate-500">light</span>
                      <input type="checkbox" class="hidden" id="toggle-dark" />
                      <label for="toggle-dark">
                        <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                          <div class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span class="ml-2 text-sm text-slate-500">dark</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  main() {
    return `
      <main>
        <section id="home" class="pt-36 pb-20 dark:bg-dark">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center justify-center gap-y-10">
              <div class="reveal w-full self-center px-4 lg:w-1/2" dir="ltr">
                <p id="mengetik" class="mb-3 flex flex-col text-base font-semibold text-primary dark:text-white md:text-xl">
                  Halo, saya
                  <span class="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">Hanafi Ilham</span>
                </p>
                <h1 class="mb-4 text-lg font-medium text-slate-500 lg:text-2xl">
                  <span class="text-dark dark:text-white">Industrial IoT & Applied ML</span>
                  | Embedded Systems | Software Integration
                </h1>
                <p class="mb-6 max-w-xl text-base font-medium leading-relaxed text-slate-500 dark:text-slate-300">
                  Saya membangun intelligent industrial systems dengan menggabungkan IoT, data analysis, machine learning, dan software integration, dengan pengembangan lanjutan ke PLC dan industrial automation.
                </p>
                <div class="flex flex-wrap gap-3">
                  <a href="mailto:hanafiilham333@gmail.com" class="btn-primary">
                    <span class="btn-icon" data-icon="mail"></span>
                    Hubungi Saya
                  </a>
                  <a href="https://github.com/Hanafi27" target="_blank" class="btn-outline">
                    <span class="btn-icon" data-icon="github"></span>
                    GitHub
                  </a>
                </div>
                <div id="hero-stats" class="mt-8 grid max-w-lg grid-cols-3 gap-3"></div>
              </div>
              <div class="reveal flex w-full justify-center px-4 lg:w-1/3">
                <figure class="profile-frame float-soft relative mt-4 overflow-hidden rounded-lg shadow-lg">
                  <img src="img/img.jpeg" alt="Foto Hanafi Ilham" class="h-full w-full object-cover object-top" />
                  <figcaption class="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-3 shadow-sm backdrop-blur dark:bg-dark/90">
                    <div class="mb-2 h-1 rounded-full animated-line"></div>
                    <p class="text-sm font-semibold text-dark dark:text-white">IoT, ML, Industrial Systems</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="pt-24 pb-24 dark:bg-dark">
          <div class="container">
            <div class="flex flex-wrap gap-y-10">
              <div class="reveal w-full px-4 lg:w-1/2">
                <p class="section-label">Profil</p>
                <h2 class="section-title max-w-xl">Berfokus pada Industrial IoT, Embedded Systems, Data Analysis, Applied Machine Learning, dan System Integration.</h2>
                <p class="max-w-xl text-base font-medium leading-relaxed text-secondary lg:text-lg">
                  Arah karier saya adalah membangun sistem industri cerdas yang menghubungkan sensor, data, model prediktif, API, dan dashboard web. Area pengembangan berikutnya adalah PLC dan industrial automation.
                </p>
              </div>
              <div class="reveal w-full px-4 lg:w-1/2">
                <p class="section-label">Pendidikan</p>
                <h3 class="mb-4 text-2xl font-semibold text-dark dark:text-white lg:text-3xl">Telkom University Purwokerto</h3>
                <p class="mb-6 text-base font-medium leading-relaxed text-secondary lg:text-lg">
                  Program studi Sistem Informasi dengan fondasi teknis pada ESP32, sensor integration, ANFIS, KNN, Computer Vision, Python, REST API, Laravel, MySQL, dan web application development.
                </p>
                <div class="grid gap-3 sm:grid-cols-2">
                  <article class="info-card">
                    <div class="icon-badge icon-theme-code" data-icon="code"></div>
                    <h4 class="font-semibold text-dark dark:text-white">Web Development</h4>
                    <p class="text-sm text-secondary">Laravel, PHP, MySQL, REST API, Node.js, Express.</p>
                  </article>
                  <article class="info-card">
                    <div class="icon-badge icon-theme-network" data-icon="network"></div>
                    <h4 class="font-semibold text-dark dark:text-white">Network & IoT</h4>
                    <p class="text-sm text-secondary">ESP32, sensor integration, ANFIS, KNN, Computer Vision.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-slate-100 pt-24 pb-20 dark:bg-slate-800">
          <div class="container">
            <div class="reveal section-heading">
              <p class="section-label">Pengalaman</p>
              <h2 class="section-title">Pengalaman Kerja</h2>
            </div>
            <div id="experience-grid" class="grid gap-6 px-4 lg:grid-cols-3"></div>
          </div>
        </section>

        <section id="portfolio" class="pt-24 pb-20 dark:bg-dark">
          <div class="container">
            <div class="reveal section-heading">
              <p class="section-label">Portfolio</p>
              <h2 class="section-title">Proyek Pilihan</h2>
              <p class="mx-auto max-w-2xl text-base font-medium text-secondary">
                Klik salah satu proyek untuk melihat detail, stack, dan template gambar yang bisa diganti dengan screenshot asli.
              </p>
            </div>
            <div id="project-grid" class="grid gap-6 px-4 md:grid-cols-2 xl:grid-cols-3"></div>
          </div>
        </section>

        <section id="skill" class="bg-slate-100 pt-24 pb-24 dark:bg-slate-800">
          <div class="container mx-auto">
            <div class="reveal section-heading">
              <p class="section-label">Technical Foundation</p>
              <h2 class="section-title">Tools, Data, IoT, dan Software</h2>
            </div>
            <div id="skill-grid" class="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"></div>
            <div class="reveal mt-10 grid gap-6 px-4 lg:grid-cols-2">
              <article class="info-card bg-white dark:bg-dark">
                <div class="icon-badge icon-theme-briefcase" data-icon="briefcase"></div>
                <h3 class="mb-3 text-xl font-bold text-dark dark:text-white">Soft Skill</h3>
                <p class="text-secondary">Komunikasi yang baik, manajemen waktu, pemecahan masalah, dan adaptasi terhadap hal baru.</p>
              </article>
              <article class="info-card bg-white dark:bg-dark">
                <div class="icon-badge icon-theme-network" data-icon="network"></div>
                <h3 class="mb-3 text-xl font-bold text-dark dark:text-white">Sertifikasi</h3>
                <ul class="space-y-2 text-secondary">
                  <li>Computer and Network Engineering, Bandung Consultant.</li>
                  <li>Fullstack Web Developer, Codepolitan.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" class="pt-24 pb-24 dark:bg-dark">
          <div class="container">
            <div class="reveal mx-auto max-w-3xl px-4 text-center">
              <p class="section-label">Kontak</p>
              <h2 class="section-title">Mari terhubung</h2>
              <p class="mb-8 text-base font-medium text-secondary md:text-lg">
                Hubungi saya untuk peluang magang, proyek web, jaringan, IoT, atau diskusi teknologi.
              </p>
              <div id="contact-grid" class="grid gap-4 text-left md:grid-cols-2"></div>
            </div>
          </div>
        </section>
      </main>
    `;
  },

  footer() {
    return `
      <footer class="footer-panel relative overflow-hidden bg-slate-950 pt-16 pb-10">
        <div class="container relative z-10">
          <div class="grid gap-10 px-4 md:grid-cols-3">
            <div>
              <h2 class="mb-3 text-2xl font-bold text-white">Hanafi Ilham</h2>
              <p class="max-w-sm text-slate-400">Membangun intelligent industrial systems melalui IoT, data, machine learning, dan software integration.</p>
            </div>
            <div>
              <h3 class="mb-4 text-lg font-semibold text-white">Kategori</h3>
              <ul class="space-y-3 text-slate-400">
                <li><a class="footer-link" href="#portfolio">Web Development</a></li>
                <li><a class="footer-link" href="#skill">Network & IoT</a></li>
                <li><a class="footer-link" href="#skill">Applied Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 text-lg font-semibold text-white">Navigasi</h3>
              <ul class="space-y-3 text-slate-400">
                <li><a class="footer-link" href="#home">Home</a></li>
                <li><a class="footer-link" href="#about">Profil</a></li>
                <li><a class="footer-link" href="#portfolio">Proyek</a></li>
                <li><a class="footer-link" href="#contact">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-12 border-t border-slate-800 px-4 pt-8">
            <p class="text-center text-xs font-medium text-slate-500">
              Dibuat oleh <a href="https://github.com/Hanafi27" target="_blank" class="font-bold text-primary">Hanafi Ilham</a> menggunakan Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    `;
  },

  backToTop() {
    return `
      <a href="#home" class="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse" id="to-top">
        <span class="mt-2 block h-5 w-5 rotate-45 border-l-2 border-t-2"></span>
      </a>
    `;
  },
};
