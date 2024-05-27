document.addEventListener('DOMContentLoaded', function () {
    const navinit = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (navbarCollapsible)
            //  console.log('cool');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
        const links = document.querySelectorAll('.nav-Link')
        const sections = document.querySelectorAll('section')


        sections.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 100)) {
                links.forEach(link => {
                    link.classList.remove('active')
                    if (link.href.split('#').pop() === section.id) {
                        link.classList.add('active')
                    }
                })
            }
        })

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop};
    }

    const animItems = document.querySelectorAll('.text-animation');
    if (animItems.length > 0) {
        function onEntry(params) {
            animItems.forEach(item => {
                const itemHeight = item.offsetHeight;
                const itemOffset = offset(item).top;
                const StartPos = 1;
                const animPoint = document.documentElement.clientHeight - itemHeight / StartPos;
                
                if (itemHeight > document.documentElement.clientHeight) {
                   const animPoint = document.documentElement.clientHeight - document.documentElement.clientHeight / StartPos;
                }
                if ((window.scrollY > itemOffset - animPoint) && window.scrollY < itemOffset + itemHeight) {
                    item.classList.add('show');
                 } else {
                     item.classList.remove('show');
                 }
            });
        }
    }

    navinit();
    window.addEventListener('scroll', () => {
        navinit();
        onEntry();
    })
    window.addEventListener('resize', () => {
        navinit();
    })

})
