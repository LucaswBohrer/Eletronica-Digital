import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight, Zap, Tv, Speaker, Microwave, Car, Battery, Wrench, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    {
      id: "tv",
      title: "Smart TVs & Televisores",
      description: "Reparo em todas as marcas — Samsung, LG, Sony, Philips, AOC. Troca de telas, fontes, placas e backlight.",
      icon: Tv,
      brands: [],
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=400&fit=crop"
    },
    {
      id: "audio",
      title: "Som Automotivo",
      description: "Assistência técnica autorizada em módulos amplificadores, fontes e centrais multimídia automotivas.",
      icon: Speaker,
      brands: ["SounDigital", "Stetsom", "Taramps", "JFA", "Machine"],
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=crop"
    },
    {
      id: "microwave",
      title: "Micro-ondas",
      description: "Manutenção completa em micro-ondas de todas as marcas. Magnetron, transformadores e painéis.",
      icon: Microwave,
      brands: [],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop"
    },
    {
      id: "automotive",
      title: "Eletrônica Automotiva",
      description: "Diagnóstico e reparo de injeção eletrônica, equipamentos de teste e sistemas de pressurização.",
      icon: Car,
      brands: ["Planatc", "KXTRON", "Kitec"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
    },
    {
      id: "power",
      title: "Carregadores & Fontes",
      description: "Assistência autorizada em carregadores de bateria, fontes automotivas e máquinas de limpeza de bicos.",
      icon: Battery,
      brands: ["Kitec", "Datrel"],
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=400&fit=crop"
    },
    {
      id: "general",
      title: "Manutenção Geral",
      description: "30 anos de experiência em manutenção de diversos aparelhos eletrônicos com a melhor solução para você.",
      icon: Wrench,
      brands: [],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
    }
  ];

  const partners = [
    { name: "SounDigital", description: "Inovando e buscando novas tecnologias, a SounDigital consolidou-se no mercado brasileiro e internacional.", url: "https://www.soundigital.com.br" },
    { name: "Stetsom", description: "Projetados para serem objetos de desejo, os produtos Stetsom ocupam lugar de destaque no som automotivo.", url: "https://www.stetsom.com.br" },
    { name: "Taramps", description: "Reconhecimento internacional em módulos amplificadores classe D para sistemas de som automotivos.", url: "https://www.taramps.com.br" },
    { name: "JFA Eletrônicos", description: "Referência no Automotivo e nas Telecomunicações desde 2004.", url: "https://www.jfaeletronicos.com.br" },
    { name: "Machine Amplificadores", description: "Referência em amplificadores de alta qualidade para som automotivo.", url: "https://www.machineamplificadores.com.br" },
    { name: "Planatc", description: "Indústria com 25 anos de mercado em ferramentas e equipamentos eletrônicos.", url: "https://www.planatc.com.br" },
    { name: "Kitec", description: "Trajetória de trabalho árduo com grande aceitação no mercado.", url: "https://www.kitec.com.br" },
    { name: "Datrel", description: "Referência no mercado de áudio brasileiro desde 1987.", url: "https://www.datrel.com.br" },
    { name: "KXTRON", description: "Pioneira no Brasil em equipamentos para testes de injeções eletrônicas.", url: "https://www.kxtron.com.br" }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "5551996036223";
    let message = "Olá! Vim pelo site e gostaria de solicitar um orçamento";
    
    if (selectedService) {
      const service = services.find(s => s.id === selectedService);
      if (service) {
        message += ` para: ${service.title}`;
      }
    }
    
    message += ". Poderia me ajudar?";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg">Eletrônica <span className="text-blue-600">Digital</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm hover:text-blue-600 transition">Início</a>
            <a href="#servicos" className="text-sm hover:text-blue-600 transition">Serviços</a>
            <a href="#parcerias" className="text-sm hover:text-blue-600 transition">Parcerias</a>
            <a href="#sobre" className="text-sm hover:text-blue-600 transition">Sobre</a>
            <a href="#contato" className="text-sm hover:text-blue-600 transition">Contato</a>
            <Button size="sm" className="bg-green-500 hover:bg-green-600">Fale Agora</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-medium text-blue-600">30 ANOS DE EXCELÊNCIA</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Seu aparelho <span className="text-blue-600">Restaurado</span> com precisão.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Somos especialistas em manutenção eletrônica em Novo Hamburgo — RS. Assistência técnica autorizada das principais marcas de som automotivo, TVs, micro-ondas e muito mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white gap-2"
                  onClick={() => window.open("https://wa.me/5551996036223?text=Olá%20vim%20pelo%20site,%20poderia%20me%20ajudar?", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale pelo WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Nossos Serviços
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop" 
                  alt="Técnico realizando reparo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-blue-600 mb-2">[SERVICE_MATRIX]</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Realizamos manutenção em diversos aparelhos eletrônicos com a máxima precisão e agilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group rounded-2xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg p-6 cursor-default"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-mono text-gray-400">[{service.id.toUpperCase()}]</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  {service.brands.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand) => (
                        <span key={brand} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                          {brand}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Solicite um Orçamento</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(selectedService === service.id ? "" : service.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedService === service.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedService === service.id ? "text-blue-600" : "text-gray-600"}`} />
                  <span className="text-sm font-medium">{service.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          <Button 
            size="lg" 
            className="w-full bg-green-500 hover:bg-green-600 text-white gap-2"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-5 h-5" />
            Enviar pelo WhatsApp
          </Button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Sua mensagem será encaminhada diretamente para o nosso WhatsApp.
          </p>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="parcerias" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-blue-600 mb-2">[PARTNER_NETWORK]</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossas Parcerias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos assistência técnica das principais marcas de som e fontes automotiva do País.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-mono text-blue-600 mb-4">[EST. 1995]</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quem Somos</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Eletrônica Digital NH é uma empresa com mais de 30 anos de experiência em manutenção eletrônica de precisão em Novo Hamburgo, Rio Grande do Sul. Somos assistência técnica autorizada das principais marcas de som automotivo, TVs, micro-ondas e diversos outros aparelhos eletrônicos.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa equipe de técnicos especializados utiliza equipamentos de diagnóstico de última geração para garantir a máxima precisão em cada reparo. Comprometidos com a qualidade e a agilidade, restauramos a vida digital de nossos clientes com excelência.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Assistência Autorizada", desc: "Das principais marcas do mercado" },
                  { title: "Equipamentos Modernos", desc: "Diagnóstico de precisão" },
                  { title: "Experiência Comprovada", desc: "30 anos no mercado" }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop" 
                alt="Sobre nós" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">CONTATO</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+5551996036223"
                  className="flex items-start gap-3 hover:text-blue-600 transition"
                >
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp</p>
                    <p className="font-semibold text-gray-900">(51) 9-9603-6223</p>
                  </div>
                </a>
                <a 
                  href="tel:+5551204400563"
                  className="flex items-start gap-3 hover:text-blue-600 transition"
                >
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Telefone</p>
                    <p className="font-semibold text-gray-900">(51) 2040-0563</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">ENDEREÇO</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Rua Jaboti 42, Sala 203</p>
                  <p className="text-sm text-gray-600">Novo Hamburgo — RS</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">HORÁRIO</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Segunda a Sexta:</span> 08:00 - 18:00</p>
                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Sábado:</span> 08:00 - 13:00</p>
                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Domingo:</span> Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="font-bold">Eletrônica <span className="text-blue-400">Digital</span></span>
              </div>
              <p className="text-gray-400 text-sm">
                30 anos restaurando a vida digital com precisão em Novo Hamburgo — RS.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SERVIÇOS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-white transition">Smart TVs & Monitores</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Som Automotivo</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Micro-ondas</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Eletrônica Automotiva</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">NAVEGAÇÃO</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
                <li><a href="#parcerias" className="hover:text-white transition">Parcerias</a></li>
                <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONTATO</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="tel:+5551996036223" className="hover:text-white transition">(51) 9-9603-6223</a></li>
                <li><a href="tel:+5551204400563" className="hover:text-white transition">(51) 2040-0563</a></li>
                <li>Rua Jaboti 42, Sala 203<br />Novo Hamburgo — RS</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Eletrônica Digital NH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
