'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loader2, Palette, UploadCloud, Wand2, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { handleGetDesignSuggestions } from './actions';
import type { DesignSuggestionOutput } from '@/ai/flows/design-suggestion-on-upload';
import { Skeleton } from '@/components/ui/skeleton';

export default function PersonalizationStudio() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<DesignSuggestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        toast({
            variant: 'destructive',
            title: 'Invalid File Type',
            description: 'Please upload an image file.',
        });
        return;
    }

    setIsLoading(true);
    setSuggestions(null);
    setError(null);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageDataUri = e.target?.result as string;
      setImagePreview(imageDataUri);

      try {
        const result = await handleGetDesignSuggestions(imageDataUri);
        if (result.success && result.suggestions) {
          setSuggestions(result.suggestions);
          toast({
            title: 'Suggestions Ready!',
            description: 'Our AI cat has some design ideas for you.',
          });
        } else {
          setError(result.error || 'An unknown error occurred.');
           toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: result.error || 'Could not get suggestions.',
          });
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setError(errorMessage);
         toast({
            variant: 'destructive',
            title: 'Failed to get suggestions.',
            description: errorMessage,
          });
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-12">
      <Card className="w-full">
        <CardContent className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-sm h-80 bg-muted rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed">
                {imagePreview ? (
                   <Image src={imagePreview} alt="User upload preview" layout="fill" objectFit="contain" className="p-2"/>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <UploadCloud className="mx-auto h-12 w-12" />
                    <p className="mt-2">Your image will appear here</p>
                  </div>
                )}
              </div>

              <Button asChild className="mt-6 w-full max-w-sm">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Upload Image
                </label>
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-6">
                <div className="text-center md:text-left">
                     <h3 className="text-2xl font-bold font-headline">AI Design Assistant</h3>
                     <p className="text-muted-foreground mt-1">Let our creative AI help you design the perfect product.</p>
                </div>

              {isLoading && <SuggestionSkeleton />}

              {error && !isLoading && (
                <Card className="bg-destructive/10 border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Error</CardTitle>
                        <CardDescription className="text-destructive">{error}</CardDescription>
                    </CardHeader>
                </Card>
              )}
              
              {!isLoading && suggestions && (
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Palette className="h-6 w-6"/>
                            </div>
                            <CardTitle className="font-headline text-2xl">Color Palette</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-3">
                            {suggestions.colorPalette.map((color, index) => (
                                <div key={index} className="flex items-center gap-2">
                                <div
                                    className="h-10 w-10 rounded-full border-2 shadow-inner"
                                    style={{ backgroundColor: color }}
                                />
                                <span className="font-mono text-sm">{color}</span>
                                </div>
                            ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="p-3 bg-accent/10 rounded-full text-accent">
                                <Lightbulb className="h-6 w-6"/>
                            </div>
                            <CardTitle className="font-headline text-2xl">Design Elements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{suggestions.designElements}</p>
                        </CardContent>
                    </Card>
                </div>
              )}
               {!isLoading && !suggestions && !error && (
                <div className="text-center border-2 border-dashed rounded-lg p-12 text-muted-foreground">
                    <Wand2 className="mx-auto h-12 w-12" />
                    <p className="mt-4 font-semibold">Design suggestions will appear here</p>
                    <p className="text-sm">Upload an image to get started!</p>
                </div>
               )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const SuggestionSkeleton = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Skeleton className="h-14 w-14 rounded-full" />
                <Skeleton className="h-7 w-40" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Skeleton className="h-14 w-14 rounded-full" />
                <Skeleton className="h-7 w-48" />
            </CardHeader>
            <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
            </CardContent>
        </Card>
    </div>
)
