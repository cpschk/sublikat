'use client';
import React from 'react';
import Image from 'next/image';
import ScrollStack, {
  ScrollStackItem,
} from '@/components/scroll-stack';
import '@/components/scroll-stack.css';

const backgroundImages = [
  'https://placehold.co/1920x1080/E0F7FA/E0F7FA', // Light Cyan
  'https://placehold.co/1920x1080/FFE0B2/FFE0B2', // Light Orange
  'https://placehold.co/1920x1080/C8E6C9/C8E6C9', // Light Green
  'https://placehold.co/1920x1080/FFCDD2/FFCDD2', // Light Pink
  'https://placehold.co/1920x1080/D1C4E9/D1C4E9', // Light Purple
  'https://placehold.co/1920x1080/F0F4C3/F0F4C3', // Light Lime
];


export default function SublikatWireframe() {
  return (
    <>
      <div className="background-container">
        {backgroundImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="background-image"
            data-ai-hint="solid color"
          />
        ))}
      </div>

      <ScrollStack stackPosition="0%" itemStackDistance={0} itemDistance={0}>
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
            className="border border-black p-12 text-center bg-blue-200"
            title="Animación: el gato señala el botón principal con entusiasmo. Rebote suave del botón mientras el gato lo mira."
          >
            <h1 className="text-2xl font-bold mb-4">Hero: Título Principal</h1>
            <p className="mb-6">
              Aquí va la descripción del concepto de AR y personalización. ¡Haz que tus ideas cobren vida!
            </p>
            <Image src="https://picsum.photos/800/400" alt="Hero Image" width={800} height={400} className="w-full h-auto object-cover rounded-lg mb-6" data-ai-hint="abstract technology" />
            <div className="border border-black p-4 inline-block bg-white">
              <p>Botón de Llamada a la Acción (CTA)</p>
            </div>
          </section>
        </ScrollStackItem>
        
        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-8 bg-gray-100 flex flex-col justify-center items-center h-full"
            title="Animación: el gato lee un libro o se muestra reflexivo mirando el texto. Pestañeo lento y movimiento suave de cola."
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Historia: Quiénes Somos
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl">
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
            className="border border-black p-8 bg-gray-300"
            title="Animación: el gato interactúa con productos (sostiene taza, usa polera, duerme sobre llavero). Cambio de pose al hacer hover sobre cada producto."
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Productos Personalizados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-black p-4 bg-white rounded-lg text-center">
                <Image src="https://picsum.photos/400/300?random=1" alt="Product 1" width={400} height={300} className="w-full h-auto object-cover rounded-md mb-2" data-ai-hint="custom mug" />
                <p>Taza AR</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg text-center">
                <Image src="https://picsum.photos/400/300?random=2" alt="Product 2" width={400} height={300} className="w-full h-auto object-cover rounded-md mb-2" data-ai-hint="graphic t-shirt" />
                <p>Polera Personalizada</p>
              </div>
              <div className="border border-black p-4 bg-white rounded-lg text-center">
                <Image src="https://picsum.photos/400/300?random=3" alt="Product 3" width={400} height={300} className="w-full h-auto object-cover rounded-md mb-2" data-ai-hint="keychain design" />
                <p>Llavero</p>
              </div>
            </div>
          </section>
        </ScrollStackItem>

        <hr className="border-t-4 border-black my-8" />

        <ScrollStackItem>
          <section
            className="border border-black p-8 bg-gray-100"
            title="Animación: el gato trae cartas o globos de diálogo con mensajes de clientes. Globos emergentes con efecto pop-up."
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              Testimonios de Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            className="border border-black p-8 bg-gray-200 flex flex-col md:flex-row gap-6 items-center justify-center h-full"
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
          <footer
            className="border border-black p-6 text-center bg-gray-100 flex flex-col items-center justify-center h-full"
            title="Animación: el gato duerme con sus lentes puestos. Respiración sutil o ronroneo animado."
          >
            <Image src="https://picsum.photos/300/200" alt="Sleeping Cat" width={300} height={200} className="w-auto h-24 object-contain rounded-lg mb-4" data-ai-hint="sleeping cat" />
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
              <div className="border border-black p-2 mb-4 md:mb-0 bg-white">
                <p>Información de Contacto y Copyright</p>
              </div>
              <div className="border border-black p-2 bg-white">
                <p>Íconos de Redes Sociales</p>
              </div>
            </div>
          </footer>
        </ScrollStackItem>
      </ScrollStack>
    </>
  );
}
