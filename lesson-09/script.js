function loadTime() {
    const lang = navigator.language.startsWith('pt') ? 'pt' : 'en'

    const translations = {
        pt: {
            title: 'Hora do Dia',
            now: hora => `Agora são ${hora} horas.`,
            footer: '© CursoemVideo',
            alt: {
                morning: 'Foto da manhã',
                afternoon: 'Foto da tarde',
                night: 'Foto da noite'
            }
        },
        en: {
            title: 'Time of Day',
            now: hour => `It's currently ${hour} o'clock.`,
            footer: '© CursoemVideo',
            alt: {
                morning: 'Morning photo',
                afternoon: 'Afternoon photo',
                night: 'Night photo'
            }
        }
    }

    const t = translations[lang]
    const now = new Date()
    const hour = now.getHours()

    const title = document.querySelector('header h1')
    const message = document.getElementById('message')
    const image = document.getElementById('image')
    const footer = document.getElementById('footer-text')

    title.textContent = t.title
    message.innerHTML = t.now(hour)
    footer.textContent = t.footer

    if (hour >= 0 && hour < 12) {
        image.src = 'morningphoto.jpg'
        image.alt = t.alt.morning
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        image.src = 'afternoonphoto.jpg'
        image.alt = t.alt.afternoon
        document.body.style.background = '#b9846f'
    } else {
        image.src = 'nightphoto.jpg'
        image.alt = t.alt.night
        document.body.style.background = '#515154'
    }
}


fsdfsd