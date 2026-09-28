'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/console', label: 'Overview' },
  { href: '/console/alerts', label: 'Alerts' },
  { href: '/console/investigations', label: 'Investigations' },
  { href: '/console/evidence', label: 'Evidence' },
  { href: '/console/response', label: 'Response' },
];

export function ConsoleSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-muted/30">
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
