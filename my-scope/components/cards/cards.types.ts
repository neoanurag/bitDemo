import { ReactNode } from 'react';

export enum CardType {

}
export enum CardSize {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export interface CardsProps {
  children: ReactNode;
  type: CardType;
  cardSize?: 'sm'|'md';
}
