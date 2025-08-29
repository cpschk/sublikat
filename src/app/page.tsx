import Image from 'next/image';
import Link from 'next/link';
import {
  Cat,
  Heart,
  BookOpen,
  Mail,
  Twitter,
  Instagram,
  Github,
  Star,
  Sparkles,
  Palette,
  ArrowRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/logo';
import PersonalizationStudio from './personalization-studio';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const products = [
    {
      name: 'AR Magic Mug',
      description: 'Watch your photos come to life with our augmented reality mugs.',
      image: 'https://picsum.photos/400/300',
      hint: 'mug coffee',
    },
    {
      name: 'Custom Threads',
      description: 'Wear your memories with our high-quality personalized t-shirts.',
      image: 'https://picsum.photos/400/300?random=2',
      hint: 't-shirt model',
    },
    {
      name: 'Keychain Keepsakes',
      description: 'Carry a special moment with you wherever you go.',
      image: 'https://picsum.photos/400/300?random=3',
      hint: 'keys keychain',
    },
    {
      name: 'Artistic Posters',
      description: 'Turn your walls into a gallery of your favorite pictures.',
      image: 'https://picsum.photos/400/300?random=4',
      hint: 'poster wall',
    },
    {
      name: 'Sticker Swag',
      description: 'Personalize your gear with durable, custom-made stickers.',
      image: 'https://picsum.photos/400/300?random=5',
      hint: 'stickers laptop',
    },
    {
      name: 'And Much More...',
      description: "Explore our full range of customizable products for any occasion.",
      image: 'https://picsum.photos/400/300?random=6',
      hint: 'gift box',
    },
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      quote: "The AR mug was a gift for my partner, and it was a huge hit! Seeing our video play on the mug was pure magic. SubliCat is amazing!",
    },
    {
      name: 'Samantha Bee',
      quote: "I'm so impressed with the AI design suggestions. I uploaded a photo, and it gave me a perfect color palette for my t-shirt. It looked so professional.",
    },
    {
      name: 'Mike Chen',
      quote: "The quality of the products is top-notch, and the customer service is even better. The cat theme is super cute, my new favorite shop!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
            <Link href="#products" className="transition-colors hover:text-primary">Products</Link>
            <Link href="#personalize" className="transition-colors hover:text-primary">Create</Link>
            <Link href="#testimonials" className="transition-colors hover:text-primary">Testimonials</Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32" id="hero">
          <div className="container text-center">
             <div className="absolute top-10 right-10 transform -rotate-12 opacity-10 dark:opacity-5">
                <Cat size={128} className="text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
              AR Your Way with SubliCat
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Transform your memories into tangible treasures. Upload your photo, personalize products, and watch them come to life with a touch of augmented reality.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link href="#personalize">
                  Start Creating <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/600/700"
                  alt="Cat reading a book"
                  width={600}
                  height={700}
                  className="object-cover"
                  data-ai-hint="cat reading"
                />
                 <div className="absolute top-4 right-4 bg-primary p-3 rounded-full text-primary-foreground">
                    <BookOpen size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Who We Are</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  SubliCat was born from a love for creativity, technology, and, of course, cats. We believe that the best products are personal. Our mission is to provide you with the tools to create unique, high-quality items that tell your story.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  From AI-powered design assistance to magical AR previews, we're here to make personalization simple, fun, and accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Personalized Products</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Each item is a canvas for your creativity. Choose a product and make it uniquely yours.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.name} className="flex flex-col overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full aspect-video transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={product.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <Separator />

        <section id="personalize" className="py-20 md:py-24 bg-secondary">
          <div className="container">
             <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Personalization Studio</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Upload an image to preview it on our products and get free AI-powered design suggestions!
                </p>
            </div>
            <PersonalizationStudio />
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Loved by Creatives</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Don't just take our word for it. Here's what our happy customers have to say.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                    </div>
                    <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                    <p className="mt-4 font-bold text-right">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-24 bg-secondary">
          <div className="container max-w-2xl">
            <div className="text-center">
                <Mail className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Have questions or a special request? Our team is here to help.
                </p>
            </div>
            <Card className="mt-12">
                <CardContent className="p-6">
                    <ContactForm />
                </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                © {new Date().getFullYear()} SubliCat. All rights reserved. <br/>
                Crafting memories with a purr-fect touch.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold tracking-wide">Products</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><Link href="#products" className="text-muted-foreground hover:text-primary">Mugs</Link></li>
                        <li><Link href="#products" className="text-muted-foreground hover:text-primary">T-Shirts</Link></li>
                        <li><Link href="#products" className="text-muted-foreground hover:text-primary">Keychains</Link></li>
                        <li><Link href="#products" className="text-muted-foreground hover:text-primary">More...</Link></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold tracking-wide">Company</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><Link href="#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                        <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
                        <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold tracking-wide">Connect</h3>
                     <div className="flex mt-4 space-x-4">
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                        </Button>
                         <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
