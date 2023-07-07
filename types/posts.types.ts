export interface IPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded: {
    author: [{ name: string }];
    'wp:featuredmedia': [{ source_url: string }];
  };
  date: string;
  content: { rendered: string };
}
