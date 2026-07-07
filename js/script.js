// ===== GA4 — Rastreamento de eventos de recrutador ===================================

// 1. Clique em qualquer link de contato (e-mail, LinkedIn, WhatsApp)
document.querySelectorAll('a[href^="mailto"], a[href*="linkedin"], a[href*="wa.me"]')
  .forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'contato_clicado', {
        destino: link.href
      });
    });
  });

// 2. Download ou clique no currículo (se houver)
document.querySelectorAll('a[href*="curriculo"], a[href*="cv"], a[download]')
  .forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'curriculo_baixado');
    });
  });

// 3. Scroll profundo — indica leitura real da página
let scroll75disparado = false;
let scroll100disparado = false;

window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;

  if (scrolled >= 75 && !scroll75disparado) {
    scroll75disparado = true;
    gtag('event', 'scroll_profundo', { profundidade: '75%' });
  }

  if (scrolled >= 95 && !scroll100disparado) {
    scroll100disparado = true;
    gtag('event', 'scroll_profundo', { profundidade: '100%' });
  }
});

// 4. Clique em projetos — indica interesse no trabalho técnico
document.querySelectorAll('a[href*="github.com"], a[href*="projeto"], .projeto, .card')
  .forEach(link => {
    link.addEventListener('click', () => {
      gtag('event', 'projeto_clicado', {
        projeto: link.innerText || link.href
      });
    });
  });

// 5. Tempo na página — quem ficou mais de 1 minuto provavelmente leu de verdade
setTimeout(() => {
  gtag('event', 'tempo_engajado', { duracao: '60s' });
}, 60000);

// 6. Formulário de contato
document.getElementById('form-contato')?.addEventListener('submit', async function (event) {
  event.preventDefault();

  const form = event.target;
  const feedback = document.getElementById('form-feedback');
  const btn = form.querySelector('button[type="submit"]');

  btn.disabled = true;
  feedback.textContent = 'Enviando...';
  feedback.classList.remove('form-feedback-erro');

  try {
    const res = await fetch('https://formspree.io/f/xdawaqnn', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    if (res.ok) {
      feedback.textContent = 'Mensagem enviada com sucesso!';
      form.reset();
    } else {
      feedback.textContent = 'Erro ao enviar. Tente novamente.';
      feedback.classList.add('form-feedback-erro');
    }
  } catch {
    feedback.textContent = 'Erro de conexão. Tente novamente.';
    feedback.classList.add('form-feedback-erro');
  } finally {
    btn.disabled = false;
  }
});