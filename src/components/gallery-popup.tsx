'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';


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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    } else {
        setSelectedImage(null);
    }
  }, [product]);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-screen max-w-full sm:max-w-full top-0 left-0 translate-x-0 translate-y-0 rounded-none border-0 p-6 flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-headline">{product.title}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 flex-1 md:grid-rows-[3fr_1fr] md:grid-cols-1">
          <div className="relative w-full h-full min-h-[40vh] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
            {selectedImage && (
                <Image
                src={selectedImage}
                alt={`Imagen principal de ${product.title}`}
                fill
                className="object-contain"
                data-ai-hint="product image"
                />
            )}
          </div>
          
          <div className="flex flex-col">
            <h4 className="font-semibold text-lg mb-2 text-center">Galería</h4>
            <div className="flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex items-center justify-center gap-4 p-4">
                {product.images.map((image, index) => (
                    <div
                    key={index}
                    className={cn(
                        "relative w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden cursor-pointer shrink-0 transition-all duration-200",
                        selectedImage === image ? 'ring-4 ring-primary ring-offset-2' : 'ring-2 ring-transparent hover:ring-primary/50'
                    )}
                    onClick={() => setSelectedImage(image)}
                    >
                    <Image
                        src={image}
                        alt={`Miniatura ${index + 1} de ${product.title}`}
                        fill
                        className="object-cover"
                        data-ai-hint="product thumbnail"
                    />
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

    