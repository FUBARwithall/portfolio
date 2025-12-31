'use client';

import { useEffect, useState } from 'react';
import { IconBrandGithub, IconClock } from '@tabler/icons-react';
import moment from 'moment-timezone';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Adjusted to your local timezone based on your profile name/location
      setTime(moment().tz('Asia/Jakarta').format('HH:mm:ss z'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t-4 border-blue-600 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 text-xs">
        {/* items-center centers the flex-col items on mobile */}
        {/* md:justify-between pushes them to the sides on desktop */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          
          {/* Left / Top Section */}
          <div className="flex items-center gap-2 font-medium">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </div>
            <span>Local Time: {time || 'Loading...'}</span>
          </div>

          {/* Right / Bottom Section */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/absolutepraya/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 underline underline-offset-4 hover:text-blue-600 transition-colors"
            >
              <IconBrandGithub size={14} />
              Source code
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}