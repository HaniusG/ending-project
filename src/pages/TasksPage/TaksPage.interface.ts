export interface Author {
  id: number;
  name: string;
  image: string;
}

export interface ReplyProps {
  id: number;
  author: Author;
  text: string;
  date: string;
}

export interface CommentProps {
  id: number;
  author: Author;
  text: string;
  date: string;
  replies: ReplyProps[];
}

export interface TaskItemProps {
  id: number;
  name: string;
  comments: CommentProps[];
}

export interface TaskProps {
  id: number;
  taskState: string;
  tasks: TaskItemProps[];
}

export interface TaskGroupProps {
  tasks: TaskProps[];
}





 
