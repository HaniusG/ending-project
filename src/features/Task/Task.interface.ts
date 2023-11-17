import { CommentProps, TaskProps } from "pages/TasksPage/TaksPage.interface";

export interface TaskPropsI{
    item: TaskProps;
    handleCommentShow: (comments: CommentProps[], isClicked: boolean)=>void;
}