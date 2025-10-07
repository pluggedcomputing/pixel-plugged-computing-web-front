import { Footer } from './button-footer.model';
import { Exercice } from './exercice.model';

export interface Card {
  type: string;
  id: number;
  title: string;
  imgUrl?: string;
  text: string;
  exercice?: Exercice;
  footers?: Footer[];
}
