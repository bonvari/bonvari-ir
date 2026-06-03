document.querySelectorAll('.has-dropdown').forEach(function(item) {
    var toggle = item.querySelector('.dropdown-toggle');
    var menu = item.querySelector('.dropdown-menu');
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        var open = menu.classList.contains('is-open');
        document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.classList.remove('is-open'); });
        document.querySelectorAll('.dropdown-toggle').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
        if (!open) { menu.classList.add('is-open'); toggle.setAttribute('aria-expanded', 'true'); }
    });
});
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.classList.remove('is-open'); });
    document.querySelectorAll('.dropdown-toggle').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
});
