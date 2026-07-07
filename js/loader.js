/* ══════════════════════════════════════
   loader.js — Wagner Gonçalves Costa

   Responsável por carregar os componentes
   reutilizáveis de header e footer em todas
   as páginas, evitando repetição de código HTML.

   Por que fetch e não <iframe> ou SSI?
   - fetch é nativo no browser, sem dependências
   - funciona perfeitamente no Vercel e Live Server
   - é o mesmo raciocínio de componente do React:
     quando migrarmos, vira <Header /> e <Footer />
   ══════════════════════════════════════ */


/**
 * Carrega um arquivo HTML externo e injeta no elemento indicado.
 * Executa um callback opcional após a injeção — usado para
 * aplicar o "active" no menu depois que o header foi carregado.
 *
 * @param {string} placeholderId - id do elemento que receberá o HTML
 * @param {string} filePath      - caminho do arquivo HTML a carregar
 * @param {Function} [callback]  - função executada após a injeção
 */
async function loadComponent(placeholderId, filePath, callback) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Não foi possível carregar: ${filePath}`);
    const html = await response.text();
    placeholder.innerHTML = html;
    if (typeof callback === 'function') callback();
  } catch (error) {
    console.warn('loader.js:', error.message);
  }
}


/**
 * Detecta a página atual pela URL e adiciona a classe "active"
 * ao link correspondente no menu de navegação.
 *
 * Cada <a> no header.html tem data-page="nome".
 * Exemplos de mapeamento:
 *   /index.html      → "index"
 *   /projetos.html   → "projetos"
 *   /               → "index" (raiz do site)
 */
function setActiveNavLink() {
  const path = window.location.pathname;

  // Extrai o nome do arquivo sem extensão
  const match = path.match(/\/([^/]+?)(?:\.html)?$/);
  let currentPage = match ? match[1] : 'index';

  // Raiz "/" também é a home
  if (path === '/' || path === '') currentPage = 'index';

  // Aplica "active" apenas no link da página atual
  document.querySelectorAll('.navbar-nav .nav-link[data-page]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
}


/**
 * Preenche o ano atual no footer automaticamente.
 * O span#ano está no footer.html.
 */
function setFooterYear() {
  const el = document.getElementById('ano');
  if (el) el.textContent = new Date().getFullYear();
}


/**
 * Inicialização — executa quando o DOM estiver pronto.
 *
 * Caminhos dos componentes:
 * - components/ está na raiz do projeto
 * - index.html também está na raiz
 * - portanto o caminho relativo é './components/_arquivo.html'
 */
document.addEventListener('DOMContentLoaded', () => {

  // Carrega o header e após a injeção aplica o link ativo
  loadComponent(
    'header-placeholder',
    './components/header.html',
    () => setActiveNavLink()
  );

  // Carrega o footer e após a injeção preenche o ano
  loadComponent(
    'footer-placeholder',
    './components/footer.html',
    () => setFooterYear()
  );

});