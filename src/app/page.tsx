'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ScrollStack, {
  ScrollStackItem,
} from '@/components/scroll-stack';
import '@/components/scroll-stack.css';
import { GalleryPopup, type Product } from '@/components/gallery-popup';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';
import { Header } from '@/components/header';

const backgroundImages = [
  'https://placehold.co/1920x1080/E0F7FA/E0F7FA', // Light Cyan
  'https://placehold.co/1920x1080/FFE0B2/FFE0B2', // Light Orange
  'https://placehold.co/1920x1080/C8E6C9/C8E6C9', // Light Green
  'https://placehold.co/1920x1080/FFCDD2/FFCDD2', // Light Pink
  'https://placehold.co/1920x1080/D1C4E9/D1C4E9', // Light Purple
  'https://placehold.co/1920x1080/F0F4C3/F0F4C3', // Light Lime
];

const products: Product[] = [
    { id: 'tazones', title: 'Tazones: un sorbo de recuerdos', description: 'Tazones personalizados', images: ['https://picsum.photos/600/600?random=10', 'https://picsum.photos/600/600?random=20', 'https://picsum.photos/600/600?random=30', 'https://picsum.photos/600/600?random=40'], iconLetter: 'T' },
    { id: 'poleras', title: 'Poleras: viste tu historia', description: 'Poleras estampadas', images: ['https://picsum.photos/600/600?random=11', 'https://picsum.photos/600/600?random=21', 'https://picsum.photos/600/600?random=31'], iconLetter: 'P' },
    { id: 'llaveros', title: 'Llaveros: lleva contigo un momento', description: 'Llaveros únicos', images: ['https://picsum.photos/600/600?random=12', 'https://picsum.photos/600/600?random=22'], iconLetter: 'L' },
    { id: 'carcasas', title: 'Carcasas: protege tu mundo', description: 'Carcasas para celular', images: ['https://picsum.photos/600/600?random=13', 'https://picsum.photos/600/600?random=23', 'https://picsum.photos/600/600?random=33', 'https://picsum.photos/600/600?random=43', 'https://picsum.photos/600/600?random=53'], iconLetter: 'C' },
    { id: 'relojes', title: 'Relojes: el tiempo a tu manera', description: 'Relojes de pared', images: ['https://picsum.photos/600/600?random=14', 'https://picsum.photos/600/600?random=24', 'https://picsum.photos/600/600?random=34'], iconLetter: 'R' },
    { id: 'cuadros', title: 'Cuadros: arte que inspira', description: 'Cuadros decorativos', images: ['https://picsum.photos/600/600?random=15'], iconLetter: 'C' },
];

const ctaCardImages = [
  'carcasacat.jpg',
  'poleracat.jpg',
  'tazacat.jpg',
  'relojcat.jpg',
];

