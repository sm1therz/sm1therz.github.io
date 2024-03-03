(function () {
  document.getElementById('js-menu-toggle').addEventListener('click', () => {
    let n = document.getElementById('js-menu');
    n.classList.toggle('menu-open');
  });
})();
