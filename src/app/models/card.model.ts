export interface Card {
  type: 'screenText' | 'screenQuestion' | 'screenCongratulations';
  id: number;
  title: string;
  imgUrl?: string;
  text: string;
}
