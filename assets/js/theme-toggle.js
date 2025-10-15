// (function() {
//   const toggle = document.getElementById('theme-toggle');
//   if (!toggle) return;

//   const currentTheme = localStorage.getItem('theme');
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//   if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//   }

//   toggle.addEventListener('click', function() {
//     const current = document.documentElement.getAttribute('data-theme');
//     const newTheme = current === 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   });
// })();


(function() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const setIcon = (theme) => {
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  };

  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = currentTheme || (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', initialTheme);
  setIcon(initialTheme);

  toggle.addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIcon(newTheme);
  });
})();
