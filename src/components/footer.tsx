'use client';

import { IconBrandGithub } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="border-t-4 border-blue-600 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          
          {/* Identity */}
          <span className="font-medium text-sm text-black">
            © 2026 JustParadis
          </span>

          {/* Source Code */}
          <a
            href="https://github.com/FUBARwithall/portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-sm text-black underline underline-offset-4 transition-colors hover:text-blue-600"
          >
            <IconBrandGithub size={16} />
            Source code
          </a>

        </div>
      </div>
    </footer>
  );
}
