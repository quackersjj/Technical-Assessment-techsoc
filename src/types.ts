export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  fullContent: string;
  imageDimensions: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageDimensions: string;
}
