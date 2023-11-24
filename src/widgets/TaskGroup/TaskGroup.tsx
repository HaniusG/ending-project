import React, { useState } from 'react'
import styles from './TaskGroup.module.css'
import { TaskGroupProps, TaskItemProps, TaskProps, } from 'pages/TasksPage/TaksPage.interface'
import Task from "features/Task";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const TaskGroup: React.FC<TaskGroupProps> = ({tasks}) => {

  const [columns, setColumns] = useState<TaskProps[]>(tasks);
  
 
  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn: TaskProps= columns.find((item) => item.id.toString() === source.droppableId) as TaskProps;
    const destinationColumn: TaskProps = columns.find((item) => item.id.toString() === destination.droppableId) as TaskProps;
    
    const newSourceCards: TaskItemProps[] = Array.from(sourceColumn?.tasks as TaskItemProps[])
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard);
      
      const newColumn: TaskProps = {
        ...sourceColumn,
        tasks: newSourceCards,
      };

      setColumns(columns.map(column => column.id === newColumn.id ? newColumn : column))
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
      

      setColumns(columns.map(column => {
        if (column.id=== newSourceColumn.id) return newSourceColumn;
        if (column.id === newDestinationColumn.id) return newDestinationColumn;
        return column
      }))
    }
  }

  
  
  


  return (
    <DragDropContext onDragEnd={onDragEnd}>
       <div className={styles.taskGroup}>
        {
        columns.map((item, index) => {
          return (
            <Droppable droppableId={item.id.toString()} key={item.id}>
              {
                (provided) =>{
                  return (
                    <div
                    {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <Task item={item} key={item.id}/>
                    </div>
                  )
                }
              }
            </Droppable>
          )
        }
          
        )
      }
    </div>
    </DragDropContext>
   
  )
}

export default TaskGroup;