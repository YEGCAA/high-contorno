import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 border border-white/20 hover:border-white transition-colors duration-300 bg-brand-black/50 backdrop-blur-sm h-full">
      <div className="mb-4 text-white">
        <Icon size={24} strokeWidth={1} />
      </div>
      <h3 className="text-lg font-serif text-white mb-2 tracking-wide">{title}</h3>
      {description && <p className="text-gray-400 text-sm leading-relaxed font-light">{description}</p>}
    </div>
  );
};