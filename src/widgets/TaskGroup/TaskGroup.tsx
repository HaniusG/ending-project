import React, { useEffect, useState } from 'react'
import styles from './TaskGroup.module.css'
import { TaskItemProps, TaskProps, } from 'pages/TasksPage/TaksPage.interface'
import Task from "features/Task";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { RootState } from 'entites/store';
import { changeDragDropItems } from 'entites/tasks/taskSlice';
import { useDispatch } from 'react-redux';
import { addTaskGroup, fetchBoard } from 'entites/board/boardSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';


const TaskGroup: React.FC = ({}) => {


  const dispatch = useDispatch();

  const dispatchA = useAppDispatch()



  const board1 = useSelector((state: RootState) => {
    
   return  state.board.board[0];
  });

  
  

 
  
  
  useEffect(() => {
    dispatchA(fetchBoard());
  }, [dispatchA]);
  
  
 
  const onDragEnd = (result: any) => {
    const { source, destination} = result;
    
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn: TaskProps= board1.board1.find((item: TaskProps) => item.id.toString() === source.droppableId) as TaskProps;
    const destinationColumn: TaskProps = board1.board1.find((item: TaskItemProps) => item.id.toString() === destination.droppableId) as TaskProps;
    
    const newSourceCards: TaskItemProps[] = Array.from(sourceColumn?.tasks as TaskItemProps[])
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard);
      
      const newColumn: TaskProps = {
        ...sourceColumn,
        tasks: newSourceCards,
      };
      const tasks3 = board1.board1.map((column: TaskProps) => column.id === newColumn.id ? newColumn : column)
      dispatchA(addTaskGroup({id: "R46dWLJPIg4MKU8rUl9N",
        postData: tasks3,
        updateCase: 'dnd',
        parentId: 0,
        selfId: 0,}))
    } else {
      const newDestinationCards: TaskItemProps[] = Array.from(destinationColumn.tasks);
      newDestinationCards.splice(destination.index, 0, removedCard);
      

      const newSourceColumn: TaskProps = {
        ...sourceColumn,
        tasks: newSourceCards
      }

      const newDestinationColumn: TaskProps = {
        ...destinationColumn,
        tasks: newDestinationCards
      }
      
      const tasks2 = (board1.board1.map((column: TaskProps) => {
        if (column.id=== newSourceColumn.id) return newSourceColumn;
        if (column.id === newDestinationColumn.id) return newDestinationColumn;
        return column
      }))
      dispatchA(addTaskGroup({id: "R46dWLJPIg4MKU8rUl9N", postData: tasks2, updateCase: 'dnd',parentId: 0, selfId: 0,}))
    }
  }

  

  

  return (
    // <>
    // {
    //   board1 && board1.board1 ? 
    // board1.board1.map((task: TaskProps) => {
    //   return (
    //     <div>
        
    //       <Task task={task} key={task.id} />
    //     </div>
    //   );
    // })

    // : null}
    // </>
    
    <DragDropContext onDragEnd={onDragEnd}>
       <div className={styles.taskGroup}>
        {board1 && board1 ?
        board1.board1.map((task: TaskProps) => {
          return (
            <Droppable droppableId={task.id.toString()} key={task.id}>
              {
                (provided) =>{
                  return (
                    <div
                    {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <Task task={task} key={task.id}/>
                    </div>
                  )
                }
              }
            </Droppable>
          )
        }
          
        ): null
      }
    </div>
    </DragDropContext>
   
  )
}

export default TaskGroup;