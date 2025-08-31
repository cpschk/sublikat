'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollStack, {
  ScrollStackItem,
} from '@/components/scroll-stack';
import '@/components/scroll-stack.css';
import { GalleryPopup, type Product } from '@/components/gallery-popup';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';
import { Logo } from '@/components/logo';

const backgroundImages = [
  'https://placehold.co/1920x1080/E0F7FA/E0F7FA', // Light Cyan
  'https://placehold.co/1920x1080/FFE0B2/FFE0B2', // Light Orange
  'https://placehold.co/1920x1080/C8E6C9/C8E6C9', // Light Green
  'https://placehold.co/1920x1080/FFCDD2/FFCDD2', // Light Pink
  'https://placehold.co/1920x1080/D1C4E9/D1C4E9', // Light Purple
  'https://placehold.co/1920x1080/F0F4C3/F0F4C3', // Light Lime
];

const products: Product[] = [
    { id: 'taza-ar', title: 'Taza AR', description: 'Taza con experiencia de realidad aumentada', images: ['https://picsum.photos/600/600?random=10', 'https://picsum.photos/600/600?random=20', 'https://picsum.photos/600/600?random=30', 'https://picsum.photos/600/600?random=40'], iconLetter: 'T' },
    { id: 'polera-personalizada', title: 'Polera Personalizada', description: 'Diseño único para tu estilo', images: ['https://picsum.photos/600/600?random=11', 'https://picsum.photos/600/600?random=21', 'https://picsum.photos/600/600?random=31'], iconLetter: 'P' },
    { id: 'llavero', title: 'Llavero', description: 'Accesorio con diseño exclusivo', images: ['https://picsum.photos/600/600?random=12', 'https://picsum.photos/600/600?random=22'], iconLetter: 'L' },
    { id: 'poster', title: 'Póster', description: 'Arte para tu pared', images: ['https://picsum.photos/600/600?random=13', 'https://picsum.photos/600/600?random=23', 'https://picsum.photos/600/600?random=33', 'https://picsum.photos/600/600?random=43', 'https://picsum.photos/600/600?random=53'], iconLetter: 'P' },
    { id: 'stickers', title: 'Stickers', description: 'Para personalizar cualquier superficie', images: ['https://picsum.photos/600/600?random=14', 'https://picsum.photos/600/600?random=24', 'https://picsum.photos/600/600?random=34'], iconLetter: 'S' },
    { id: 'otros', title: 'Otros', description: 'Productos personalizados a tu medida', images: ['https://picsum.photos/600/600?random=15'], iconLetter: 'O' },
];


