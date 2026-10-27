import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200 border-b',
        isScrolled
          ? 'bg-surface-canvas/85 backdrop-blur-md border-surface-border py-3 shadow-subtle'
          : 'bg-transparent border-transparent py-4 sm:py-5'
      )}
    >
      <Container size="default">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg p-1"
            aria-label="Hafiz Riaz — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-text text-surface-canvas flex items-center justify-center font-bold text-xs tracking-tighter shadow-sm transition-transform group-hover:scale-105">
              HR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base sm:text-lg tracking-tight text-surface-text group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                Hafiz Riaz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-surface-text bg-surface-elevated font-semibold'
                      : 'text-surface-muted hover:text-surface-text hover:bg-surface-elevated/60'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-surface-muted hover:text-surface-text rounded-lg hover:bg-surface-elevated transition-colors touch-target focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Quick Contact CTA for Desktop */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded-xl bg-surface-text text-surface-canvas hover:opacity-90 transition-opacity"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-surface-text hover:bg-surface-elevated rounded-lg transition-colors touch-target focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Accessible Mobile Drawer Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 bg-surface-canvas/95 backdrop-blur-xl z-50 md:hidden flex flex-col p-6 animate-in slide-in-from-top-4 duration-200 overflow-y-auto border-t border-surface-border"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-2 py-4"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex items-center justify-between px-4 py-3.5 rounded-xl text-lg font-medium transition-colors touch-target',
                    isActive
                      ? 'bg-surface-elevated text-surface-text font-semibold'
                      : 'text-surface-muted hover:text-surface-text hover:bg-surface-elevated/50'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-surface-border flex flex-col gap-4">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-surface-text text-surface-canvas font-medium text-base shadow-sm active:scale-[0.98] transition-transform"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between text-xs text-surface-subtle pt-2">
              <span>Hafiz Riaz Portfolio</span>
              <span>Available Globally</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
