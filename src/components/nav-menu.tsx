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
      // We need to find the scrollstackitem parent to scroll to the correct position
      let parent = section.parentElement;
      while(parent && !parent.classList.contains('scroll-stack-card')) {
        parent = parent.parentElement;
      }

      if (parent) {
         scroller.scrollTo({
            top: parent.offsetTop,
            behavior: 'smooth',
        });
      }

    }
    // Close sheet if on mobile
    if (isMobile) {
        const closeButton = document.querySelector('[data-radix-dialog-close]');
        if (closeButton instanceof HTMLElement) {
            closeButton.click();
        }
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