export default function SublikatWireframe() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [areElementsVisible, setAreElementsVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [stackPosition, setStackPosition] = useState('10%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStackPosition('5%');
      } else {
        setStackPosition('10%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate text fade-in
          const textTimer = setTimeout(() => {
            setIsTextVisible(true);
          }, 100);

          // Animate cat and button slide-in after text
          const elementsTimer = setTimeout(() => {
            setAreElementsVisible(true);
          }, 600);
          
          // We only want to animate once
          if (heroRef.current) {
            heroObserver.unobserve(heroRef.current);
          }

          return () => {
            clearTimeout(textTimer);
            clearTimeout(elementsTimer);
          };
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          if (ctaRef.current) {
            ctaObserver.unobserve(ctaRef.current);
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    
    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (ctaRef.current) {
        ctaObserver.unobserve(ctaRef.current);
      }
    };
  }, []);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className="background-container">
        {backgroundImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            fill
            style={{objectFit: "cover"}}
            className="background-image"
            data-ai-hint="solid color"
          />
        ))}
      </div>

      <ScrollStack stackPosition={stackPosition} itemStackDistance={0} itemDistance={400} itemScale={0} baseScale={1}>
        <Header />

        {/* These items will be part of the stack */}
        <ScrollStackItem>
          <section
            id="inicio"
            ref={heroRef}
            className="relative text-left h-full flex flex-col justify-center items-center overflow-hidden"
            style={{ backgroundImage: 'url(/hero_living.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            title="Animación: el gato señala el botón principal con entusiasmo. Rebote suave del botón mientras el gato lo mira."
          >
            <div className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-1000 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`} />
            <div className='relative z-10 h-[90%] w-full flex p-6 md:p-12'>
              <div className='w-full lg:w-[70%] h-full flex flex-col justify-center items-center mt-[-50px]'>
                <div
                  className={`transition-opacity duration-1000 ease-in-out ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-2">Realidad Aumentada + Personalización</h1>
                  <p className="max-w-3xl text-base md:text-xl lg:text-2xl mb-4">
                      Descubre productos únicos que cobran vida con tu smartphone. Diseños personalizados que combinan arte físico con experiencias digitales inmersivas.
                  </p>
                </div>
                <div className="w-full flex justify-start md:justify-center mt-4 md:pl-0">
                  <div
                    className={`transition-all duration-1000 ease-in-out pl-1.5 md:pl-0 ${areElementsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                  >
                    <Button size="lg" className="text-lg border-2 border-primary-foreground/50 shadow-lg hover:shadow-xl transition-shadow duration-300">Explora Nuestros Productos</Button>
                  </div>
                </div>
              </div>
              <div className='w-0 lg:w-[30%] h-full flex flex-col justify-center items-center'>
                 
              </div>
            </div>
            
            <Image 
                src="/katchancoffe.png" 
                alt="Katchan, la mascota de SubliCat" 
                width={500} 
                height={625} 
                className={`absolute bottom-0 right-[-1.25rem] md:right-8 w-44 h-auto md:w-56 lg:w-[360px] transition-all duration-1000 ease-in-out ${areElementsVisible ? 'translate-x-0' : 'translate-x-full'}`}
                data-ai-hint="peeking cat"
            />
          </section>
        </ScrollStackItem>
        
        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            id="quienes-somos"
            className="relative flex flex-col p-4 justify-center h-full"
            style={{ backgroundImage: 'url(/gato_taller.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            title="Animación: el gato lee un libro o se muestra reflexivo mirando el texto. Pestañeo lento y movimiento suave de cola."
          >
            <div className="relative z-10 w-full flex flex-col justify-center">
              <div className="flex flex-col md:flex-row w-full items-start">
                <div className="w-full md:w-1/3">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-center">
                      Quiénes Somos
                    </h2>
                    <p className="mb-4 text-base md:text-lg text-left text-justify">
                      En Sublikat, creemos que los objetos cotidianos pueden convertirse en experiencias mágicas. Fundada en 2023, nuestra misión es combinar el arte físico con la tecnología de realidad aumentada para crear productos que no solo se ven bien, sino que también cuentan historias interactivas.
                    </p>
                    <p className="text-base md:text-lg text-left text-justify">
                      Cada producto es diseñado con atención al detalle, permitiendo a nuestros clientes personalizar no solo la apariencia, sino también la experiencia digital que lo acompaña. Desde tazas que cobran vida hasta pósters que cuentan historias animadas, estamos redefiniendo lo que significa poseer un objeto personalizado.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  {/* This is the empty left column, it will show the background image */}
                </div>
              </div>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            id="productos"
            className="relative flex flex-col p-6 md:p-8 justify-start items-center h-full"
            style={{ backgroundImage: 'url(/gallery.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            title="Animación: el gato interactúa con productos (sostiene taza, usa polera, duerme sobre llavero). Cambio de pose al hacer hover sobre cada producto."
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl w-full max-w-6xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">
                Productos Personalizados
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 w-full max-w-5xl mx-auto">
              {products.map((product) => (
                <div key={product.id} onClick={() => handleCardClick(product)} className="w-full cursor-pointer group relative">
                    <Image
                      src="/cat.png"
                      alt="Peeking cat"
                      width={90}
                      height={90}
                      className="absolute -top-[65px] -right-9 h-24 w-24 object-contain transition-all duration-200 ease-out transform opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 z-20"
                      data-ai-hint="peeking cat"
                    />
                  <div className="border-2 border-black p-2 bg-white transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-xl group-hover:scale-105 rounded-lg flex flex-col h-28 justify-center items-center relative z-10">
                    <div className="w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-1 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {product.iconLetter}
                      </span>
                    </div>
                    <h3 className="font-semibold text-center text-[0.6rem] md:text-base mb-0.5">
                      {product.title}
                    </h3>
                    <p className="text-[0.6rem] text-center text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem itemClassName="scroll-stack-card--opaque">
          <section
            id="testimonios"
            className="p-6 md:p-8 flex flex-col justify-center items-center h-full"
            title="Animación: el gato trae cartas o globos de diálogo con mensajes de clientes. Globos emergentes con efecto pop-up."
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Testimonios de Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
              <div className="border border-black p-4 bg-white rounded-lg flex flex-row md:flex-col items-center text-left md:text-center">
                <Image src="https://picsum.photos/200/200?random=4" alt="Client 1" width={200} height={200} className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full mr-4 md:mr-0 md:mb-4" data-ai-hint="happy person" />
                <p>"¡Me encantó el resultado! Mi taza quedó increíble."</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg flex flex-row md:flex-col items-center text-left md:text-center">
                  <Image src="https://picsum.photos/200/200?random=5" alt="Client 2" width={200} height={200} className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full mr-4 md:mr-0 md:mb-4" data-ai-hint="smiling customer" />
                <p>"El proceso fue súper fácil y divertido. Lo recomiendo."</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg flex flex-row md:flex-col items-center text-left md:text-center">
                <Image src="https://picsum.photos/200/200?random=6" alt="Client 3" width={200} height={200} className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full mr-4 md:mr-0 md:mb-4" data-ai-hint="satisfied user" />
                <p>"La calidad es excelente y la función AR es genial."</p>
              </div>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
           <section
            id="cta_section"
            ref={ctaRef}
            className="relative flex flex-col gap-8 items-center justify-center h-full text-center p-6 md:p-8 overflow-hidden"
            style={{ 
              backgroundImage: 'url(/escritorio.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
              {ctaCardImages.map((imageName, i) => (
                <Image
                  key={i}
                  src={`/${imageName}`}
                  alt=""
                  width={200}
                  height={200}
                  className={`absolute top-0 left-0 w-full h-auto transition-all duration-1000 ease-in-out ${
                    isCtaVisible
                      ? `opacity-100 ${
                          i === 0 ? 'translate-x-[-120%] rotate-[-25deg]' : ''
                        } ${
                          i === 1 ? 'translate-x-[-60%] rotate-[-15deg]' : ''
                        } ${
                          i === 2 ? 'translate-x-[60%] rotate-[15deg]' : ''
                        } ${
                          i === 3 ? 'translate-x-[120%] rotate-[25deg]' : ''
                        }`
                      : 'opacity-0 translate-x-0 translate-y-0 rotate-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${100 * i}ms` }}
                  data-ai-hint="product item"
                />
              ))}
              <Image
                src="/katchanpedido.png"
                alt="Gato de SubliCat junto a un pedido"
                width={200}
                height={200}
                className={`relative z-10 w-full h-auto transition-transform duration-500 ease-out ${isCtaVisible ? 'scale-100' : 'scale-75'}`}
                data-ai-hint="cat order"
              />
            </div>
            
            <div className="relative z-20 bg-white p-6 rounded-lg border-2 border-black shadow-lg">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4"
                style={{ color: 'hsl(232, 42%, 17%)' }}
              >
                ¡Crea tu recuerdo ahora!
              </h2>
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-lg font-bold"
                style={{ 
                  backgroundColor: 'hsl(161, 100%, 78%)',
                  color: 'hsl(232, 42%, 17%)'
                }}
              >
                Empezar a crear
              </Button>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <div className="h-full flex flex-col">
            <div className="h-[80%]"></div>
            <footer
              className="h-[20%] border border-black p-6 bg-gray-100 flex items-center justify-center"
              title="Animación: el gato duerme con sus lentes puestos. Respiración sutil o ronroneo animado."
            >
              <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl gap-4">
                <div className="border border-black p-2 bg-white text-center">
                  <p>Información de Contacto y Copyright</p>
                </div>
                <Image src="https://picsum.photos/300/200" alt="Sleeping Cat" width={300} height={200} className="w-auto h-16 object-contain rounded-lg" data-ai-hint="sleeping cat" />
                <div className="border border-black p-2 bg-white text-center">
                  <p>Íconos de Redes Sociales</p>
                </div>
              </div>
            </footer>
          </div>
        </ScrollStackItem>
      </ScrollStack>
      
      <GalleryPopup 
        product={selectedProduct}
        isOpen={isPopupOpen}
        onOpenChange={setIsPopupOpen}
      />
    </>
  );
}
