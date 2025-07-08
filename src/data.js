// src/data.js

export const headerData = {
  name: "Bruna Bittencourt",
  title: "Professora de Inglês",
  buttonText: "Agendar Aula"
};

export const heroData = {
  badgeText: "Professora Especializada",
  headline: "Você se sente travado para falar inglês? Sua fluência começa aqui!",
  description: "Entendo a dificuldade de quem se sente travado com o inglês. Minhas aulas são dinâmicas e sob medida para todas as idades e objetivos, do reforço escolar à conversação avançada. Ofereço acompanhamento personalizado para o seu sucesso, transformando a dificuldade em confiança. ",
  ctaPrimary: "Quero Aprender!",
  ctaSecondary: "Saber Mais",
  features: [
    "Aulas Online e Presenciais em BH",
    "Material Didático Exclusivo e Adaptado"
  ],
  profile: {
    name: "Bruna Bittencourt",
    qualifications: [
      "Pedagogia e Direito",
      "Pós-graduação em Psicopedagogia",
      "Especialista em Inglês"
    ]
  },
  backgroundImageUrl: "/assets/englishday.png"
};

// NOVO: Objeto de dados para a seção 'Sobre Mim'
export const aboutData = {
  title: "Minha História e Paixão por Ensinar",
  intro: "Conheça minha trajetória e o que me motiva a ensinar com paixão e dedicação, compreendendo as necessidades individuais de cada aluno.",
  milestones: [ // NOVO: Mudei para uma lista de marcos
    {
      type: "inspiration",
      headline: "Inspiração para Ensinar Inglês",
      content: "Desde criança, sempre tive um gosto natural por ensinar e compartilhar conhecimento. Houve um momento decisivo na minha carreira quando, ao mudar de advogada para professora, percebi que o inglês se encaixava perfeitamente com minha paixão por lecionar e meu conhecimento da língua.",
      icon: "Lightbulb"
    },
    {
      type: "experience",
      headline: "Experiências Marcantes com o Idioma",
      content: "Minha primeira experiência verdadeiramente marcante com o inglês foi um intercâmbio para a Austrália quando tinha apenas 16 anos, em 2002. Anos depois, em 2017, uma viagem aos EUA, onde tive a oportunidade de estagiar em duas escolas Waldorf, aprofundou ainda mais minha conexão e aprendizado.",
      icon: "Plane"
    },
    {
      type: "education",
      headline: "O Valor da Psicopedagogia no Ensino Personalizado",
      content: "Decidi me especializar em Psicopedagogia para compreender melhor as dificuldades de aprendizado e me tornar uma professora mais completa e eficaz. Essa pós-graduação foi fundamental na minha transição de carreira do Direito para a educação, e só depois completei minha graduação em Pedagogia. Meu caminho acadêmico: Direito → Psicopedagogia → Pedagogia. Essa formação me permite oferecer um ensino verdadeiramente personalizado, abordando também as questões emocionais ligadas ao aprendizado.",
      icon: "GraduationCap"
    },
    {
      type: "reward",
      headline: "Minha Maior Recompensa: Sua Evolução",
      content: "Ver a evolução de cada aluno, o aumento da sua autoestima e a confiança crescendo são as maiores recompensas que sinto ao ensinar. É gratificante testemunhar o progresso, como quando um aluno que esperava tirar 2, alcança a maior nota da turma! Minha maior alegria é transformar dificuldades em sucesso e paixão pelo aprendizado.",
      icon: "Heart"
    }
  ],
  certifications: "Antes do Direito, estudei muitos anos na Cultura Inglesa e obtive os certificados FCE e CAE de Cambridge.",
  imageUrl: "/assets/bruna.jpeg"
};

export const servicesData = {
  title: "Serviços Especializados e Personalizados",
  description: "Metodologia adaptada para cada idade, nível de conhecimento e necessidade. Atendemos desde o reforço escolar até a conversação avançada.",
  imageUrl: "/assets/ingles.jpg",
  services: [
    {
      title: "Inglês para Crianças",
      subtitle: "Presencial (1º ao 9º ano) - BH Centro-Sul",
      description: "Apoio pedagógico especializado para melhorar o desempenho escolar em inglês, com foco em desenvolver a paixão pelo idioma desde cedo. Aulas presenciais em Belo Horizonte (região centro-sul).",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Inglês para Adolescentes e Adultos",
      subtitle: "Online e Presencial (Todos os Níveis)",
      description: "Aulas personalizadas com foco na fluência conversacional e no desenvolvimento de todas as habilidades (leitura, escrita e escuta). Atendo desde iniciantes até níveis avançados que buscam aprimorar a conversação e escrita. Opções online para flexibilidade e presenciais em Belo Horizonte (região centro-sul).",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Reforço Escolar de Português (Leitura e Escrita)",
      subtitle: "Presencial (1º ao 9º ano) - BH Centro-Sul",
      description: "Suporte pedagógico para aprimoramento da leitura e produção de texto para alunos do ensino fundamental, com aulas presenciais na região centro-sul de Belo Horizonte.",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Reforço Escolar de Matemática",
      subtitle: "Presencial (1º ao 9º ano) - BH Centro-Sul",
      description: "Suporte pedagógico em matemática para alunos do ensino fundamental, com aulas presenciais na região centro-sul de Belo Horizonte.",
      color: "from-blue-500 to-green-600"
    }
  ]
};

