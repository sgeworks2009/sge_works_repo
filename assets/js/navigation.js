/**
 * SGE Works — Navigation Controller
 * Handles Sticky Navigation, Accessible Services Dropdown, and Mobile Drawer
 */

(function () {
  'use strict';

  function initNavigation() {
    const header = document.querySelector('.site-header');
    const dropdown = document.querySelector('.dropdown');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-drawer a');
    const mobileServicesTrigger = document.querySelector('.mobile-services-trigger');
    const mobileServicesAccordion = document.querySelector('.mobile-services-accordion');

    // 1. Sticky Navigation Scroll Transition
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load

    // 2. Desktop Services Dropdown (Hover Intent with Grace Timeout & Smooth Click Scroll)
    if (dropdown && dropdownTrigger && dropdownMenu) {
      let dropdownTimer = null;

      function openDropdown() {
        if (dropdownTimer) {
          clearTimeout(dropdownTimer);
          dropdownTimer = null;
        }
        dropdown.classList.add('is-open');
        dropdownTrigger.setAttribute('aria-expanded', 'true');
      }

      function closeDropdown(immediate) {
        if (dropdownTimer) {
          clearTimeout(dropdownTimer);
          dropdownTimer = null;
        }
        if (immediate) {
          dropdown.classList.remove('is-open');
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        } else {
          dropdownTimer = setTimeout(function () {
            dropdown.classList.remove('is-open');
            dropdownTrigger.setAttribute('aria-expanded', 'false');
          }, 250); // 250ms grace timeout ensures seamless cursor transit to/from drawer
        }
      }

      // Hover on dropdown container (trigger + menu) keeps it open
      dropdown.addEventListener('mouseenter', openDropdown);
      dropdown.addEventListener('mouseleave', function () {
        closeDropdown(false);
      });

      // Hover directly on the dropdown menu also keeps it open
      dropdownMenu.addEventListener('mouseenter', openDropdown);
      dropdownMenu.addEventListener('mouseleave', function () {
        closeDropdown(false);
      });

      // Clicking Services scrolls smoothly to #services section
      dropdownTrigger.addEventListener('click', function (e) {
        closeDropdown(true); // Close drawer immediately on click
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 70;
          const targetPos = servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
          history.pushState(null, null, '#services');
        }
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          closeDropdown(true);
        }
      });

      // Keyboard navigation (ESC to close)
      dropdown.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeDropdown(true);
          dropdownTrigger.focus();
        }
      });

      // Close dropdown when any item clicked
      dropdownMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeDropdown(true);
        });
      });
    }

    // 3. Mobile Navigation Drawer
    if (mobileToggle && mobileDrawer) {
      function openMobileMenu() {
        mobileToggle.classList.add('is-active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('is-open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('mobile-menu-active');
        document.body.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileToggle.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('is-open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('mobile-menu-active');
        document.body.style.overflow = '';
      }

      mobileToggle.addEventListener('click', function () {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      // Close mobile drawer when any link is tapped inside drawer
      mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          closeMobileMenu();
        });
      });

      // Close mobile drawer when clicking the business name or CTA in the navigation bar
      if (header) {
        const headerLinks = header.querySelectorAll('a');
        headerLinks.forEach(function (link) {
          link.addEventListener('click', function () {
            if (mobileDrawer.classList.contains('is-open')) {
              closeMobileMenu();
            }
          });
        });
      }

      // Close on ESC key
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeMobileMenu();
          mobileToggle.focus();
        }
      });
    }

    // 4. Mobile Services Accordion
    if (mobileServicesTrigger && mobileServicesAccordion) {
      mobileServicesTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        const isExpanded = mobileServicesAccordion.classList.toggle('is-expanded');
        mobileServicesTrigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      });
    }

    // 5. Scroll Spy for Active Navigation Link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link:not(.dropdown-trigger)');

    function updateActiveNavLink() {
      const scrollY = window.pageYOffset + 120;
      sections.forEach(function (section) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(function (link) {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('is-active');
            }
          });
        }
      });
    }
    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
