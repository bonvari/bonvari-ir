document.addEventListener('DOMContentLoaded', function() {
    function closeAll() {
        document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.classList.remove('is-open'); });
        document.querySelectorAll('.dropdown-toggle').forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
    }

    document.querySelectorAll('.has-dropdown').forEach(function(item) {
        var toggle = item.querySelector('.dropdown-toggle');
        var menu = item.querySelector('.dropdown-menu');

        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            var wasOpen = menu.classList.contains('is-open');
            closeAll();
            if (!wasOpen) {
                menu.classList.add('is-open');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });

        // clicking a link inside dropdown closes it
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() { closeAll(); });
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-dropdown')) { closeAll(); }
    });
});
