'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  iconLetter: string;
};

interface GalleryPopupProps {
  product: Product | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function GalleryPopup({ product, isOpen, onOpenChange }: GalleryPopupProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-headline">{product.title}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              data-ai-hint="product image"
            />
          </div>
          {/* Future gallery thumbnails can go here */}
          <div className="mt-4">
            <h4 className="font-semibold text-lg mb-2">Detalles del Producto</h4>
            <p className="text-sm text-muted-foreground">
              Aquí puedes añadir más detalles sobre el producto, una descripción más larga,
              opciones de personalización, precios, etc. Este es un buen lugar para
              convencer al cliente de que este es el producto perfecto para él.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
