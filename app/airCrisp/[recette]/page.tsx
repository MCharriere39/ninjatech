'use client';
import { usePathname } from 'next/navigation';

export default function recette() {
  const ingredient = decodeURIComponent(usePathname().split('/')[usePathname().split('/').length - 1]);
  return (
    <main>
      {ingredient}
    </main>
  );
}
