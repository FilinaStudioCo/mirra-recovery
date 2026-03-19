
// ===== THEME TOGGLE =====
(function() {
  const html = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  let currentTheme = mq.matches ? 'dark' : 'light';
  html.setAttribute('data-theme', currentTheme);

  function updateToggle(btn, theme) {
    if (!btn) return;
    if (theme === 'dark') {
      btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  const toggle = document.querySelector('[data-theme-toggle]');
  updateToggle(toggle, currentTheme);

  if (toggle) {
    toggle.addEventListener('click', function() {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      updateToggle(toggle, currentTheme);
    });
  }
})();

// ===== STICKY HEADER =====
(function() {
  const header = document.getElementById('header');
  if (!header) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastY = y;
  }, { passive: true });
})();
