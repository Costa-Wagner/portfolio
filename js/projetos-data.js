/* ══════════════════════════════════════
   projetos-data.js — Wagner Gonçalves Costa
   ══════════════════════════════════════
 * Fonte única de dados dos projetos.
 * Migração React: trocar por export const projetos = [...]
*/

// ── Contextos das categorias ───────────────────────────────────────────
const categoriaInfo = {
  api: {
    titulo:  'API · Aprendizagem por Projetos Integrados',
    texto:   'Metodologia implementada pela FATEC como parte de seu modelo de ensino, promovendo a integração entre faculdade e empresas na resolução de desafios reais do mercado. Baseada em licenças de código aberto (OSI/AFL-3.0), a metodologia proporciona aos alunos experiência prática em um ambiente de desenvolvimento semelhante ao encontrado no mercado profissional.'
  },
  academico: {
    titulo:  'Projetos Acadêmicos',
    texto:   'Projetos desenvolvidos no contexto das disciplinas do curso de DSM · Desenvolvimento de Software Multiplataforma · FATEC, evidenciando a aplicação dos conhecimentos adquiridos e a evolução técnica ao longo da graduação.'
  },
  pessoal: {
    titulo:  'Projetos Pessoais',
    texto:  'Projetos próprios desenvolvidos fora do ambiente acadêmico, explorando interesses e aprendizados autônomos.'
  }
};

