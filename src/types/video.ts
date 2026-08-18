export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    subscribers?: string;
  };
  createdAt: string;
  tags?: string[];
}