export default function SublikatWireframe() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

      <ScrollStack stackPosition="10%" itemStackDistance={0} itemDistance={400}>
        {/* This header will scroll normally */}
        <header
          className="border border-black p-4 flex justify-between items-center bg-gray-100 mb-8"
          title="Animación: el gato asoma la cabeza desde el menú o logo. Animación tipo 'peek' (asomarse y esconderse)."
        >
          <div className="border border-black p-2 bg-white">
            <p>[Logo Placeholder]</p>
          </div>
          <nav className="border border-black p-2 bg-white">
            <p>[Menú de navegación]</p>
          </nav>
        </header>

        {/* These items will be part of the stack */}
        <ScrollStackItem>
          <section
            className="relative text-left bg-blue-200/80 h-full flex flex-col justify-center items-center"
            style={{ backgroundImage: 'url(/hero_living.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            title="Animación: el gato señala el botón principal con entusiasmo. Rebote suave del botón mientras el gato lo mira."
          >
            
            <div className='h-[90%] w-full flex p-6 md:p-12'>
              <div className='w-[60%] h-full flex flex-col justify-center items-start'>
                <h1 className="text-3xl md:text-6xl font-bold mb-2">Realidad Aumentada + Personalización</h1>
                <p className="max-w-3xl text-base md:text-xl mb-4">
                    Descubre productos únicos que cobran vida con tu smartphone. Diseños personalizados que combinan arte físico con experiencias digitales inmersivas.
                </p>
                 <Button size="lg">Explora Nuestros Productos</Button>
              </div>
              <div className='w-[40%] h-full flex flex-col justify-center items-center'>
                 
              </div>
            </div>
            
            <Image 
                src="/katchan.png" 
                alt="Katchan, la mascota de SubliCat" 
                width={500} 
                height={625} 
                className="absolute bottom-0 right-2 md:right-8 w-72 h-auto md:w-96 lg:w-[600px]"
                data-ai-hint="peeking cat"
            />
          </section>
        </ScrollStackItem>
        
        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-6 md:p-8 bg-gray-100 flex flex-col justify-center items-center h-full"
            title="Animación: el gato lee un libro o se muestra reflexivo mirando el texto. Pestañeo lento y movimiento suave de cola."
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Historia: Quiénes Somos
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl px-4">
              <div className="w-full md:w-1/2">
                <Image src="https://picsum.photos/600/600" alt="About us" width={600} height={600} className="w-full h-auto object-cover rounded-lg" data-ai-hint="creative team" />
              </div>
              <div className="w-full md:w-1/2">
                <p>Somos un equipo apasionado por la creatividad y la tecnología. Nuestra misión es darte las herramientas para que puedas expresar tu estilo único en productos que te acompañen todos los días. Creemos en la magia de la personalización.</p>
              </div>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-6 md:p-8 bg-gray-300 flex flex-col justify-center items-center"
            title="Animación: el gato interactúa con productos (sostiene taza, usa polera, duerme sobre llavero). Cambio de pose al hacer hover sobre cada producto."
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Productos Personalizados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl px-4">
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
                  <div className="border-2 border-black p-4 bg-white transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-xl group-hover:scale-105 rounded-lg flex flex-col h-36 justify-center items-center relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-2 md:mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {product.iconLetter}
                      </span>
                    </div>
                    <h3 className="font-semibold text-center text-sm md:text-base mb-1 md:mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-center text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-6 md:p-8 bg-gray-100 h-full flex flex-col justify-center items-center"
            title="Animación: el gato trae cartas o globos de diálogo con mensajes de clientes. Globos emergentes con efecto pop-up."
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Testimonios de Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
              <div className="border border-black p-4 bg-white rounded-lg text-center flex flex-col items-center">
                <Image src="https://picsum.photos/200/200?random=4" alt="Client 1" width={200} height={200} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" data-ai-hint="happy person" />
                <p>"¡Me encantó el resultado! Mi taza quedó increíble."</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg text-center flex flex-col items-center">
                  <Image src="https://picsum.photos/200/200?random=5" alt="Client 2" width={200} height={200} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" data-ai-hint="smiling customer" />
                <p>"El proceso fue súper fácil y divertido. Lo recomiendo."</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg text-center flex flex-col items-center">
                <Image src="https://picsum.photos/200/200?random=6" alt="Client 3" width={200} height={200} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" data-ai-hint="satisfied user" />
                <p>"La calidad es excelente y la función AR es genial."</p>
              </div>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-6 md:p-8 bg-gray-200 flex flex-col md:flex-row gap-6 items-center justify-center h-full"
            title="Animación: el gato entrega un sobre o usa un portátil. Animación de tap con su patita sobre el formulario."
          >
            <div className="w-full md:w-1/2 max-w-md">
              <h2 className="text-xl font-semibold mb-6 text-center">Formulario de Contacto</h2>
              <div className="border border-black p-4 bg-white">
                <p>
                  [Placeholder para campos del formulario (nombre, email, mensaje)]
                </p>
              </div>
              <div className="border border-black p-2 mt-4 inline-block bg-white">
                <p>Botón de Enviar</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <Image src="https://picsum.photos/600/500" alt="Contact us" width={600} height={500} className="w-full h-auto object-cover rounded-lg" data-ai-hint="cat mail" />
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
