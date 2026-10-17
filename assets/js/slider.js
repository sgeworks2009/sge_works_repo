/**
 * SGE Works — Touch-Friendly Component Slider
 * Supports Touch Swipe, Keyboard Navigation, and Responsive Stepping
 */

(function () {
  'use strict';

  function initComponentSlider() {
    const wrapper = document.querySelector('.component-slider-wrapper');
    const track = document.querySelector('.component-slider-track');
    const prevBtn = document.querySelector('.slider-btn.slider-prev');
    const nextBtn = document.querySelector('.slider-btn.slider-next');

    if (!track) return;

    function getStepWidth() {
      const firstItem = track.querySelector('.component-slide-item');
      if (!firstItem) return 300;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 16;
      return firstItem.offsetWidth + gap;
    }

    function scrollNext() {
      const step = getStepWidth();
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScrollLeft - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const currentStepIndex = Math.round(track.scrollLeft / step);
        const targetLeft = Math.min((currentStepIndex + 1) * step, maxScrollLeft);
        track.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }

    function scrollPrev() {
      const step = getStepWidth();
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft <= 10) {
        track.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
      } else {
        const currentStepIndex = Math.round(track.scrollLeft / step);
        const targetLeft = Math.max(0, (currentStepIndex - 1) * step);
        track.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }

    // Auto-Scroll Controller (Snappy automated stepping)
    const AUTO_SCROLL_INTERVAL = 3000;
    let autoScrollTimer = null;
    let isUserInteracting = false;
    let pauseTimeout = null;

    function startAutoScroll() {
      if (autoScrollTimer) return;
      autoScrollTimer = setInterval(function () {
        if (!isUserInteracting && document.visibilityState !== 'hidden') {
          scrollNext();
        }
      }, AUTO_SCROLL_INTERVAL);
    }

    function stopAutoScroll() {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
      }
    }

    function pauseTemporarily(delayMs) {
      isUserInteracting = true;
      if (pauseTimeout) clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(function () {
        isUserInteracting = false;
      }, delayMs || 3500);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        scrollPrev();
        pauseTemporarily(4000);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        scrollNext();
        pauseTemporarily(4000);
      });
    }

    // Keyboard Arrow Controls
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        scrollPrev();
        pauseTemporarily(4000);
      } else if (e.key === 'ArrowRight') {
        scrollNext();
        pauseTemporarily(4000);
      }
    });

    // Pause on hover, resume on mouse leave
    if (wrapper) {
      wrapper.addEventListener('mouseenter', function () {
        isUserInteracting = true;
      });
      wrapper.addEventListener('mouseleave', function () {
        isUserInteracting = false;
      });
    }

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', function (e) {
      isUserInteracting = true;
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      pauseTemporarily(3500);
    }, { passive: true });

    function handleSwipe() {
      const threshold = 40;
      if (touchStartX - touchEndX > threshold) {
        scrollNext();
      } else if (touchEndX - touchStartX > threshold) {
        scrollPrev();
      }
    }

    // Viewport Visibility Observer: auto-scroll only when section is active in view
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            isUserInteracting = false;
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        });
      }, { threshold: 0.15 });
      observer.observe(wrapper || track);
    } else {
      startAutoScroll();
    }
  }

  /**
   * Hero Background Smooth Scroll-Motion Carousel with Snapping
   * Synchronized to the animated loading indicator completion
   */
  function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const track = slider.querySelector('.hero-images-track');
    if (!track) return;

    const originalSlides = Array.from(track.querySelectorAll('.hero-slide'));
    const bars = Array.from(document.querySelectorAll('.hero-slider-bar'));
    const slideCount = originalSlides.length;
    if (slideCount <= 1) return;

    // Clone the first slide at the end for seamless continuous forward scroll
    const firstClone = originalSlides[0].cloneNode(true);
    firstClone.classList.remove('is-active');
    firstClone.setAttribute('aria-hidden', 'true');
    track.appendChild(firstClone);

    let currentIndex = 0;
    let fallbackTimer = null;
    let isTransitioning = false;
    const animationDurationMs = 5500; // Duration of progress bar animation
    const scrollTransitionDuration = 850; // ms for the scroll-and-snap motion

    function clearPendingTransition() {
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      bars.forEach(function (bar) {
        const prog = bar.querySelector('.hero-slider-progress');
        if (prog && prog._onEnd) {
          prog.removeEventListener('animationend', prog._onEnd);
          prog._onEnd = null;
        }
      });
    }

    function startProgress(index) {
      const activeBar = bars[index];
      if (activeBar) {
        activeBar.classList.add('is-active');
        const activeProg = activeBar.querySelector('.hero-slider-progress');
        if (activeProg) {
          activeProg.style.animation = 'none';
          void activeProg.offsetHeight; // Reflow to start animation from 0%
          activeProg.style.animation = '';

          const onAnimationComplete = function () {
            clearPendingTransition();
            goToSlide(currentIndex + 1);
          };

          activeProg._onEnd = onAnimationComplete;
          activeProg.addEventListener('animationend', onAnimationComplete, { once: true });

          fallbackTimer = setTimeout(function () {
            onAnimationComplete();
          }, animationDurationMs + 350);
        }
      }
    }

    function goToSlide(targetIndex) {
      if (isTransitioning) return;
      clearPendingTransition();

      // Deactivate current slide and bar
      const prevRealIndex = currentIndex % slideCount;
      if (originalSlides[prevRealIndex]) {
        originalSlides[prevRealIndex].classList.remove('is-active');
      }
      if (bars[prevRealIndex]) {
        bars[prevRealIndex].classList.remove('is-active');
        const oldProg = bars[prevRealIndex].querySelector('.hero-slider-progress');
        if (oldProg) {
          oldProg.style.animation = 'none';
        }
      }

      isTransitioning = true;

      // Handle forward wrap: from last slide to first slide
      if (currentIndex === slideCount - 1 && (targetIndex >= slideCount || targetIndex === 0)) {
        // Scroll forward into the cloned slide (position: slideCount * 100%)
        track.style.transition = `transform ${scrollTransitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        track.style.transform = `translateX(-${slideCount * 100}%)`;

        setTimeout(function () {
          // Seamlessly reset to slide 0 without visual jump
          track.style.transition = 'none';
          track.style.transform = 'translateX(0%)';
          void track.offsetHeight; // Reflow

          currentIndex = 0;
          originalSlides[0].classList.add('is-active');

          const img = originalSlides[0].querySelector('.hero-slide-img');
          if (img) {
            img.style.animation = 'none';
            void img.offsetHeight;
            img.style.animation = '';
          }

          startProgress(0);
          isTransitioning = false;
        }, scrollTransitionDuration + 20);

        return;
      }

      // Handle backward wrap: e.g. swipe right when on slide 0
      if (currentIndex === 0 && targetIndex < 0) {
        // Instantly jump to clone position
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideCount * 100}%)`;
        void track.offsetHeight;

        // Smoothly scroll backwards into the last slide
        const dest = slideCount - 1;
        setTimeout(function () {
          track.style.transition = `transform ${scrollTransitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
          track.style.transform = `translateX(-${dest * 100}%)`;

          setTimeout(function () {
            currentIndex = dest;
            originalSlides[dest].classList.add('is-active');

            const img = originalSlides[dest].querySelector('.hero-slide-img');
            if (img) {
              img.style.animation = 'none';
              void img.offsetHeight;
              img.style.animation = '';
            }

            startProgress(dest);
            isTransitioning = false;
          }, scrollTransitionDuration + 20);
        }, 20);

        return;
      }

      // Standard transition (from current to targetIndex)
      const nextIndex = (targetIndex + slideCount) % slideCount;
      track.style.transition = `transform ${scrollTransitionDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      track.style.transform = `translateX(-${nextIndex * 100}%)`;

      setTimeout(function () {
        currentIndex = nextIndex;
        originalSlides[nextIndex].classList.add('is-active');

        // Restart zoom on the destination slide
        const img = originalSlides[nextIndex].querySelector('.hero-slide-img');
        if (img) {
          img.style.animation = 'none';
          void img.offsetHeight;
          img.style.animation = '';
        }

        startProgress(nextIndex);
        isTransitioning = false;
      }, scrollTransitionDuration + 20);
    }

    // Interactive bar click navigation
    bars.forEach(function (bar, idx) {
      bar.addEventListener('click', function () {
        if (idx !== currentIndex && !isTransitioning) {
          goToSlide(idx);
        }
      });
    });

    // Touch Swipe Support for the Hero Slider
    let touchStartX = 0;
    let touchStartY = 0;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      heroSection.addEventListener('touchend', function (e) {
        const deltaX = touchStartX - e.changedTouches[0].screenX;
        const deltaY = touchStartY - e.changedTouches[0].screenY;
        // Trigger only if horizontal swipe dominates and exceeds threshold
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
          if (deltaX > 0) {
            goToSlide(currentIndex + 1);
          } else {
            goToSlide(currentIndex - 1);
          }
        }
      }, { passive: true });
    }

    // Pause/Resume progress when tab visibility changes
    document.addEventListener('visibilitychange', function () {
      const activeBar = bars[currentIndex % slideCount];
      const activeProg = activeBar ? activeBar.querySelector('.hero-slider-progress') : null;

      if (document.hidden) {
        if (activeProg) activeProg.style.animationPlayState = 'paused';
        if (fallbackTimer) clearTimeout(fallbackTimer);
      } else {
        if (activeProg) activeProg.style.animationPlayState = 'running';
      }
    });

    // Initialize first slide
    track.style.transform = 'translateX(0%)';
    originalSlides[0].classList.add('is-active');
    startProgress(0);
  }

  function initSliders() {
    initComponentSlider();
    initHeroSlider();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
  } else {
    initSliders();
  }
})();
