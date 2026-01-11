import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Maximize, 
  Waves, 
  Building2, 
  Bath, 
  Sun, 
  LayoutDashboard,
  Dumbbell,
  Coffee,
  Store,
  Shirt,
  Utensils,
  UserCheck,
  Zap,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionTitle } from './components/SectionTitle';
import { FeatureCard } from './components/FeatureCard';
import { Form } from './components/Form';

// --- Images ---
const IMAGES = {
  LOGO: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/High+-+%C3%9Altima+atualiza%C3%A7%C3%A3o++(5).png",
  HERO: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/006_Fchd_Dtlh_02.jpg",
  LOCATION: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/High+-+%C3%9Altima+atualiza%C3%A7%C3%A3o++(7).png",
  INTERIOR_1: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/share_1557343699.jpg",
  INTERIOR_2: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/share_941827653.jpg",
  VIEW_EXTRA: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/share_-565981963.jpg",
  ROOFTOP: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/005_Ftmg_B_03.jpg",
  FLOORPLAN: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/DE+1+A+7+PRONTA.png",
  VIDEO_VIEW: "https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/vista_unidades.mp4"
};

// --- Sub-components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="w-32 md:w-40 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={IMAGES.LOGO} alt="High Contorno" className="w-full h-auto" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Localização', 'Conceito', 'High Lofts', 'Investimento'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="text-white/80 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors"
            >
              {item}
            </button>
          ))}
          <Button variant="primary" className="px-6 py-2 text-xs" onClick={() => scrollTo('contato')}>
            Agendar
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 animate-fade-in-up">
            {['Localização', 'Conceito', 'High Lofts', 'Investimento'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-white text-left text-sm uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <Button fullWidth onClick={() => scrollTo('contato')}>Agendar Apresentação</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={IMAGES.HERO} 
          alt="High Contorno Facade" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />
      </div>

      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10 pt-20">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight max-w-5xl animate-fade-in-up">
          High Contorno <br />
          <span className="text-gray-300 italic text-3xl md:text-5xl">O novo marco imobiliário da Avenida Contorno</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed border-l border-white pl-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Vista permanente para a Baía de Todos os Santos, arquitetura exclusiva e uma das melhores rentabilidades de Salvador.
        </p>
        
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
            Agendar Apresentação
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer" onClick={() => document.getElementById('localização')?.scrollIntoView({behavior: 'smooth'})}>
        <ChevronDown size={24} strokeWidth={1} />
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="localização" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle 
              title="Localização Premium" 
              subtitle="A poucos metros do Baía Marina, Corredor da Vitória e Gamboa de Baixo, o High Contorno está no último ponto permitido para verticalização da região."
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-6 items-start group">
                <div className="mt-1 text-white opacity-50 group-hover:opacity-100 transition-opacity"><Waves size={32} strokeWidth={1} /></div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Vista Definitiva</h4>
                  <p className="text-gray-400 font-light">Graças ao tombamento e à preservação histórica ao redor, sua vista para a Baía de Todos os Santos é definitiva — um privilégio que nenhum novo empreendimento poderá replicar.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="mt-1 text-white opacity-50 group-hover:opacity-100 transition-opacity"><MapPin size={32} strokeWidth={1} /></div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">Valorização Imediata</h4>
                  <p className="text-gray-400 font-light">A requalificação da Avenida Contorno já está confirmada e licitada, trazendo valorização imediata ao entorno.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-full min-h-[400px] group bg-gray-900 rounded-lg overflow-hidden">
             <div className="w-full h-full">
              <img 
                src={IMAGES.LOCATION} 
                alt="Localização High Contorno" 
                className="w-full h-full object-cover"
              />
             </div>
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="w-full bg-black py-12 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">
             Vista dos Andares
           </h2>
           <div className="h-[1px] w-24 bg-white mb-6" />
           <p className="text-lg text-gray-400 font-light max-w-2xl">
             Confira a simulação real da vista privilegiada que cada unidade oferece para a Baía de Todos os Santos.
           </p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto border border-white/20 bg-gray-900 shadow-2xl overflow-hidden rounded-sm">
          <video 
            src={IMAGES.VIDEO_VIEW}
            className="w-full h-auto"
            controls
            playsInline
            poster={IMAGES.HERO}
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}

const Scarcity = () => {
  return (
    <section id="conceito" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img 
               src={IMAGES.VIEW_EXTRA} 
               alt="Exclusive View" 
               className="w-full h-[500px] object-cover opacity-80 filter grayscale hover:grayscale-0 transition-all duration-700" 
             />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-none">
              Escassez e <br/><span className="italic text-gray-400">Oportunidade</span>
            </h2>
            <div className="space-y-6 text-lg font-light text-gray-300">
              <p>
                O último lançamento na região ocorreu há mais de <strong className="text-white font-normal">11 anos</strong>.
              </p>
              <p>
                Toda a área ao redor é tombada, impossibilitando novos prédios. O High Contorno nasce no <strong className="text-white font-normal">único terreno ainda liberado</strong> para verticalização.
              </p>
              <div className="p-8 border border-white/20 mt-8 bg-black/50 backdrop-blur-sm">
                <p className="text-xl md:text-2xl text-white font-serif text-center">
                  "Combinação única: <br/>alta demanda + oferta mínima + vista eterna."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Product = () => {
  const features = [
    { icon: Maximize, title: "29m² a 36m²", description: "Plantas inteligentes e sofisticadas." },
    { icon: ArrowRight, title: "Pé-direito de 3,70m", description: "Permite mezanino pós-habite-se." },
    { icon: Waves, title: "100% Vista Baía", description: "Todas as unidades privilegiadas." },
    { icon: Sun, title: "Varanda em todas as unidades", description: "Integração total com a vista." },
    { icon: Maximize, title: "Esquadrias de 3,30m", description: "Amplitude e iluminação natural." },
    { icon: Bath, title: "Banheira Entregue", description: "Item de luxo instalado pela construtora." },
  ];

  return (
    <section id="high-lofts" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionTitle 
            title="High Lofts Exclusivos" 
            subtitle="Torre única com 50 unidades exclusivas."
          />
          <div className="hidden md:block mb-12">
             <Button variant="outline" onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
               Baixar Apresentação
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 relative h-[400px] md:h-[500px] group overflow-hidden">
             <img src={IMAGES.INTERIOR_1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interior Loft" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="relative h-[400px] md:h-[500px] group overflow-hidden">
             <img src={IMAGES.INTERIOR_2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Interior Bedroom" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Leisure = () => {
  const amenities = [
    { icon: Waves, label: "Rooftop com piscina" },
    { icon: Dumbbell, label: "Academia" },
    { icon: LayoutDashboard, label: "Coworking" },
    { icon: Store, label: "Mini mercado" },
    { icon: Shirt, label: "Lavanderia" },
    { icon: Utensils, label: "Churrasqueira" },
    { icon: UserCheck, label: "Concierge" },
    { icon: Zap, label: "Carro elétrico" },
  ];

  return (
    <section className="py-24 bg-brand-gray relative">
       <div className="absolute top-0 right-0 w-1/2 h-full bg-black/50 hidden lg:block" />
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
               Lazer a <br />55 metros de altura
             </h2>
             <p className="text-gray-400 mb-12 text-lg font-light">
               Uma experiência elevada com tudo o que o morador ou hóspede precisa para uma estadia perfeita. 36% de vagas rotativas disponíveis.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white border-b border-white/10 pb-4">
                    <item.icon size={20} strokeWidth={1} />
                    <span className="text-sm uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="relative h-[600px]">
             <img 
               src={IMAGES.ROOFTOP} 
               alt="Rooftop Pool" 
               className="w-full h-full object-cover shadow-2xl"
             />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black border border-white/20 p-6 flex items-center justify-center text-center hidden md:flex">
                <p className="font-serif text-white text-xl">Pool &<br/>Lounge</p>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

const Investment = () => {
  return (
    <section id="investimento" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionTitle title="Rentabilidade Comprovada" subtitle="Números projetados para aluguel por temporada" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-10 border border-white/20 flex flex-col justify-between hover:bg-white/5 transition-colors min-h-[280px]">
             <div>
               <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Lucro Líquido</p>
               <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">R$ 7.300<span className="text-xl align-top">/mês</span></h3>
               <p className="text-gray-400 text-sm">Estimativa em alta temporada</p>
             </div>
          </div>
          <div className="p-10 border border-white/20 flex flex-col justify-between hover:bg-white/5 transition-colors min-h-[280px]">
             <div>
               <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Rentabilidade Anual</p>
               <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">&gt; 15%</h3>
               <p className="text-gray-400 text-sm">Superior à média do mercado</p>
             </div>
          </div>
          <div className="p-10 border border-white/20 flex flex-col justify-between hover:bg-white/5 transition-colors min-h-[280px]">
             <div>
               <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Payback</p>
               <h3 className="text-4xl lg:text-5xl font-serif text-white mb-2">4,2 Anos</h3>
               <p className="text-gray-400 text-sm">Retorno acelerado</p>
             </div>
             <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500">Administração opcional pela Housei</p>
             </div>
          </div>
        </div>

        {/* Conditions - Updated: Removed Payment Flow and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-auto w-full">
            <img src={IMAGES.FLOORPLAN} alt="Floorplan" className="w-full h-auto object-contain" />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-white mb-10">Obras e Entrega</h3>
            <div className="space-y-8">
              <div className="flex gap-8 border-l border-white pl-6">
                <div>
                   <p className="text-xs text-gray-500 uppercase">Entrega</p>
                   <p className="text-2xl text-white font-serif">Dezembro/2027</p>
                </div>
                <div>
                   <p className="text-xs text-gray-500 uppercase">Início da Obra</p>
                   <p className="text-2xl text-white font-serif">Janeiro/2026</p>
                </div>
              </div>
              
              <div className="border-l border-white pl-6 pt-2">
                 <p className="text-gray-400 font-light">
                   Aproveite o momento ideal para investir no último terreno disponível para verticalização na Avenida Contorno.
                 </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button fullWidth onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
                Agendar Apresentação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          <div className="bg-black p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Garanta prioridade na pré-venda e acesso às unidades ainda disponíveis.
            </h2>
            <p className="text-gray-400 mb-8 font-light">
              Cadastre-se para receber a tabela atualizada e agendar sua reunião exclusiva com nossa equipe comercial.
            </p>
            <ul className="space-y-4 text-gray-300 text-sm font-light mb-8">
               <li className="flex items-center gap-3">
                 <div className="w-1 h-1 bg-white rounded-full" />
                 Atendimento personalizado
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-1 h-1 bg-white rounded-full" />
                 Sem taxa de corretagem
               </li>
            </ul>
          </div>
          <div className="bg-brand-gray border-t lg:border-t-0 lg:border-l border-white/10">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-24">
          <img src={IMAGES.LOGO} alt="Logo" className="w-full h-auto" />
        </div>
        <p className="text-gray-600 text-xs text-center md:text-right">
          High Contorno © {new Date().getFullYear()}. Todos os direitos reservados.<br/>
          Imagens meramente ilustrativas.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Location />
      <VideoSection />
      <Scarcity />
      <Product />
      <Leisure />
      <Investment />
      <Contact />
      <Footer />
    </div>
  );
}