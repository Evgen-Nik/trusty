window.addEventListener('DOMContentLoaded', () => {
    /**
     * Header menu scroll styles
     */
    const headerMenu = document.querySelector('.header');
    window.addEventListener("scroll", function() {
        window.scrollY >= 70 ? headerMenu.classList.add("white") : headerMenu.classList.remove("white");
    });


    
    /**
     * Test Section
     */

    const testMenuItem = document.getElementsByClassName("test__menu-item");
         
    const toggleTestClass = function() {
        document.querySelectorAll('.test__menu-item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        if(!this.classList.contains("active")) {
            this.classList.add("active")
            document.querySelectorAll('.test__window .content').forEach((item, i) => {
                item.classList.remove("active");
            });
            document.getElementById(this.getAttribute('data-test-window')).classList.add("active");
        }
    }
    Array.from(testMenuItem).forEach(function(element) {
        element.addEventListener('click', toggleTestClass);
    });



    /**
     * Plans Section
     */

    const plansVar = document.getElementsByClassName("plans__var");
    const togglePlanClass = function() {
        document.querySelectorAll('.plans__var').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        if(!this.classList.contains("active")) {
            this.classList.add("active")
        }
    }
    Array.from(plansVar).forEach(function(element) {
        element.addEventListener('click', togglePlanClass);
    });



    /**
     * FAQ
     */
    const faqQuestions = document.getElementsByClassName("faq-questions__item");
    const toggleFaqClass = function() {
        document.querySelectorAll('.faq-questions__item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(faqQuestions).forEach(function(element) {
        element.addEventListener('click', toggleFaqClass);
    });

    /**
     * Animated Checkboxes
     */
    const getDistanceToViewportTop = function(element) {
        const elementRect = element.getBoundingClientRect();
        return elementRect.top;
    }
    const animatedCheckboxes = document.getElementsByClassName("align__scrollwindow-item");
    const toggleCheckboxClass = function() {
        Array.from(animatedCheckboxes).forEach(function(element) {
            if (getDistanceToViewportTop(element) < 250) {
                if (!element.classList.contains('active')) element.classList.add('active')
            } else if (element.classList.contains('active')) {
                if (element.classList.contains('active')) element.classList.remove('active')
            }
        });
    }
    window.addEventListener('scroll', toggleCheckboxClass);



    /**
     * humburger
     */
    const menu = document.querySelector('.header__wrapper'),
          link = document.querySelectorAll('.header__link'),
          hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__wrapper_active');
        registration.classList.toggle('header__registration_active');
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__wrapper_active');
            registration.classList.toggle('header__registration_active');
        });
    });



    /**
     * Footer
     */
    const footerMenuItem = document.getElementsByClassName("footer__menu-item");
    const toggleFooterClass = function() {
        document.querySelectorAll('.footer__menu-item').forEach((item, i) => {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
    }
    Array.from(footerMenuItem).forEach(function(element) {
        element.addEventListener('click', toggleFooterClass);
    });
});