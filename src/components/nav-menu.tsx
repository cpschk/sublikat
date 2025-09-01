'use client';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navItems = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Quiénes Somos', id: 'quienes-somos' },
  { label: 'Productos', id: 'productos' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Contacto', id: 'contacto' },
];

export const NavMenu = ({ isMobile = false }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const scroller = document.querySelector('.scroll-stack-scroller');

    if (section && scroller) {
      let parent = section.parentElement;
      while (parent && !parent.classList.contains('scroll-stack-card')) {
        parent = parent.parentElement;
      }

      if (parent) {
        // Dispatch a custom event with the target offsetTop.
        // The ScrollStack component will listen for this event.
        const event = new CustomEvent('scroll-to-section', {
          detail: { top: parent.offsetTop },
        });
        window.dispatchEvent(event);
      }
    }
    
    // Close sheet if on mobile
    if (isMobile) {
      const closeButton = document.querySelector(
        '[data-radix-dialog-close]'
      ) as HTMLElement | null;
      closeButton?.click();
    }
  };

  return (
    <nav
      className={cn(
        'flex items-center gap-2',
        isMobile && 'flex-col items-start'
      )}
    >
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          onClick={() => scrollToSection(item.id)}
          className={cn(isMobile && 'w-full justify-start text-lg')}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
};
