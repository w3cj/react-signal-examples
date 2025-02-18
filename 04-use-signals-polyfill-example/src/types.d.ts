import { Signal } from 'use-signals';
import type { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
      p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      label: DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
      input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      strong: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
} 