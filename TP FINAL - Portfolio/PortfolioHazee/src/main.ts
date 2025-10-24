// Entry point: behaviors JS/TS para la landing (vanilla TypeScript)
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-scroll')
const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]')
const contactForm = document.getElementById('contactForm') as HTMLFormElement | null


// Smooth scroll for nav links (native behavior works, but we add small offset for fixed navbar)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')
    if (!href || !href.startsWith('#')) return
    const target = document.querySelector(href) as HTMLElement | null
    if (target) {
      const yOffset = -80 // altura del navbar
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      // close bootstrap collapse on small screens:
      const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement | null
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap collapse via class toggling (Bootstrap bundle handles the transition)
        const bsCollapse = (window as any).bootstrap?.Collapse?.getInstance(navbarCollapse)
        if (bsCollapse) bsCollapse.hide()
        else navbarCollapse.classList.remove('show')
      }
    }
  })
})

// Scroll spy: highlight current section in navbar
function onScrollSpy() {
  const scrollPos = window.pageYOffset
  sections.forEach(section => {
    const top = section.offsetTop - 120
    const bottom = top + section.offsetHeight
    const id = section.id
    const link = document.querySelector(`.nav-scroll[href="#${id}"]`)
    if (!link) return
    if (scrollPos >= top && scrollPos < bottom) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
onScrollSpy()
window.addEventListener('scroll', onScrollSpy, { passive: true })

// Simple contact form handling (solo demo)
if (contactForm) {
  contactForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const name = (document.getElementById('name') as HTMLInputElement).value.trim()
    const email = (document.getElementById('email') as HTMLInputElement).value.trim()
    const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim()
    if (!name || !email || !message) {
      alert('Por favor completá todos los campos.')
      return
    }
    // Acá podés integrar tu servicio (Email API, Netlify Forms, Formspree, etc)
    console.log('Envío demo:', { name, email, message })
    alert('Gracias! Tu mensaje fue recibido (demo).')
    contactForm.reset()
  })
}

// Lazy load background hero image for performance
function setHeroBackground() {
  const root = document.documentElement as HTMLElement
  const bg = getComputedStyle(root).getPropertyValue('--bg-hero').trim()
  if (!bg) {
    const hero = document.querySelector('.hero') as HTMLElement | null
    if (!hero) return
    const img = new Image()
    img.src = '/src/assets/hero.jpg'
    img.onload = () => {
      hero.style.backgroundImage = `url('${img.src}')`
      hero.classList.add('hero--loaded')
    }
  }
}
setHeroBackground()

function setActiveNavLink() {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // <- compensamos altura del navbar
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

// Ejecutamos al cargar y al hacer scroll
window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);