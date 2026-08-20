document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'whatsapp_order_click', {
                link_url: link.href
            });
        }
    });
});
