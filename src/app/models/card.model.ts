import { Footer } from './button-footer.model';
import { Exercice } from './exercice.model';
import { Matriz } from './matriz.model';

export interface Card {
  type: string;
  id: number;
  title: string;
  imgUrl?: string;
  text: string;
  matriz?: Matriz;
  qrCode?: string;
  exercice?: Exercice;
  footers?: Footer[];
}