export const qualificationsData = {
  title: "Formação Acadêmica e Expertise Psicopedagógica",
  qualifications: [
    {
      title: "Psicopedagogia",
      description: "Especialização fundamental para identificar e intervir nas dificuldades de aprendizagem, promovendo o desenvolvimento cognitivo e emocional dos alunos. Essencial para um ensino verdadeiramente personalizado, que considera o aluno como um todo.",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Pedagogia",
      description: "Sólida base em teorias e práticas educacionais, focada na criação de ambientes de aprendizagem dinâmicos e inclusivos, adaptados às necessidades individuais.",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Direito",
      description: "Conhecimento aprofundado em aspectos legais e éticos, proporcionando uma perspectiva abrangente para a atuação profissional e a cidadania.",
      color: "from-blue-500 to-green-600"
    }
  ]
};

export const testimonialsData = {
  title: "O que dizem nossos Alunos e Responsáveis: Histórias Reais de Sucesso",
  testimonials: [
    {
      name: "Débora",
      role: "Aluna",
      text: "Bruna querida, amei a aula! Mesmo 'tropeçando', estou gostando muito. E sou muito feliz de ser sua aluna! 😍",
      rating: 5
    },
    {
      name: "Mãe de Aluno",
      role: "Responsável",
      text: "Meu filho achou que ia tirar 2, e a nota geral de inglês dele foi a maior! Ele está bem feliz agora! 🙏",
      rating: 5
    },
    {
      name: "Ex-aluno(a)",
      role: "Antigo Colega de Escola",
      text: "Fico muito feliz em te encontrar novamente. Suas aulas foram incrivelmente importantes na minha vida, você não tem ideia! ✨",
      rating: 5
    },
    {
      name: "Mãe de Aluno",
      role: "Responsável",
      text: "Uauuuu! Meu filho arrasou na redação! Parabéns, Bruna! 🥳",
      rating: 5
    },
    {
      name: "Clarice",
      role: "Aluna",
      text: "Amei a aula! Mesmo enferrujada, sei que a Bruna vai me ajudar muito. Muito obrigada pela sua disponibilidade!",
      rating: 5
    },
    {
      name: "Maria Clara",
      role: "Aluna",
      text: "BRUNAAA! Passei em português! Tirei 70 na prova. Muito obrigada por tudo!",
      rating: 5
    },
    {
      name: "Maria Clara",
      role: "Aluna",
      text: "Hello Bruna! Achei uma das provas mais fáceis do ano com tudo que estudamos. Obrigada! Mal posso esperar para mandar a nota!",
      rating: 5
    },
    {
      name: "Mãe de Aluno",
      role: "Responsável",
      text: "Muito obrigada pelo carinho e dedicação! Meus filhos amaram tê-la como professora! THANK YOU! 🥰",
      rating: 5
    },
    {
      name: "Mãe de Henrique",
      role: "Responsável",
      text: "Henrique conseguiu recuperar a nota! Ficamos muito felizes com esse resultado em pouco tempo de aula com você. Muito grata!",
      rating: 5
    },
    {
      name: "Responsável de Aluno",
      role: "Responsável",
      text: "Nós que agradecemos muito pelo suporte! Foi essencial para ele recuperar a confiança e ter melhores resultados. Muito obrigada de coração pelo cuidado e dedicação!",
      rating: 5
    },
    {
      name: "Ana Cláudia",
      role: "Mãe de Henrique",
      text: "Henrique tirou 4,5 em 5,0 na atividade! Ele chegou da escola me mostrando com a maior alegria. Muito obrigada pela sua ajuda, Bruna! Estamos felizes demais! 😀",
      rating: 5
    }
  ]
};

export const ctaData = {
  headline: "Pronto para Começar sua Jornada Rumo à Fluência?",
  description: "Agende sua aula experimental gratuita e descubra como a metodologia personalizada da Bruna pode te ajudar a dominar o inglês e alcançar seus objetivos.",
  buttonPrimary: "Agendar Aula Gratuita",
  buttonSecondary: "Falar com Bruna no WhatsApp"
};

// ATUALIZADO: Objeto de dados para a seção de contato
export const contactData = {
  title: "Entre em Contato",
  contacts: [
    {
      title: "Telefone",
      info: "(31) 98849-7222",
      color: "text-blue-600",
      link: "tel:+5531988497222"
    },
    {
      title: "E-mail",
      info: "brunabittaraujo@gmail.com",
      color: "text-green-600",
      link: "mailto:brunabittaraujo@gmail.com"
    },
    {
      title: "WhatsApp",
      info: "Clique para conversar",
      color: "text-green-600",
      link: "https://wa.me/5531988497222"
    },
    {
      title: "Instagram",
      info: "@dicasdaprofbruna",
      color: "text-blue-500",
      link: "https://www.instagram.com/dicasdaprofbruna"
    }
  ]
};

export const footerData = {
  name: "Bruna Bittencourt",
  tagline: "Professora de Inglês e Psicopedagoga",
  description: "Transformando vidas através do ensino de inglês e reforço escolar com metodologia personalizada e humanizada, focada no desenvolvimento integral do aluno.",
  copyright: "© 2025 Bruna Bittencourt. Todos os direitos reservados.",
  links: [
    { name: "Início", href: "#hero" },
    { name: "Sobre Mim", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" }
  ],
  socials: [
    { name: "WhatsApp", icon: "MessageCircle", href: "https://wa.me/5531988497222" },
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/dicasdaprofbruna" },
  ],
};