import type { ReactElement } from 'react';

export interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightElement?: ReactElement;
}
