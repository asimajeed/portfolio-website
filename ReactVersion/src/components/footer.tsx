import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500" /> by Saiyed Asim Majeed
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}