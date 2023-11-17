import { CommentProps, TaskItemProps } from 'pages/TasksPage/TaksPage.interface';
export interface TaskItemPropsI{
    i:TaskItemProps;
    handleCommentShow: (comments: CommentProps[], isClicked: boolean)=> void;
}