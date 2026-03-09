import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  MessageSquare, 
  Briefcase,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  Instagram
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yGradient = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Para Quem', href: '#publico' },
  ];

  const services = [
    {
      title: 'Gestão de Tráfego Pago',
      description: 'Campanhas otimizadas no Google e Meta Ads focadas em maximizar seu ROI e atrair clientes qualificados.',
      icon: <Target className="w-full h-full" />,
    },
    {
      title: 'Geração de Leads',
      description: 'Sistemas previsíveis para capturar contatos de potenciais clientes interessados no seu produto ou serviço.',
      icon: <Users className="w-full h-full" />,
    },
    {
      title: 'Estruturação de Funis de Vendas',
      description: 'Mapeamento e otimização de toda a jornada do cliente para aumentar drasticamente suas taxas de conversão.',
      icon: <TrendingUp className="w-full h-full" />,
    },
    {
      title: 'Estratégia Digital',
      description: 'Planejamento completo baseado em dados para posicionar sua marca e dominar seu mercado de atuação.',
      icon: <Lightbulb className="w-full h-full" />,
    },
    {
      title: 'Social Media Profissional',
      description: 'Criação de autoridade e retenção de público através de conteúdo intencional alinhado aos objetivos de venda.',
      icon: <MessageSquare className="w-full h-full" />,
    },
    {
      title: 'Representação Comercial',
      description: 'Atuamos como extensão do seu time, fechando negócios e gerenciando relacionamento com leads de alto valor.',
      icon: <Briefcase className="w-full h-full" />,
    },
  ];

  const marqueeItems = [
    'Gestão de Tráfego de Alta Performance',
    'Análise Estratégica Baseada em Dados',
    'Estruturação de Funis Complexos',
    'Escala para Negócios Locais',
    'Estratégia de Aquisição Global',
    'Crescimento de PMEs',
  ];

  const [activeCategory, setActiveCategory] = useState('Todos');

  const testimonials = [
    {
      initials: 'DR',
      role: 'Diretor Clínico',
      company: 'Saúde & Estética Premium',
      category: 'Médico',
      text: 'Estávamos estagnados no faturamento da clínica. Após a reestruturação do funil de vendas e gestão de tráfego focada em procedimentos de alto ticket, triplicamos nosso faturamento em 4 meses.',
    },
    {
      initials: 'CM',
      role: 'CEO',
      company: 'Empresa de Software (SaaS)',
      category: 'PME',
      text: 'A equipe não apenas rodou nossos anúncios, mas reestruturou toda a argumentação de vendas do nosso time comercial. A taxa de conversão dos leads saltou de 12% para impressionantes 38%.',
    },
    {
      initials: 'AP',
      role: 'Especialista',
      company: 'Infoprodutor High-Ticket',
      category: 'Infoprodutor',
      text: 'Lançar nossos infoprodutos era sempre uma aposta. Hoje, temos um perpétuo que roda com previsibilidade absurda e um ROI médio de 400%. O crescimento online é evidente.',
    },
    {
      initials: 'JF',
      role: 'Médico Especialista',
      company: 'Clínica de Dermatologia',
      category: 'Médico',
      text: 'A AXIS transformou nossa presença digital. O volume de agendamentos qualificados cresceu 150% no primeiro trimestre de parceria.',
    },
    {
      initials: 'LM',
      role: 'Fundador',
      company: 'Plataforma E-learning',
      category: 'Infoprodutor',
      text: 'A estratégia de tráfego para nossos lançamentos é impecável. Batemos recorde de vendas em 3 lançamentos consecutivos.',
    },
    {
      initials: 'RB',
      role: 'Proprietário',
      company: 'Rede de Franquias',
      category: 'PME',
      text: 'Escalar uma rede de franquias exige precisão. A AXIS nos deu a inteligência de dados necessária para expandir com segurança.',
    },
  ];

  const categories = ['Todos', 'Médico', 'Infoprodutor', 'PME'];

  const filteredTestimonials = activeCategory === 'Todos' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const whatsappUrl = "https://wa.me/5569992995353?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20atendimento.";

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white overflow-x-hidden">
      {/* HEADER */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white shadow-md border-gray-100' : 'bg-white/95 backdrop-blur-md border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative z-50">
          <a href="#" className="block hover:opacity-80 transition-opacity">
            <img src="https://lh3.googleusercontent.com/d/1li-mHjvrOi0naKce6dfngcRBPXJ_5_0d" alt="AXIS AGENCY Logo" className="h-8 md:h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-body-text items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* CTA Desktop */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-colors duration-300 rounded-full shadow-lg shadow-primary/30">
            ✅ Falar no WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-dark-text hover:text-primary focus:outline-none p-2 -mr-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto"
            >
              <nav className="flex flex-col space-y-6 text-xl font-display font-bold text-dark-text">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-primary transition-colors border-b border-gray-100 pb-4"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-whatsapp rounded-full shadow-lg shadow-whatsapp/30">
                  ✅ Falar no WhatsApp
                </a>
              </div>
              <div className="mt-auto pb-10 pt-8 border-t border-gray-100 text-sm text-body-text">
                <p>suporte@axysagency.com.br</p>
                <p className="mt-2 font-bold">(69) 99299-5353</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main-bg pt-24 md:pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: yImage }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1920&auto=format&fit=crop&fm=webp" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-10 grayscale scale-110" 
            referrerPolicy="no-referrer"
            // @ts-ignore
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <motion.div 
            style={{ y: yGradient }}
            className="absolute inset-0 hero-gradient"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 md:px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest"
          >
            Engenharia de Crescimento e Vendas
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.05] tracking-tighter text-dark-text mb-6 md:mb-8 mx-auto max-w-5xl"
          >
            Previsibilidade e <br className="hidden md:block"/> <span className="text-gradient">Escala em Vendas.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-body-text max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-4"
          >
            Desenvolvemos estratégias de marketing digital focadas exclusivamente em performance corporativa. Aumente seu faturamento e domine seu segmento de mercado.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0 w-full sm:w-auto"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-8 py-4 text-sm font-bold text-white bg-whatsapp rounded-full hover:bg-whatsapp-hover hover:scale-105 transition-all duration-300 shadow-xl shadow-whatsapp/20 flex items-center justify-center gap-2 text-center">
              ✅ Solicitar atendimento
            </a>
            <a href="#solucoes" className="w-full sm:w-auto px-6 md:px-8 py-4 text-sm font-bold text-dark-text bg-surface rounded-full hover:bg-gray-200 transition-colors duration-300 text-center">
              Conhecer a Metodologia
            </a>
          </motion.div>
        </div>
      </section>

      {/* AUTHORITY MARQUEE */}
      <div className="w-full py-8 md:py-12 dark-gradient-bg relative z-10 shadow-inner overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-content flex items-center gap-8 md:gap-16 font-display font-semibold text-lg md:text-2xl text-white/80 tracking-tight uppercase px-4 md:px-8">
            {marqueeItems.map((item, i) => (
              <span key={i} className="flex items-center gap-8 md:gap-16">
                {item} <span className="text-primary text-xl md:text-3xl">•</span>
              </span>
            ))}
          </div>
          <div className="marquee-content flex items-center gap-8 md:gap-16 font-display font-semibold text-lg md:text-2xl text-white/80 tracking-tight uppercase px-4 md:px-8" aria-hidden="true">
            {marqueeItems.map((item, i) => (
              <span key={i} className="flex items-center gap-8 md:gap-16">
                {item} <span className="text-primary text-xl md:text-3xl">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="solucoes" className="py-20 md:py-32 bg-surface relative z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-dark-text">Ecossistema de Soluções</h2>
            <p className="text-body-text text-base md:text-lg font-medium px-4 leading-relaxed">Pilares estratégicos baseados em dados para escalar sua operação e garantir o crescimento sustentável do seu negócio.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="service-card group"
              >
                <div className="icon-box mx-auto">
                  <div className="w-7 h-7 md:w-8 md:h-8 text-icon-color transition-colors duration-300 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-extrabold font-display text-dark-text mb-3 text-center">{service.title}</h4>
                <p className="text-body-text text-sm md:text-base leading-relaxed font-medium text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS (BENTO GRID) */}
      <section id="diferenciais" className="py-20 md:py-32 relative z-10 bg-main-bg">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-6xl font-extrabold tracking-tighter mb-4 md:mb-6 text-dark-text">A arquitetura por trás de <span className="text-primary">resultados extraordinários.</span></h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed font-medium">Não somos apenas uma agência. Somos o seu braço estratégico focado na geração implacável de novos clientes e aumento substancial de receita.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 modern-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-between items-center text-center group overflow-hidden relative min-h-[350px] md:min-h-0"
            >
              <div className="relative z-10 mb-8 md:mb-12">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 text-dark-text">Engenharia de Vendas</h3>
                <p className="text-body-text text-sm max-w-md font-medium mx-auto">O foco central de nossa operação não são métricas de vaidade, mas sim a criação de esteiras de vendas contínuas. Aumentamos a previsibilidade do seu caixa.</p>
              </div>
              <div className="relative z-10 h-32 md:h-40 w-full rounded-2xl overflow-hidden img-overlay shadow-lg mt-auto">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=70&w=800&auto=format&fit=crop&fm=webp" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Reunião de Vendas" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full">Alta Performance</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="modern-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-start items-center text-center group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="w-12 h-12 md:w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold mb-2 md:mb-3 text-dark-text relative z-10">Crescimento Acelerado</h3>
              <p className="text-body-text text-sm font-medium relative z-10">Metodologias ágeis de Growth para tracionar o seu online de forma exponencial em tempo recorde.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="modern-card rounded-[2rem] p-6 md:p-8 flex flex-col justify-start items-center text-center group relative overflow-hidden"
            >
              <div className="w-12 h-12 md:w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-extrabold mb-2 md:mb-3 text-dark-text relative z-10">Processos Validados</h3>
              <p className="text-body-text text-sm font-medium relative z-10">Executamos frameworks de aquisição e conversão testados nos mercados mais competitivos.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 modern-card rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left group overflow-hidden relative"
            >
              <div className="relative z-10 max-w-md w-full md:w-auto text-center md:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 text-dark-text">Geração Contínua</h3>
                <p className="text-body-text text-sm font-medium">Estruturamos campanhas que atraem apenas compradores potenciais, otimizando o tempo do seu time comercial e maximizando o ROI.</p>
              </div>
              <div className="hidden md:block relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=600&auto=format&fit=crop&fm=webp" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Analytics Dashboards" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="sobre" class="py-20 md:py-32 relative z-10 bg-main-bg overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 md:top-1/2 left-0 md:-translate-y-1/2 w-full max-w-[300px] h-[300px] md:max-w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            {/* Image Side */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full sm:w-3/4 md:w-2/3 lg:w-5/12 relative mx-auto"
            >
              <div className="absolute -inset-2 md:-inset-4 bg-primary/10 rounded-[2rem] md:rounded-[2.5rem] transform rotate-3 lg:-rotate-3 z-0 transition-transform hover:rotate-0 duration-500"></div>
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-surface aspect-[4/5]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Z0-1GfguJsGV8m86JM3Ll_L2ebiXWt-a" 
                  alt="Lucas Fernandes Arruda da Silva" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8 text-center">
                  <img src="https://lh3.googleusercontent.com/d/1li-mHjvrOi0naKce6dfngcRBPXJ_5_0d" alt="Logo AXIS" className="h-6 md:h-8 mx-auto mb-1 drop-shadow-md brightness-0 invert" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12 text-center flex flex-col items-center lg:items-center"
            >
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-dark-text max-w-2xl">A mente estratégica por trás da <span className="text-primary">AXIS.</span></h2>
              
              <div className="mb-8 text-center">
                <p className="text-dark-text font-extrabold text-lg md:text-xl tracking-tight">Lucas Fernandes Arruda da Silva</p>
                <p className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase mt-1">Criador da AXIS AGENCY</p>
              </div>

              <div className="space-y-6 text-body-text font-medium text-base md:text-lg leading-relaxed mb-10 text-center max-w-2xl">
                <p>Sou Gestor de Tráfego Pago e Especialista em Crescimento Digital, focado em ajudar empresas a gerar mais clientes, aumentar vendas e escalar resultados através de estratégias inteligentes de marketing online.</p>
                <p>Trabalho com análise de dados, planejamento estratégico e gestão profissional de anúncios, sempre com foco em performance, crescimento e resultados reais para cada cliente.</p>
              </div>

              <blockquote className="px-6 md:px-10 py-4 quote-border bg-linear-to-r from-primary/5 to-transparent italic text-dark-text text-lg md:text-2xl font-display font-semibold mb-10 leading-snug text-center max-w-2xl">
                "Meu objetivo é transformar investimento em tráfego pago em mais autoridade, mais oportunidades e mais faturamento para cada cliente."
              </blockquote>

              <div className="flex justify-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-6 md:px-8 py-4 text-sm font-bold text-white bg-whatsapp rounded-full hover:bg-whatsapp-hover hover:scale-105 transition-all duration-300 shadow-xl shadow-whatsapp/20">
                  ✅ Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section id="publico" className="py-20 md:py-32 relative z-10 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center flex flex-col items-center"
            >
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter mb-6 text-dark-text">Projetado para <span className="text-primary">negócios sérios.</span></h2>
              <p className="text-body-text text-base md:text-lg mb-10 leading-relaxed font-medium max-w-xl">Não atendemos qualquer projeto. Nossa estrutura de alta performance requer parceiros que estejam preparados para receber um fluxo constante de novos clientes e alavancar vendas.</p>
              
              <ul className="space-y-8 text-center max-w-lg">
                {[
                  { title: 'Empresas Locais e PMEs', desc: 'Acabe com a dependência do "boca a boca" e estabeleça canais de aquisição previsíveis em sua região ou nacionalmente.' },
                  { title: 'Produtores Digitais (Infoprodutos)', desc: 'Escala global para cursos e mentorias através de lançamentos e funis perpétuos matematicamente otimizados.' },
                  { title: 'Profissionais Liberais', desc: 'Posicionamento premium para médicos, advogados, arquitetos e consultores que desejam atrair clientes high-ticket.' }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col items-center group">
                    <span className="w-3 h-3 mb-3 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <div>
                      <h5 className="font-extrabold text-dark-text text-lg md:text-xl mb-2">{item.title}</h5>
                      <p className="text-sm md:text-base text-body-text font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden relative shadow-2xl border border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=70&w=1000&auto=format&fit=crop&fm=webp" 
                className="w-full h-full object-cover" 
                alt="Consultoria e Estratégia" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-xl border border-white/20">
                  <p className="font-display font-extrabold text-lg md:text-xl text-dark-text">Parcerias Estratégicas</p>
                  <p className="text-xs md:text-sm text-body-text font-medium mt-1">Crescimento lado a lado com nossos clientes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-32 bg-main-bg relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tighter mb-3 md:mb-4 text-dark-text">O Padrão <span className="text-primary">AXIS.</span></h2>
            <p className="text-body-text text-base md:text-lg font-medium mb-8">A autoridade se constrói com resultados inquestionáveis.</p>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                      : 'bg-surface text-body-text hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((t, i) => (
                <motion.div 
                  key={t.company}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="modern-card p-6 md:p-8 rounded-2xl relative flex flex-col"
                >
                  <div className="text-primary flex justify-center gap-1 mb-4 md:mb-6 text-lg md:text-xl">
                    ★★★★★
                  </div>
                  <p className="text-body-text text-sm italic leading-relaxed mb-6 font-medium text-center">"{t.text}"</p>
                  <div className="flex flex-col items-center gap-4 border-t border-gray-200 pt-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-extrabold font-display text-primary flex-shrink-0">{t.initials}</div>
                    <div className="text-center">
                      <p className="text-sm font-extrabold text-dark-text">{t.role}</p>
                      <p className="text-xs text-body-text font-medium">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="pt-20 md:pt-32 pb-8 relative z-10 overflow-hidden dark-gradient-bg text-white">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center mb-16 md:mb-24"
          >
            <img src="https://lh3.googleusercontent.com/d/1li-mHjvrOi0naKce6dfngcRBPXJ_5_0d" alt="AXIS AGENCY Logo" className="h-12 md:h-16 w-auto mb-6 md:mb-8 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 md:mb-8 text-white">Pronto para dominar?</h2>
            
            <div className="w-full max-w-xl mb-12">
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-400`}
                    />
                    {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-400`}
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-1">
                  <textarea
                    placeholder="Sua Mensagem"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl focus:outline-none focus:border-primary transition-colors text-white placeholder:text-gray-400 resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary-hover disabled:bg-gray-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!isSubmitting && <ArrowUpRight className="w-5 h-5" />}
                </button>
                {isSuccess && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-whatsapp text-center font-medium"
                  >
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </motion.p>
                )}
              </form>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white bg-whatsapp rounded-full hover:bg-whatsapp-hover hover:scale-105 transition-all duration-300 shadow-xl shadow-whatsapp/30">
                ✅ Solicitar atendimento
              </a>
            </div>

            <div className="mt-10 md:mt-12 flex flex-col items-center gap-3">
              <p className="text-gray-300 font-medium flex items-center gap-2 text-sm md:text-base">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="break-all">suporte@axysagency.com.br</span>
              </p>
              <p className="text-gray-300 font-medium flex items-center gap-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-whatsapp flex-shrink-0" />
                (69) 99299-5353
              </p>
            </div>
          </motion.div>

          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs text-gray-400 font-medium text-center md:text-left">
            <p>Copyright &copy; 2026 AXIS AGENCY. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/axis.agencyofc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-whatsapp transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-all duration-300 group">
                <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
