import React from 'react';

export interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface StatProps {
  value: string;
  label: string;
  subtext?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}