'use client';
import React from 'react';
import ScrollStack, {
  ScrollStackItem,
} from '@/components/scroll-stack';
import '@/components/scroll-stack.css';

export default function SublikatWireframe() {
  return (
    <ScrollStack>
      <ScrollStackItem>
        <main className="bg-white text-black font-sans space-y-8 p-6">
          <header
            className="border border-black p-4 flex justify-between items-center bg-gray-100"
            title="Animación: el gato asoma la cabeza desde el menú o logo. Animación tipo 'peek' (asomarse y esconderse)."
          >
            <div className="border border-black p-2 bg-white">
              <p>[Logo Placeholder]</p>
            </div>
            <nav className="border border-black p-2 bg-white">
              <p>[Menú de navegación]</p>
            </nav>
          </header>
        </main>
      </ScrollStackItem>

      <ScrollStackItem>
        <section
          className="border border-black p-12 text-center bg-gray-200"
          title="Animación: el gato señala el botón principal con entusiasmo. Rebote suave del botón mientras el gato lo mira."
        >
          <h1 className="text-2xl font-bold mb-4">[Hero: Título Principal]</h1>
          <p className="mb-6">
            [Descripción del concepto de AR y personalización]
          </p>
          <div className="border border-black p-4 inline-block bg-white">
            <p>[Botón de Llamada a la Acción (CTA)]</p>
          </div>
        </section>
      </ScrollStackItem>

      <ScrollStackItem>
        <section
          className="border border-black p-8 bg-gray-100"
          title="Animación: el gato lee un libro o se muestra reflexivo mirando el texto. Pestañeo lento y movimiento suave de cola."
        >
          <h2 className="text-xl font-semibold mb-4">
            [Historia: Quiénes Somos]
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="border border-black p-4 w-full md:w-1/2 bg-white">
              <p>[Espacio para imagen o animación del gato leyendo]</p>
            </div>
            <div className="border border-black p-4 w-full md:w-1/2 bg-white">
              <p>[Texto descriptivo sobre la marca y su misión]</p>
            </div>
          </div>
        </section>
      </ScrollStackItem>

      <ScrollStackItem>
        <section
          className="border border-black p-8 bg-gray-200"
          title="Animación: el gato interactúa con productos (sostiene taza, usa polera, duerme sobre llavero). Cambio de pose al hacer hover sobre cada producto."
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            [Productos Personalizados]
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 1: Taza AR]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 2: Polera Personalizada]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 3: Llavero]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 4: Póster]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 5: Stickers]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Tarjeta de Producto 6: Otros]</p>
            </div>
          </div>
        </section>
      </ScrollStackItem>

      <ScrollStackItem>
        <section
          className="border border-black p-8 bg-gray-100"
          title="Animación: el gato trae cartas o globos de diálogo con mensajes de clientes. Globos emergentes con efecto pop-up."
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            [Testimonios de Clientes]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-black p-4 bg-white">
              <p>[Testimonio de cliente 1]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Testimonio de cliente 2]</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <p>[Testimonio de cliente 3]</p>
            </div>
          </div>
        </section>
      </ScrollStackItem>

      <ScrollStackItem>
        <section
          className="border border-black p-8 bg-gray-200"
          title="Animación: el gato entrega un sobre o usa un portátil. Animación de tap con su patita sobre el formulario."
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            [Formulario de Contacto]
          </h2>
          <div className="border border-black p-4 bg-white">
            <p>
              [Placeholder para campos del formulario (nombre, email, mensaje)]
            </p>
          </div>
          <div className="border border-black p-2 mt-4 inline-block bg-white">
            <p>[Botón de Enviar]</p>
          </div>
        </section>
      </ScrollStackItem>

      <ScrollStackItem>
        <footer
          className="border border-black p-6 text-center bg-gray-100"
          title="Animación: el gato duerme con sus lentes puestos. Respiración sutil o ronroneo animado."
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="border border-black p-2 mb-4 md:mb-0 bg-white">
              <p>[Información de Contacto y Copyright]</p>
            </div>
            <div className="border border-black p-2 bg-white">
              <p>[Íconos de Redes Sociales]</p>
            </div>
          </div>
        </footer>
      </ScrollStackItem>
    </ScrollStack>
  );
}