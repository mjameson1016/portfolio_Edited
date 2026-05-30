// ============================================================
//  PORTFOLIO ENGINE — reads config.js and builds the site
//  You don't need to edit this file.
// ============================================================

(function () {

  function applyConfig() {
    const c = CONFIG.colors;
    const f = CONFIG.fonts;
    const root = document.documentElement;
    root.style.setProperty('--color-bg',      c.background);
    root.style.setProperty('--color-text',    c.text);
    root.style.setProperty('--color-muted',   c.textMuted);
    root.style.setProperty('--color-accent',  c.accent);
    root.style.setProperty('--color-overlay', c.overlayBg);
    root.style.setProperty('--font-display',  `'${f.display}', serif`);
    root.style.setProperty('--font-body',     `'${f.body}', sans-serif`);
    root.style.setProperty('--font-display-weight', f.displayWeight);
    document.body.style.fontFamily = `'${f.body}', sans-serif`;
  }

  function loadFonts() {
    const f = CONFIG.fonts;
    const names = [...new Set([f.display, f.body].filter(Boolean))];
    const param = names.map(n => 'family=' + n.replace(/ /g, '+')+':wght@300;400;500;700').join('&');
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?${param}&display=swap`;
    document.head.appendChild(link);
  }

  function setTitle(suffix) {
    document.title = suffix ? `${suffix} — ${CONFIG.siteTitle}` : CONFIG.siteTitle;
  }

  function buildHeader(activeSection) {
    const header = document.getElementById('site-header');
    if (!header) return;
    const navItems = CONFIG.nav.map(item => {
      const cls = item.section === activeSection ? 'active' : '';
      return `<li><a href="index.html?section=${item.section}" class="${cls}">${item.label}</a></li>`;
    }).join('');
    header.innerHTML = `
      <div class="site-wrap">
        <div class="site-logo">
  <a href="index.html">
    ${CONFIG.logoImage
      ? `<img src="${CONFIG.logoImage}" alt="${CONFIG.logoText}" style="height: 80px; width: auto; display: block;">`
      : CONFIG.logoText}
  </a>
</div>
        <nav><ul class="site-nav">${navItems}</ul></nav>
      </div>`;
    if (CONFIG.headerImage) {
      const hero = document.getElementById('site-hero');
      if (hero) {
        hero.innerHTML = `<img src="${CONFIG.headerImage}" alt="${CONFIG.siteTitle}">`;
        hero.classList.remove('hidden');
      }
    }
  }

  function buildFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const links = CONFIG.footer.map(f =>
      `<a href="${f.href}" target="_blank" rel="noopener">${f.label}</a>`
    ).join('');
    footer.innerHTML = `<div class="site-wrap">${links}</div>`;
  }

  function buildGrid(category) {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    const projects = category
      ? CONFIG.projects.filter(p => p.category === category)
      : CONFIG.projects;
    grid.innerHTML = projects.map(p => {
      const media = p.thumbnail
        ? `<img class="project-tile-img" src="${p.thumbnail}" alt="${p.title}">`
        : `<div class="project-tile-placeholder" style="background:${p.thumbColor||'#ccc'}"></div>`;
      return `
        <a class="project-tile" href="work.html?id=${p.id}">
          ${media}
          <div class="project-tile-overlay">
            <span class="project-tile-label">${p.title}</span>
          </div>
        </a>`;
    }).join('');
    document.getElementById('grid-container').classList.remove('hidden');
  }

  function buildAbout() {
    const el = document.getElementById('about-section');
    if (!el) return;
    const a = CONFIG.about;
    const photo = a.photo ? `<img class="about-photo" src="${a.photo}" alt="About">` : '';
    el.innerHTML = `
      <div class="page-section">
        <h1>${a.heading}</h1>
        ${photo}
        ${a.bio.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('')}
      </div>`;
    document.getElementById('about-container').classList.remove('hidden');
  }

  function buildContact() {
    const el = document.getElementById('contact-section');
    if (!el) return;
    const c = CONFIG.contact;
    el.innerHTML = `
      <div class="page-section">
        <h1>${c.heading}</h1>
        <a class="contact-email" href="mailto:${c.email}">${c.email}</a>
        <p>${c.message}</p>
      </div>`;
    document.getElementById('contact-container').classList.remove('hidden');
  }

  function routeIndex() {
    const params  = new URLSearchParams(window.location.search);
    const section = params.get('section') || CONFIG.nav[0].section;
    buildHeader(section);
    if (section === 'about')   { buildAbout();   return; }
    if (section === 'contact') { buildContact(); return; }
    buildGrid(section);
  }

  function buildWorkPage() {
    const params  = new URLSearchParams(window.location.search);
    const id      = params.get('id');
    const project = CONFIG.projects.find(p => p.id === id);
    const container = document.getElementById('work-content');
    if (!container) return;

    if (!project) {
      container.innerHTML = `<div class="project-detail"><p>Project not found.</p></div>`;
      return;
    }

    setTitle(project.title);
    buildHeader(project.category);

    // Media
    let mediaHtml = '';
    if (project.videoUrl) {
  mediaHtml = `<div class="project-detail-media">
    <iframe src="${project.videoUrl}" style="aspect-ratio: ${project.aspectRatio || '16 / 9'}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>`;

  if (project.extraVideos && project.extraVideos.length) {
    mediaHtml += project.extraVideos.map(url => `
      <div class="project-detail-media" style="margin-top: 1.5rem;">
        <iframe src="${url}" style="aspect-ratio: ${project.aspectRatio || '16 / 9'}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>`).join('');
  }
}

    // Description
    const desc = project.description.split('\n').filter(l=>l.trim())
      .map(l=>`<p>${l}</p>`).join('');

    // Meta
    const meta = (project.details||[]).map(d=>`
      <div class="project-detail-meta-row">
        <span class="meta-label">${d.label}</span>
        <span class="meta-value">${d.value}</span>
      </div>`).join('');

    // Prev / Next within same category
    const siblings = CONFIG.projects.filter(p => p.category === project.category);
    const idx  = siblings.findIndex(p => p.id === project.id);
    const prev = siblings[idx - 1];
    const next = siblings[idx + 1];
    const prevLink = prev ? `<a href="work.html?id=${prev.id}">← ${prev.title}</a>` : `<span></span>`;
    const nextLink = next ? `<a href="work.html?id=${next.id}">${next.title} →</a>` : `<span></span>`;

    // Back label
    const navItem = CONFIG.nav.find(n => n.section === project.category);
    const backLabel = navItem ? navItem.label : 'Back';

    container.innerHTML = `
      <div class="project-detail">
        <a class="project-detail-back" href="index.html?section=${project.category}">${backLabel}</a>
        <h1 class="project-detail-title">${project.title}</h1>
        ${mediaHtml}
        <div class="project-detail-body">
          <div class="project-detail-description">${desc}</div>
          <div class="project-detail-meta">${meta}</div>
        </div>
        <div class="project-nav">${prevLink}${nextLink}</div>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadFonts();
    applyConfig();
    buildFooter();
    setTitle();
    const page = document.body.dataset.page;
    if (page === 'index') routeIndex();
    if (page === 'work')  buildWorkPage();
  });

})();
