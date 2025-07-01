// src/data.js

export const headerData = {
  name: "Bruna Bittencourt",
  title: "Professora de Inglês",
  buttonText: "Agendar Aula"
};

export const heroData = {
  badgeText: "Professora Especializada",
  headline: "Sua Fluência em Inglês Começa Aqui",
  description: "Aulas dinâmicas e sob medida para todas as idades e objetivos. Do reforço escolar à conversação avançada, com acompanhamento personalizado para seu sucesso.",
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
  intro: "Conheça minha trajetória e o que me motiva a ensinar com paixão e dedicação.",
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
      headline: "O Valor da Psicopedagogia no Ensino",
      content: "Decidi me especializar em Psicopedagogia para compreender melhor as dificuldades de aprendizado e me tornar uma professora mais completa e eficaz. Essa pós-graduação foi fundamental na minha transição de carreira do Direito para a educação, e só depois completei minha graduação em Pedagogia. Meu caminho acadêmico: Direito → Psicopedagogia → Pedagogia.",
      icon: "GraduationCap"
    },
    {
      type: "reward",
      headline: "Minha Maior Recompensa",
      content: "Ver a evolução de cada aluno, o aumento da sua autoestima e a confiança crescendo são as maiores recompensas que sinto ao ensinar. É gratificante testemunhar o progresso e a paixão pelo aprendizado.",
      icon: "Heart"
    }
  ],
  certifications: "Antes do Direito, estudei muitos anos na Cultura Inglesa e obtive os certificados FCE e CAE de Cambridge.",
  imageUrl: "/assets/bruna.jpeg" // Mantenha a imagem caso queira usá-la em algum lugar diferente depois
};

export const servicesData = {
  title: "Serviços Especializados",
  description: "Metodologia personalizada para cada idade e nível de conhecimento",
  imageUrl: "/assets/ingles.jpg",
  services: [
    {
      title: "Inglês para Crianças",
      subtitle: "Presencial (1º ao 9º ano) - BH Centro-Sul",
      description: "Apoio pedagógico especializado para melhorar o desempenho escolar em inglês. Aulas presenciais em Belo Horizonte (região centro-sul).",
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Inglês para Adolescentes e Adultos",
      subtitle: "Online e Presencial",
      description: "Aulas personalizadas com foco na fluência conversacional. Opções online para flexibilidade e presenciais em Belo Horizonte (região centro-sul).",
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
  title: "Formação Acadêmica",
  qualifications: [
    {
      title: "Pedagogia",
      description: "Sólida base em teorias e práticas educacionais, focada na criação de ambientes de aprendizagem dinâmicos e inclusivos.", // Texto melhorado
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Direito",
      description: "Conhecimento aprofundado em aspectos legais e éticos, proporcionando uma perspectiva abrangente para a atuação profissional e a cidadania.", // Texto melhorado
      color: "from-blue-500 to-green-600"
    },
    {
      title: "Psicopedagogia",
      description: "Especialização em estratégias para identificar e intervir nas dificuldades de aprendizagem, promovendo o desenvolvimento cognitivo e emocional dos alunos.", // Texto melhorado
      color: "from-blue-500 to-green-600"
    }
  ]
};

export const testimonialsData = {
  title: "O que dizem nossos Alunos",
  testimonials: [
    {
      name: "Maria Silva",
      role: "Mãe da Ana (8 anos)",
      text: "A Ana melhorou muito em inglês com as aulas da Bruna. Ela adora as atividades criativas!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Pai do Pedro (12 anos)",
      text: "Excelente professora! O Pedro passou de odiou inglês para ser sua matéria favorita.",
      rating: 5
    },
    {
      name: "Carla Oliveira",
      role: "Estudante universitária",
      text: "As aulas particulares me ajudaram muito a melhorar minha fluência. Super recomendo!",
      rating: 5
    }
  ]
};

export const ctaData = {
  headline: "Pronto para Começar sua Jornada?",
  description: "Agende sua aula experimental gratuita e descubra como podemos ajudar você a dominar o inglês",
  buttonPrimary: "Aula Gratuita",
  buttonSecondary: "Falar no WhatsApp"
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
  title: "Professora de Inglês",
  description: "Transformando vidas através do ensino de inglês com metodologia personalizada e humanizada.",
  copyright: "© 2025 Bruna Bittencourt. Todos os direitos reservados."
};