
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    hamburger.addEventListener('keydown', e => {
      if (e.key === 'Enter') mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Counter animation (hero)
    function animateCount(el, target, suffix, duration) {
      let start = 0;
      const step = Math.ceil(target / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(timer); }
        el.textContent = start.toLocaleString() + suffix;
      }, 16);
    }
    window.addEventListener('load', () => {
      setTimeout(() => {
        animateCount(document.getElementById('counter1'), 5000, '+', 1400);
        animateCount(document.getElementById('counter2'), 12, '', 900);
        animateCount(document.getElementById('counter3'), 40, '+', 1000);
      }, 400);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });