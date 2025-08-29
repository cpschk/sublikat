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
import { ScrollArea } from '@/components/ui/scroll-area';

export type Product = {
  id: string;
  title: string;
  description: string;
  images: string[];
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
      <DialogContent className="w-[93vw] max-w-[93vw] h-[90vh] rounded-lg border-0 p-6 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-headline">{product.title}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 rounded-md -mx-6">
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-md overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`Imagen ${index + 1} de ${product.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="product image"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
