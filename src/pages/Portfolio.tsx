import React, { useState, useMemo } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { PROJECTS, BRAND_INFO } from '../data/content';
import { Search, Filter, Mail, RefreshCw } from 'lucide-react';
import { cn } from '../utils/cn';

const CATEGORIES = [
  'All',
  'Web Design',
  'Digital Product',
  'Creative Tech',
  'Brand Systems',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 pt-6 sm:pt-10">
      {/* Portfolio Header */}
      <section aria-labelledby="portfolio-title">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
              Portfolio Archive
            </span>
            <h1
              id="portfolio-title"
              className="fluid-h1 font-bold text-surface-text tracking-tight"
            >
              Selected Work & Projects
            </h1>
            <p className="fluid-body text-surface-muted leading-relaxed">
              A curated collection of digital products, design systems, and web applications engineered with emphasis on performance, typography, and responsive ergonomics.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Search Bar */}
      <section aria-label="Project filtering and search controls">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border shadow-subtle">
            {/* Category Segmented Tabs */}
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none"
              role="tablist"
              aria-label="Filter projects by category"
            >
              <Filter className="w-4 h-4 text-surface-subtle ml-1 mr-1 hidden sm:block" />
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                      isSelected
                        ? 'bg-surface-text text-surface-canvas shadow-sm font-semibold'
                        : 'text-surface-muted hover:text-surface-text hover:bg-surface-elevated'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-surface-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, skill, stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-surface-elevated/70 border border-surface-border text-surface-text placeholder:text-surface-subtle focus:outline-none focus:ring-2 focus:ring-accent-500"
                aria-label="Search projects by keyword"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-surface-subtle hover:text-surface-text"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Result Count Status */}
          <div className="pt-4 flex items-center justify-between text-xs text-surface-subtle px-1">
            <span>
              Showing {filteredProjects.length} of {PROJECTS.length} projects
            </span>
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-accent-600 hover:underline inline-flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section aria-label="Projects list">
        <Container size="default">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-6 bg-surface-card border border-surface-border rounded-3xl max-w-md mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center mx-auto text-surface-subtle">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-surface-text">
                No matching projects found
              </h3>
              <p className="text-xs sm:text-sm text-surface-muted">
                We couldn’t find any work matching your search criteria. Try choosing a different category or clearing the search term.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleResetFilters}
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Inquire for Custom Project */}
      <section aria-label="Project inquiry invitation">
        <Container size="default">
          <div className="bg-surface-elevated/70 border border-surface-border rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-surface-text">
              Have a specific project in mind?
            </h2>
            <p className="text-sm text-surface-muted max-w-xl mx-auto">
              I collaborate with clients on bespoke websites, design systems, and frontend applications. Let’s talk about your vision and timeline.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Discuss Your Project
              </Button>
              <Button
                href={`mailto:${BRAND_INFO.email}`}
                variant="outline"
                size="md"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Email Hafiz Directly
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
