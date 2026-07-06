import { useState } from "react";
import { MessageCircle, ChevronRight, Zap, Tv, Speaker, Microwave, Car, Battery, Wrench, Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    {
      id: "tv",
      title: "Smart TVs & Televisores",
      description: "Reparo em todas as marcas — Samsung, LG, Sony, Philips, AOC. Troca de telas, fontes, placas e backlight.",
      icon: Tv,
      brands: [],
      label: "[TV_REPAIR]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/9fa92ad05_generated_ced12b61.png"
    },
    {
      id: "audio",
      title: "Som Automotivo",
      description: "Assistência técnica autorizada em módulos amplificadores, fontes e centrais multimídia automotivas.",
      icon: Speaker,
      brands: ["SounDigital", "Stetsom", "Taramps", "JFA", "Machine"],
      label: "[AUDIO_SYS]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/db3299299_generated_284f96f9.png"
    },
    {
      id: "microwave",
      title: "Micro-ondas",
      description: "Manutenção completa em micro-ondas de todas as marcas. Magnetron, transformadores e painéis.",
      icon: Microwave,
      brands: [],
      label: "[MW_SERVICE]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/fba6e8c5b_generated_99c5cc2d.png"
    },
    {
      id: "automotive",
      title: "Eletrônica Automotiva",
      description: "Diagnóstico e reparo de injeção eletrônica, equipamentos de teste e sistemas de pressurização.",
      icon: Car,
      brands: ["Planatc", "KXTRON", "Kitec"],
      label: "[AUTO_DIAG]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/14e8f5e8b_generated_20dc1e38.png"
    },
    {
      id: "power",
      title: "Carregadores & Fontes",
      description: "Assistência autorizada em carregadores de bateria, fontes automotivas e máquinas de limpeza de bicos.",
      icon: Battery,
      brands: ["Kitec", "Datrel"],
      label: "[PWR_UNIT]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/158f95d00_generated_12daa4b5.png"
    },
    {
      id: "general",
      title: "Manutenção Geral",
      description: "30 anos de experiência em manutenção de diversos aparelhos eletrônicos com a melhor solução para você.",
      icon: Wrench,
      brands: [],
      label: "[GEN_MAINT]",
      image: "https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/a466fa074_generated_a24fb760.png"
    }
  ];

  const partners = [
    {
      name: "SounDigital",
      description: "Inovando e buscando novas tecnologias, a SounDigital consolidou-se no mercado brasileiro e internacional, conquistando o seu espaço e respeito dentre os profissionais mais exigentes e renomados do setor.",
      url: "https://www.soundigital.com.br"
    },
    {
      name: "Stetsom",
      description: "Projetados para serem objetos de desejo, os produtos Stetsom ocupam lugar de destaque no cenário de som automotivo.",
      url: "https://www.stetsom.com.br"
    },
    {
      name: "Taramps",
      description: "O Grupo Taramps alcançou reconhecimento internacional após passar a fabricar módulos amplificadores classe D (digital) para sistemas de som automotivos e sendo pioneira em desenvolvimento de módulos de alta tensão.",
      url: "https://www.taramps.com.br"
    },
    {
      name: "JFA Eletrônicos",
      description: "A JFA Eletrônicos é o resultado de um sonho familiar, que os tornou referência no Automotivo e nas Telecomunicações. Em Março de 2004, os primos Flávio e Anderson iniciaram as atividades.",
      url: "https://www.jfaeletronicos.com.br"
    },
    {
      name: "Machine Amplificadores",
      description: "Machine Amplificadores — referência em amplificadores de alta qualidade para som automotivo, unindo tecnologia e desempenho.",
      url: "https://www.machineamplificadores.com.br"
    },
    {
      name: "Planatc",
      description: "A PLANATC é uma indústria com 25 anos de mercado, na área de ferramentas e equipamentos eletrônicos para mecânica de automóveis.",
      url: "https://www.planatc.com.br"
    },
    {
      name: "Kitec",
      description: "No final dos anos 90 surge a marca KITEC, com uma trajetória de trabalho árduo e perseverante. Trabalho recompensado pelo crescimento e grande aceitação desta marca no mercado.",
      url: "https://www.kitec.com.br"
    },
    {
      name: "Datrel",
      description: "Fundada em 1987, a DATREL se reinventou tornando-se uma referência no mercado de áudio brasileiro, com mais de 25 anos de trajetória.",
      url: "https://www.datrel.com.br"
    },
    {
      name: "KXTRON Nexotron",
      description: "A KXTRON atua projetando equipamentos em parceria com a indústria automobilística desde 1993, pioneira no Brasil na fabricação de equipamentos para testes e diagnósticos de injeções eletrônicas.",
      url: "https://www.kxtron.com.br"
    }
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 hover:opacity-80 transition">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-sm sm:text-base">Eletrônica <span className="text-blue-600">Digital</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm text-gray-700 hover:text-blue-600 transition">Início</a>
            <a href="#servicos" className="text-sm text-gray-700 hover:text-blue-600 transition">Serviços</a>
            <a href="#parcerias" className="text-sm text-gray-700 hover:text-blue-600 transition">Parcerias</a>
            <a href="#sobre" className="text-sm text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <a href="#contato" className="text-sm text-gray-700 hover:text-blue-600 transition">Contato</a>
            <Button 
              size="sm" 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open("https://wa.me/5551996036223?text=Olá%20vim%20pelo%20site,%20poderia%20me%20ajudar?", "_blank")}
            >
              Fale Agora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs font-medium text-blue-600">30 ANOS DE EXCELÊNCIA</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Seu aparelho <span className="text-blue-600">Restaurado</span> com precisão.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Somos especialistas em manutenção eletrônica em Novo Hamburgo — RS. Assistência técnica autorizada das principais marcas de som automotivo, TVs, micro-ondas e muito mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/5551996036223?text=Olá%20vim%20pelo%20site,%20poderia%20me%20ajudar?", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale pelo WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => scrollToSection("servicos")}
                >
                  Nossos Serviços
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/07a7e4ec9_generated_ec12d8c6.png" 
                alt="Técnico realizando reparo de precisão em placa de circuito" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-blue-100 text-blue-700 px-3 py-1.5 rounded text-xs font-mono font-semibold">
                [PRECISION_REPAIR_01]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-mono text-blue-600 mb-2">[SERVICE_MATRIX]</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Realizamos manutenção em diversos aparelhos eletrônicos com a máxima precisão e agilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-md p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-mono text-gray-400">{service.label}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  {service.brands.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand) => (
                        <span key={brand} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
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

      {/* Authorized Partners Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-mono text-blue-600 mb-2">[AUTHORIZED_PARTNERS]</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Assistência Técnica Autorizada</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <span key={partner.name} className="text-sm text-gray-700 px-3 py-2 bg-white rounded-lg border border-gray-200">
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-blue-600 mb-2">[DIGITAL_DIAGNOSIS]</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">O que vamos consertar hoje?</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Selecione o tipo de aparelho, informe a marca e modelo, descreva o defeito. Sua mensagem será enviada diretamente para o nosso WhatsApp.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-4">1. Tipo de aparelho</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(selectedService === service.id ? "" : service.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center flex flex-col items-center gap-2 ${
                      selectedService === service.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${selectedService === service.id ? "text-green-600" : "text-gray-600"}`} />
                    <span className="text-xs sm:text-sm font-medium text-gray-900">{service.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-green-500 hover:bg-green-600 text-white gap-2 mb-3"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Enviar pelo WhatsApp
            </Button>
            <p className="text-center text-xs sm:text-sm text-gray-600">
              Sua mensagem será encaminhada diretamente para o nosso WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="parcerias" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-mono text-blue-600 mb-2">[PARTNER_NETWORK]</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossas Parcerias</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Somos assistência técnica das principais marcas de som e fontes automotiva do País, além de assistência autorizada de carregadores e equipamentos automotivos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-mono text-blue-600 mb-4">[EST. 1995]</p>
              <p className="text-sm text-gray-600 mb-6">Novo Hamburgo — RS</p>
              <p className="text-xs font-mono text-blue-600 mb-4">[ABOUT_US]</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Quem Somos</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                Somos uma empresa no ramo de tecnologia, realizando manutenção em diversos aparelhos. Estando há 30 anos no mercado, já passamos por várias fases da Eletrônica, sempre nos atualizando e evoluindo com as novas tecnologias.
              </p>
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Nossa Missão</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Solucionar de maneira prática e ágil a expectativa do cliente, dando a ele a plena satisfação!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30+", label: "Anos de Experiência" },
                  { value: "9+", label: "Marcas Autorizadas" },
                  { value: "2000+", label: "Aparelhos Reparados" },
                  { value: "NH", label: "Novo Hamburgo - RS" }
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://media.base44.com/images/public/6a4bcdbca474299fda1d1221/a466fa074_generated_a24fb760.png" 
                alt="Equipamento de diagnóstico eletrônico de precisão" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-6 uppercase text-sm">WHATSAPP</h3>
              <a 
                href="tel:+5551996036223"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="font-semibold text-gray-900">(51) 9-9603-6223</p>
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-6 uppercase text-sm">TELEFONE</h3>
              <a 
                href="tel:+5551204400563"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="font-semibold text-gray-900">(51) 2040-0563</p>
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-6 uppercase text-sm">ENDEREÇO</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Rua Jaboti 42, Sala 203</p>
                  <p className="text-sm text-gray-600">Novo Hamburgo — RS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-sm">Eletrônica <span className="text-blue-400">Digital</span></span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                30 anos restaurando a vida digital com precisão em Novo Hamburgo — RS.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase">SERVIÇOS</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#servicos" className="hover:text-white transition">Smart TVs & Monitores</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Som Automotivo</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Micro-ondas</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Eletrônica Automotiva</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Carregadores & Fontes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase">NAVEGAÇÃO</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
                <li><a href="#parcerias" className="hover:text-white transition">Parcerias</a></li>
                <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase">CONTATO</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="tel:+5551996036223" className="hover:text-white transition">(51) 9-9603-6223</a></li>
                <li><a href="tel:+5551204400563" className="hover:text-white transition">(51) 2040-0563</a></li>
                <li>Rua Jaboti 42, Sala 203<br />Novo Hamburgo — RS</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2026 Eletrônica Digital NH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
