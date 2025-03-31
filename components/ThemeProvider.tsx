"use client";

import { ReactNode, useEffect } from 'react';
import colors from 'tailwindcss/colors';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // 设置 CSS 变量到 document.documentElement
    const rootElement = document.documentElement;
    
    rootElement.style.setProperty('--primary-color', colors.blue['500']);
    rootElement.style.setProperty('--primary-hover', colors.blue['600']);
    rootElement.style.setProperty('--primary-color-50', colors.blue['50']);
    rootElement.style.setProperty('--primary-color-100', colors.blue['100']);
    rootElement.style.setProperty('--primary-color-200', colors.blue['200']);
    rootElement.style.setProperty('--primary-color-300', colors.blue['300']);
    rootElement.style.setProperty('--primary-color-500', colors.blue['500']);
    rootElement.style.setProperty('--primary-color-600', colors.blue['600']);
    rootElement.style.setProperty('--primary-color-700', colors.blue['700']);
    rootElement.style.setProperty('--primary-color-800', colors.blue['800']);
    rootElement.style.setProperty('--primary-color-900', colors.blue['900']);
    rootElement.style.setProperty('--primary-color-950', colors.blue['950']);
  }, []);

  return <>{children}</>;
} 