const projetos = [

  // ── API ────────────────────────────────────────────────────────────────
  {
    slug:        'janosys-v2',
    nome:        'JanoSys SIGNA',
    subtitulo:   'Sistema Integrado de Gestão de Normas Aeronáuticas',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'api',
    funcao:      'DevTeam · FrontEnd',
    stack:       ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Python', 'Flask', 'MySQL', 'Docker', 'AWS', 'Figma', 'Jira', 'GitHub'],
    empresa:     'AKAER · SJC/SP',
    metodologia: 'Scrum · Jira',
    descricao:   'Plataforma web desenvolvida em parceria com empresa do setor aeroespacial AKAER, para centralizar, organizar e filtrar requisitos normativos com controle de acesso multinível.',
    problema:    'A empresa gerenciava centenas de normas técnicas em planilhas dispersas, dificultando rastreabilidade, controle de versões e acesso segmentado por equipes.',
    solucao:     'Sistema web com filtros avançados por código, categoria, órgão e palavra-chave, controle de acesso por níveis de permissão (ACL) e painel de requisições com fluxo de aprovação.',
    atuacao: [
      'Minha atuação · DevTeam · FrontEnd',
      'Estruturei o layout base da aplicação (Template)',
      'Desenvolvi a navegação lateral com controle de acesso por perfil (ACL), ocultando/exibindo links conforme o usuário logado',
      'Implementei o painel de solicitações com máquina de estados de aprovação (fila → análise → aceite/indeferimento), incluindo validações por perfil',
      'Criei o sistema de favoritos com filtro dedicado e isolamento de dados por usuário',
      'Desenvolvi a marca d\'água dinâmica em PDF (usuário, data e hora), aplicada como overlay em mosaico para rastreabilidade de downloads',
    ],
    imagem:      ['assets//images/projects/api/2/proj-2.0-api.png','assets//images/projects/api/2/proj-2.1-api.png','assets//images/projects/api/2/proj-2.2-api.png',],
    video:       'assets/images/projects/api/2/proj-2.v-api.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/Janosys-Project-1-Akaer',
      deploy: 'https://janosys-aeroespacial.vercel.app/',
    }
  },

  {
    slug:        'janosys-v1',
    nome:        'JanoSys',
    subtitulo:   'Visualização de Dados do Censo 2010/2022',
    periodo:     '2º sem 2025',
    semestre:    '1º sem · DSM',
    categoria:   'api',
    funcao:      'Product Owner',
    stack:       ['HTML', 'CSS', 'Python', 'Flask', 'Plotly', 'Pandas', 'Vercel', 'Docker', 'AWS', 'Figma', 'Jira', 'GitHub', 'GoogleColab'],
    empresa:     'Cliente Fictício · Prefeitura',
    metodologia: 'Scrum · Jira',
    descricao:   'Dashboard interativo para visualização e análise de dados demográficos municipais, facilitando a distribuição estratégica de recursos públicos.',
    problema:    'Os dados do CENSO 2010/2022 estavam disponíveis apenas em formatos brutos, dificultando a interpretação por gestores públicos sem perfil técnico.',
    solucao:     'Dashboard web com gráficos interativos (Plotly), filtros por município e indicadores comparativos entre os dois censos.',
    atuacao:     [
      'Minha Atuação · Product Owner',
      'Conduzi a comunicação com o cliente',
      'Defini e priorizei o backlog',
      'Acompanhei as entregas via Jira',
      'Validei os incrementos a cada sprint',
    ],
    imagem:      'assets/images/projects/api/1/proj-1-api.png',
    video:       'assets/images/projects/api/1/proj-1.v-api.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/Janosys-Project',
      deploy: 'https://janosysapi1.vercel.app/',
    }
  },

  // ── ACADÊMICO ──────────────────────────────────────────────────────────
  {
    slug:        'aerocode',
    nome:        'Aerocode',
    subtitulo:   'Sistema Full-Stack de Gestão de Produção de Aeronaves',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'academico',
    funcao:      'FullStack',
    stack:       ['TypeScript', 'React', 'Node.js', 'Express', 'Prisma', 'MySQL', 'JWT'],
    empresa:     '',
    metodologia: '',
    descricao:   'Evolução do sistema CLI para uma aplicação web full-stack, com API REST, banco de dados relacional e autenticação via token, simulando o processo de produção aeronáutica do cadastro à entrega.',
    problema:    'Migrar um sistema de terminal para uma arquitetura cliente-servidor real, com persistência em banco de dados, autenticação segura e interface web responsiva, mantendo o controle de acesso por perfis de permissão.',
    solucao:     'Frontend React (SPA) consumindo uma API REST em Node.js/Express, com Prisma ORM sobre MySQL para persistência e autenticação JWT com bcrypt para proteção de senhas. Controle de aeronaves, peças, etapas de produção, testes e funcionários, com permissões hierárquicas (Operador, Engenheiro, Administrador).',
    atuacao:     [
      'Arquitetura full-stack (frontend + backend)',
      'Modelagem do banco de dados (MySQL/Prisma)',
      'Implementação da API REST (Node.js/Express)',
      'Autenticação e autorização (JWT + bcrypt)',
      'Frontend React (SPA)',
      'Testes manuais de integração',
    ],
    imagem:      ['assets/images/projects/academicos/3/proj-3.0-aerocode.png', 'assets/images/projects/academicos/3/proj-3.1-aerocode.png', 'assets/images/projects/academicos/3/proj-3.2-aerocode.png', 'assets/images/projects/academicos/3/proj-3.3-aerocode.png'],
    video:       'assets/images/projects/academicos/3/proj-3.v-aerocode.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/aerocode',
      deploy: 'https://aerocode-beta.vercel.app/',
    }
  },

    {
    slug:        'portfolio crud',
    nome:        'Portfólio',
    subtitulo:   'Site Portfólio (CRUD)',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'academico',
    funcao:      'FrontEnd',
    stack:       ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL', 'Thunder Client', 'GitHub', 'Vercel'],
    empresa:     '',
    metodologia: '',
    descricao:   'Portfólio acadêmico digital pessoal, desenvolvido individualmente em três etapas progressivas — de um site estático até uma aplicação completa com backend próprio e persistência em banco de dados relacional.',
    problema:    'Um portfólio estático não permite atualizar formação, cursos, skills e projetos sem alterar código diretamente, e não demonstra na prática o ciclo completo de uma aplicação web (frontend, rotas HTTP e persistência real de dados).',
    solucao:     'Site responsivo em HTML, CSS e JavaScript, com formação, cursos, skills e projetos renderizados dinamicamente a partir de arrays/objetos (aplicando estrutura de decisão, repetição e funções).\n\n Na segunda etapa, implementação e teste manual das rotas HTTP (GET/POST/PUT/DELETE).\n\n Na etapa final, integração com um backend em Flask (serverless) e MySQL, com 4 tabelas dedicadas, viabilizando um painel administrativo autenticado para inserir, editar e excluir esses dados diretamente pelo site.',
    atuacao:     [
      'Atuei como FullStack em todas as camadas do projeto — frontend, rotas HTTP e backend',
      'Estruturei o layout responsivo da página, com seções de apresentação, formação, cursos, skills, projetos e contato',
      'Implementei o painel administrativo protegido por senha (autenticação simples), restringindo o acesso às funcionalidades de CRUD',
      'Desenvolvi os formulários de Formação, Cursos, Skills e Projetos com lógica de adicionar/editar/cancelar edição, reaproveitando o mesmo formulário para criação e atualização',
      'Implementei o filtro dinâmico de projetos por categoria (Acadêmico, API, Pessoal)',
      'Testei as rotas HTTP (GET/POST/PUT/DELETE) com Thunder Client antes da integração final',
      'Desenvolvi o formulário de contato com validação',
      'Integrei o frontend ao backend em Flask, consumindo as rotas GET/POST/PUT/DELETE para persistir os dados nas 4 tabelas do MySQL',
    ],
    imagem:      ['assets/images/projects/academicos/4/proj-4.1-portfcrud.png', 'assets/images/projects/academicos/4/proj-4.2-portfcrud.png', 'assets/images/projects/academicos/4/proj-4.3-portfcrud.png', 'assets/images/projects/academicos/4/proj-4.4-portfcrud.png'],
    video:       'assets/images/projects/academicos/4/proj-4.v-portfcrud.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/Portfolio-Terminal',
      deploy: 'https://portfolio3-wagner.vercel.app/',
    }
  },

  {
    slug:        'aerocode cli',
    nome:        'Aerocode CLI',
    subtitulo:   'Sistema de Linha de Comando para Gestão de Produção de Aeronaves',
    periodo:     '1º sem 2026',
    semestre:    '2º sem · DSM',
    categoria:   'academico',
    funcao:      'BackEnd',
    stack:       ['TypeScript', 'Node.js', 'POO', 'JSON'],
    empresa:     '',
    metodologia: '',
    descricao:   'MVP em sistema de linha de comando (CLI) que simula o processo de produção aeronáutica do cadastro à entrega, com autenticação e controle de acesso por perfis.',
    problema:    'Modelar um processo industrial complexo aplicando POO, modularização e persistência de dados sem banco de dados externo.',
    solucao:     'CLI modular com autenticação por perfis, controle de aeronaves, peças, etapas de produção, testes e funcionários. Dados persistidos em arquivos JSON.',
    atuacao:     [
      'Arquitetura e modelagem de classes (POO)',
      'Implementação das funcionalidades (CLI)',
      'Persistência de dados em arquivos JSON',
      'Testes manuais',
    ],
    imagem:      ['assets/images/projects/academicos/2/proj-2.0-aerocode.cli.png', 'assets/images/projects/academicos/2/proj-2.1-aerocode.cli.png'],
    video:       'assets/images/projects/academicos/2/proj-2.v-aerocode.cli.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/AV1',
      deploy: '',
    }
  },

  {
    slug:        'portfolio',
    nome:        'Portfólio',
    subtitulo:   'Site Portfólio Pessoal',
    periodo:     '2º sem 2025',
    semestre:    '1º sem · DSM',
    categoria:   'academico',
    funcao:      'FrontEnd',
    stack:       ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    empresa:     '',
    metodologia: '',
    descricao:   'Portfólio pessoal desenvolvido como projeto acadêmico, explorando boas práticas de desenvolvimento web, responsividade e organização de CSS modular.',
    problema:    'Criar uma presença digital profissional que apresente projetos, competências e trajetória de forma clara para recrutadores e pares técnicos.',
    solucao:     'Site estático multi-página com CSS modular, navbar responsiva, seção de projetos com modal, timeline de eventos e página de CV para impressão.',
    atuacao:     'Desenvolvimento integral: estrutura HTML, estilização CSS modular, lógica JS vanilla e deploy via Vercel.',
    imagem:      ['assets/images/projects/academicos/1/proj-1.0-portf.png', 'assets/images/projects/academicos/1/proj-1.1-portf.png', 'assets/images/projects/academicos/1/proj-1.2-portf.png'],
    video:       'assets/images/projects/academicos/1/proj-1.v-portf.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/portfolio-estatico',
      deploy: 'https://portfolio-wagner-nu.vercel.app',
    }
  },

  {
    slug:        'pessoal-ws',
    nome:        'WS Art&Decor',
    subtitulo:   'Site pessoal',
    periodo:     '2º sem 2025',
    semestre:    '1º sem · DSM',
    categoria:   'academico',
    funcao:      'FrontEnd',
    stack:       ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
    empresa:     '',
    metodologia: '',
    descricao:   'Projeto acadêmico representando o primeiro contato com o desenvolvimento de aplicações web, envolvendo a criação de um site pessoal e a aplicação de conceitos básicos de front-end, experiência do usuário e design digital.',
    problema:    'Como engenheiro em transição de carreira para a área de TI, sem experiência prévia em programação, era necessário dar o primeiro passo prático no desenvolvimento web — sair da teoria e aplicar, pela primeira vez, os fundamentos de HTML e CSS em um projeto real e completo.',
    solucao:     'Site institucional fictício de 3 páginas (Home, Quem Somos e Contato) para uma marca de decoração artesanal, marcando o primeiro contato hands-on com HTML e CSS, com apoio do Bootstrap para agilizar a estilização e responsividade, e um pouco de JavaScript para interações pontuais. Publicado via Vercel.',
    atuacao:     [
      'Projeto introdutório de desenvolvimento web com foco em UX e design digital',
      'Estruturei as páginas em HTML (Home, Quem Somos, Contato), com navegação entre elas',
      'Apliquei estilização em CSS para layout, tipografia e apresentação de imagens/vídeo de produtos',
      'Organizei o conteúdo institucional (história da marca, catálogo de produtos, dados de contato)',
    ],
    imagem:      'assets/images/projects/academicos/0/proj-0-site.png',
    links: {
      github: 'https://github.com/Costa-Wagner/WS.start',
      deploy: 'https://ws-start-ten.vercel.app/',
    }
  },

  // ── PESSOAL ──────────────────────────────────────────────────────────
  {
    slug:        'pessoal-portfolio',
    nome:        'Portfólio',
    subtitulo:   'Portfólio Gamer',
    periodo:     '1º sem 2026',
    semestre:    '',
    categoria:   'pessoal',
    funcao:      'FrontEnd',
    stack:       ['HTML5', 'CSS3', 'JavaScript'],
    empresa:     '',
    metodologia: '',
    descricao:   'Portfólio pessoal com estética de jogo retrô (anos 80, terminais antigos, grids neon), desenvolvido como projeto particular de front-end/design, sem integração com backend.',
    problema:    'Portfólios acadêmicos tradicionais costumam seguir um padrão visual mais formal e previsível (cores neutras, layout corporativo), o que limita a diferenciação e a expressão de identidade pessoal do desenvolvedor.',
    solucao:     'Proposta de um portfólio com identidade visual alternativa, inspirada em estética retrô/arcade (terminais antigos, grids neon, tipografia pixelada e navegação temática como "Select Stage" e "Press Start to Play Again"), fugindo um pouco do padrão tradicional de portfólios acadêmicos. O projeto manteve as mesmas seções essenciais (Sobre, Formação, Skills, Projetos, Contato), mas com foco total na experiência visual e na exploração de front-end, desenvolvido como projeto pessoal independente.',
    atuacao:     [
      'Atuei como front-end e pela concepção visual do projeto',
      'Criei a identidade visual retrô/arcade (terminal, neon, tipografia pixelada) e toda a estrutura de navegação temática ("Select Stage", "Press Start to Play Again")',
      'Estruturei as seções em HTML/CSS/JS puro, reaproveitando o conteúdo de formação, skills e projetos do portfólio original, adaptado à nova estética',
      'Optei conscientemente por manter o escopo estático (sem CRUD/backend), por ser um projeto pessoal paralelo à proposta da disciplina',
    ],
    imagem:      ['assets/images/projects/pessoais/1/proj-1.1-portfgame.png', 'assets/images/projects/pessoais/1/proj-1.2-portfgame.png', 'assets/images/projects/pessoais/1/proj-1.3-portfgame.png'],
    video:       'assets/images/projects/pessoais/1/proj-1.v-portfgame.mp4',
    links: {
      github: 'https://github.com/Costa-Wagner/portfolio-game',
      deploy: 'https://portfolio-game-pi-seven.vercel.app/',
    }
  }

];

// ── Utilitários ────────────────────────────────────────────────────────
function getPorCategoria(categoria) {
  return projetos.filter(p => p.categoria === categoria);
}

function getPorSlug(slug) {
  return projetos.find(p => p.slug === slug);
}

function getPeriodosOrdenados(categoria) {
  const itens    = getPorCategoria(categoria);
  const periodos = [...new Set(itens.map(p => p.periodo))];
  return periodos.sort((a, b) => {
    const parse = str => {
      const parts = str.split(' ');
      const sem   = parts[0];
      const ano   = parseInt(parts[parts.length - 1]);
      return ano * 10 + (sem === '2º' ? 1 : 0);
    };
    return parse(a) - parse(b);
  });
}