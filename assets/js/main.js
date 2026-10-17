/**
 * SGE Works — Core Controller
 * Scroll-triggered reveals, RFQ Desk submission handling, and Anchor Navigation
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Intersection Observer for Scroll Reveals
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1
        }
      );

      revealElements.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      // If reduced motion is requested or IntersectionObserver is unsupported, reveal all immediately
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }


    // 3. Smooth Anchor Click Fallback for older browsers
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });

    // 4. Interactive Work Gallery Tile Touch/Tap Reveal for Mobile Devices
    const galleryTiles = document.querySelectorAll('.gallery-tile');
    if (galleryTiles.length) {
      galleryTiles.forEach(function (tile) {
        tile.addEventListener('click', function (e) {
          // If clicked on desktop, hover already handles it. For touch devices:
          const isTouched = this.classList.contains('is-touched');
          galleryTiles.forEach(function (t) {
            t.classList.remove('is-touched');
          });
          if (!isTouched) {
            this.classList.add('is-touched');
          }
        });
      });

      // Tap outside to close open tile overlay on touch devices
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.gallery-tile')) {
          galleryTiles.forEach(function (t) {
            t.classList.remove('is-touched');
          });
        }
      });
    }

    // 5. Persistent Floating Quick-Connect Dock Interaction
    const floatingDock = document.querySelector('.floating-dock');
    if (floatingDock) {
      const dockBtns = floatingDock.querySelectorAll('.dock-action-btn');

      function collapseDock() {
        floatingDock.classList.remove('is-open');
        if (document.activeElement && floatingDock.contains(document.activeElement)) {
          document.activeElement.blur();
        }
      }

      dockBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          // Detect touch interaction
          const isTouchOnly = (e.pointerType === 'touch') ||
                              window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
                              ('ontouchstart' in window && window.innerWidth <= 1024);

          if (isTouchOnly) {
            // First tap: if dock is collapsed, expand it to reveal full details
            if (!floatingDock.classList.contains('is-open')) {
              e.preventDefault();
              e.stopPropagation();
              floatingDock.classList.add('is-open');
              return;
            }

            // Second tap: dock is already open, permit natural link activation (WhatsApp / Call)
            return;
          }

          // Desktop mouse click: blur button so focus ring does not persist
          setTimeout(function () {
            btn.blur();
          }, 80);
        });
      });

      // Desktop: moving mouse cursor away collapses the dock (ignore touch taps)
      floatingDock.addEventListener('pointerleave', function (e) {
        if (e.pointerType === 'mouse') {
          collapseDock();
        }
      });

      // Tap outside to collapse dock on mobile/touch
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.floating-dock')) {
          collapseDock();
        }
      });
    }
  });
})();
