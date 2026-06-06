export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
      name: string;
      initials: string;
    };
    publishedAt: string;
    readingTime: number;
    coverGradient: string;
    featured?: boolean;
  }