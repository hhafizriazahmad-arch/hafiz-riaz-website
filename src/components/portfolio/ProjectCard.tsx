import React, { useState } from 'react';
import { Project } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { ArrowUpRight, Layers, CheckCircle2, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        variant="interactive"
        className="flex flex-col h-full bg-surface-card border-surface-border p-6 sm:p-7 relative group"
      >
        {/* Top Meta: Category & Year */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
          <span className="text-xs font-mono text-surface-subtle flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {project.year}
          </span>
        </div>

        {/* Title and Subtitle */}
        <h3 className="text-lg sm:text-xl font-semibold text-surface-text tracking-tight mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-surface-subtle font-medium mb-3">
          {project.subtitle}
        </p>

        {/* Project Summary */}
        <p className="text-sm text-surface-muted leading-relaxed mb-5 flex-grow">
          {project.summary}
        </p>

        {/* Highlight Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 p-3 bg-surface-elevated/60 rounded-xl mb-5 border border-surface-border/60">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-surface-subtle tracking-wider">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-surface-text font-mono">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-elevated text-surface-muted border border-surface-border/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-surface-border flex items-center justify-between">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs sm:text-sm font-medium text-surface-text hover:text-accent-600 dark:hover:text-accent-400 transition-colors inline-flex items-center gap-1 touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded p-1"
            aria-label={`View case details for ${project.title}`}
          >
            <span>Case Details</span>
            <Layers className="w-3.5 h-3.5" />
          </button>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-surface-subtle hover:text-surface-text inline-flex items-center gap-1 touch-target p-1"
              aria-label={`Open repository or project page for ${project.title}`}
            >
              <span>Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </Card>

      {/* Accessible Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono text-surface-subtle">
              Year: {project.year}
            </span>
            <span className="text-xs font-mono text-surface-subtle">
              Role: {project.role}
            </span>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-subtle mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-surface-text leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-subtle mb-3">
              Key Deliverables
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-surface-muted">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance & Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-subtle mb-3">
                Measured Impact
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-surface-elevated rounded-xl border border-surface-border text-center"
                  >
                    <span className="block text-lg font-bold text-surface-text font-mono">
                      {m.value}
                    </span>
                    <span className="block text-xs text-surface-subtle mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-surface-subtle mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-elevated text-surface-text border border-surface-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-surface-subtle">
              Part of Hafiz Riaz portfolio archive
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              {project.link && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.link}
                  isExternal
                  rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto"
                >
                  Explore Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
