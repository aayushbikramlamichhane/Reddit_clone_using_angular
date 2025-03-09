export interface FeedData {
  id: number;
  logo: string;
  name: string;
  content: string;
  img: string;
  upvoteCount: number;
  commentCount: number;
  isEditing ?: boolean;
  comment: Comment[];
}

export interface Comment {
  logo: string;
  title: string;
  body: string;
  upvote: number;
}