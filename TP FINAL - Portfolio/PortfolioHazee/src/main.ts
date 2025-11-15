// Entry point: behaviors JS/TS para la landing (vanilla TypeScript)
const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section[id]')
const contactForm = document.getElementById('contactForm') as HTMLFormElement | null

// ---------------------------
// Scroll Spy
// ---------------------------
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


// ---------------------------
// Formulario de contacto
// ---------------------------
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

    console.log('Envío demo:', { name, email, message })
    alert('Gracias! Tu mensaje fue recibido.')
    contactForm.reset()
  })
}
