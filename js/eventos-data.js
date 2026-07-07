/* ══════════════════════════════════════════════════════════════════
   eventos-data.js — Wagner Gonçalves Costa
   Fonte única de dados dos eventos (maratonas, feiras, encontros).

   Por quê separado do HTML: mesmo racional de projetos-data.js —
   isola o conteúdo da apresentação, facilitando a migração futura
   para React (basta trocar "const" por "export const" e importar).
   ══════════════════════════════════════════════════════════════════ */

/* ── Rótulos de categoria — hoje NÃO aparecem no card (instituição
   já cobre essa informação visualmente), mas o campo "categoria"
   continua nos dados como chave estruturada para permitir filtro
   futuro (ex: tabs por instituição) sem reescrever os eventos. ── */
const categoriaInfoEventos = {
  'fatec':      { label: 'FATEC' },
  'pit':        { label: 'PIT' },
  'python-sjc': { label: 'Python SJC' },
};

/* ── Lista de eventos — mais antigo ou mais recente, tanto faz aqui;
   a ordenação de exibição é feita por getEventosOrdenados(). ── */
const eventosData = [

  {
    slug: 'feira-solucoes-13',
    nome: 'XIII Feira de Soluções',
    instituicao: 'FATEC',
    categoria: 'fatec',
    periodo: 'Jun/2026',
    ordenacao: 202606,
    descricao: 'Apresentação do SIGNA · Sistema Integrado de Gestão de Normas Aeronáuticas, sistema desenvolvido em parceria com a AKAER para gerenciamento de normas técnicas aeronáuticas. O projeto oferece busca avançada, controle de versões, categorização de documentos, administração de usuários e gestão de solicitações, contribuindo para a otimização de processos internos e acesso às informações técnicas.',
    imagens: ['./assets/images/events/feira-solucoes/2026/26.1/fsolucoes-26.1.png', './assets/images/events/feira-solucoes/2026/26.1/fsolucoes-26.2.png', './assets/images/events/feira-solucoes/2026/26.1/fsolucoes-26.3.png']
  },

  {
    slug: 'sprint-3-api',
    nome: 'Apresentação da 3º Sprint da API',
    instituicao: 'FATEC · AKAER',
    categoria: 'fatec',
    periodo: 'Mai/2026',
    ordenacao: 202605,
    descricao: 'Apresentação da última Sprint do projeto, que consistiu no desenvolvimento de uma plataforma web para gestão de requisitos normativos aeronáuticos. A solução foi desenvolvida para apoiar e facilitar os engenheiros e especialistas na melhor organização e rastreabilidade na consulta a normas regulatórias durante o desenvolvimento dos projetos aeronáuticos da empresa.',
    imagens: ['./assets/images/events/api/2026/26.1/api-akaer-26.png']
  },

  {
    slug: 'maratona-interna-fatec',
    nome: 'Maratona Interna de Programação',
    instituicao: 'FATEC',
    categoria: 'fatec',
    periodo: 'Abr/2026',
    ordenacao: 202604,
    descricao: 'Integrando a equipe ImportGambiarra, participei de mais uma Maratona Interna de Programação da FATEC/SJC. O evento reuniu 41 equipes em um desafio intensivo de lógica de programação, no qual utilizamos Python para resolução dos problemas. A experiência proporcionou o aprimoramento do raciocínio lógico, além de fortalecer habilidades de colaboração e desenvolvimento ágil de soluções.',
    imagens: ['./assets/images/events/maratonas/2026/26.1/maratona.26.png']
  },

  {
    slug: 'feira-solucoes-12',
    nome: 'XII Feira de Soluções',
    instituicao: 'FATEC',
    categoria: 'fatec',
    periodo: 'Dez/2025',
    ordenacao: 202512,
    descricao: 'No dia 04/12, participei da XII Feira de Soluções (FATEC/SJC), apresentando junto à minha equipe JanoSys Technologies um projeto baseado na análise dos dados do Censo 2010 e 2022. O projeto teve como objetivo criar uma dashboard interativa que facilitasse a visualização dos dados do IBGE, apoiando o cliente na tomada de decisões sobre a melhor distribuição dos recursos públicos no município. Uma experiência rica de aprendizado técnico e de trabalho em equipe.',
    imagens: ['./assets/images/events/feira-solucoes/2025/25.2/fsolucoes-25.png']
  },

  {
    slug: 'science-business-connection',
    nome: 'Science & Business Connection',
    instituicao: 'PIT · Parque de Inovação Tecnológica',
    categoria: 'pit',
    periodo: 'Out/2025',
    ordenacao: 202510,
    descricao: '3ª edição da Science & Business Connection, realizada no PIT. Um evento marcado por tecnologia, inovação e conhecimento, com destaque para a palestra do iFood e da Blip sobre o futuro do trabalho na era da IA, além da abordagem da J&J sobre os riscos relacionados à cibersegurança. Prestigiei diversos expositores, em especial a FATEC-SJC — um ambiente que reforça a motivação para estudar, aprender e descobrir os caminhos que a programação pode abrir.',
    imagens: ['./assets/images/events/feiras/2025/25.2/science-business-25.png']
  },

  {
    slug: 'pyday-outubro',
    nome: 'PyDay',
    instituicao: 'Python SJC',
    categoria: 'python-sjc',
    periodo: 'Out/2025',
    ordenacao: 202510,
    descricao: 'Evento de Python com palestras que trouxeram diferentes perspectivas sobre tecnologia, inovação e aplicações reais da linguagem, além de muito networking e insights valiosos. O PyDay SJC reforça o propósito de colocar pessoas acima da tecnologia, fortalecendo conexões e criando oportunidades por meio da troca de conhecimento.',
    imagens: ['./assets/images/events/feiras/2025/25.2/pyday-25.png']
  },

  {
    slug: 'maratona-fatec-outubro',
    nome: 'Maratona de Programação',
    instituicao: 'FATEC',
    categoria: 'fatec',
    periodo: 'Out/2025',
    ordenacao: 202510,
    descricao: 'Minha primeira participação em maratona de codificação, organizada pela FATEC São José dos Campos - Prof. Jessen Vidal, reunindo mais de 100 competidores em cerca de 50 equipes em um desafio intenso de resolução de problemas com Python. Uma experiência incrível de aprendizado, trabalho em equipe e superação — a equipe PyTrio não ganhou a disputa, mas ganhou experiência.',
    imagens: ['./assets/images/events/maratonas/2025/25.2/maratona.25.png']
  },

  {
    slug: 'pyday-setembro',
    nome: 'PyDay',
    instituicao: 'Python SJC',
    categoria: 'python-sjc',
    periodo: 'Set/2025',
    ordenacao: 202509,
    descricao: 'Evento da Python SJC com palestras focadas em aplicações práticas, empresas e diferentes cargos profissionais que usam a linguagem. Uma boa oportunidade para reforçar o vasto horizonte de uso do Python no mercado e entender melhor o perfil dos profissionais da área.',
    imagens: ['./assets/images/events/feiras/2025/25.2/pythonsjc-25.png']
  },

  {
    slug: 'innovation-week-2025',
    nome: 'Innovation Week 2025',
    instituicao: 'PIT · Parque de Inovação Tecnológica',
    categoria: 'pit',
    periodo: 'Set/2025',
    ordenacao: 202509,
    descricao: 'Visita à Innovation Week 2025, no PIT · Parque de Inovação Tecnológica São José dos Campos. Junto com colegas da FATEC São José dos Campos - Prof. Jessen Vidal e guiados pelo Prof. Dr. Reinaldo Arakaki, conheci diversas empresas e expositores do parque, que apresentaram ideias inovadoras e soluções que estão moldando o futuro — uma experiência que reforçou a motivação para aprender e explorar novas tecnologias.',
    imagens: ['./assets/images/events/feiras/2025/25.2/innovation-week-25.png']
  },

];

/* ══════════════════════════════════════════════════════════════════
   Funções utilitárias — mesmo racional de projetos-data.js:
   já ficam prontas para virar "export function" na migração React.
   ══════════════════════════════════════════════════════════════════ */

/* Retorna os eventos do mais recente para o mais antigo */
function getEventosOrdenados() {
  return eventosData.slice().sort(function (a, b) {
    return b.ordenacao - a.ordenacao;
  });
}

/* Busca um evento específico pelo slug */
function getPorSlugEvento(slug) {
  return eventosData.find(function (e) {
    return e.slug === slug;
  });
}

/* Filtra eventos por categoria — pronta para uso caso tabs/filtro
   sejam adicionados no futuro, sem precisar mexer nos dados */
function getPorCategoriaEvento(categoria) {
  return getEventosOrdenados().filter(function (e) {
    return e.categoria === categoria;
  });
}