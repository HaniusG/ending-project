import { TaskProps } from "pages/TasksPage/TaksPage.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItemProps } from "pages/TasksPage/TaksPage.interface";

interface initialStateTasks {
  tasks: TaskProps[];
}

interface changeTaskINProps {
  parentId: number;
  selfId?: number;
  name: string;
}

const initialState: initialStateTasks = {
  tasks: [
    {
      id: 1,
      taskState: "Backlog",
      tasks: [
        {
          id: 1,
          name: "planning",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image:
                  "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
              },
              text: "I think this looks cool, its the best task i have ever done, the thing is cool, the best part is the lorem for a while thats why this",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "Mike M.",
                    image:
                      "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  text: "No, because youre thinking very simply and awkwardm, you dont think that this is too mucj",
                  date: new Date().toDateString(),
                },
                {
                  id: 2,
                  author: {
                    id: 34,
                    name: "Esim Inch",
                    image:
                      "https://images.ctfassets.net/cnu0m8re1exe/621LK0hTGKrRBzXdnqiuuE/e82b6415d8dec51658f2acd6ea6b70b7/viking.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
                  },
                  text: "Get out then",
                  date: new Date().toDateString(),
                },
              ],
            },
            {
              id: 2,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image:
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              text: "I think this looks cool",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "Mike M.",
                    image:
                      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  text: "No",
                  date: new Date().toDateString(),
                },
                {
                  id: 2,
                  author: {
                    id: 34,
                    name: "Esim Inch",
                    image:
                      "https://images.ctfassets.net/cnu0m8re1exe/621LK0hTGKrRBzXdnqiuuE/e82b6415d8dec51658f2acd6ea6b70b7/viking.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
                  },
                  text: "Get out then",
                  date: new Date().toDateString(),
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "making",
          comments: [],
        },
      ],
    },
    {
      id: 2,
      taskState: "In Progress",
      tasks: [
        {
          id: 3,
          name: "test",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image:
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              text: "comment text",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
        {
          id: 4,
          name: "using",
          comments: [],
        },
      ],
    },
  ],
};



export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeTaskItemName: (state, action: PayloadAction<changeTaskINProps>) => {
      state.tasks = state.tasks.map((task: TaskProps) =>
        task.id === action.payload.parentId
          ? {
              ...task,
              tasks: task.tasks.map((taskItem: TaskItemProps) =>
                taskItem.id === action.payload.selfId
                  ? { ...taskItem, name: action.payload.name }
                  : taskItem
              ),
            }
          : task
      );
    },
    changeDragDropItems: (state, action: PayloadAction<TaskProps[]>) => {
      state.tasks = action.payload;
    },
    addItem: (state,  action: PayloadAction<changeTaskINProps>) =>{
      const task = state.tasks.find(task=> task.id===action.payload.parentId)
    
      const ids:number[] = [];
      
      state.tasks.map((task)=>task.tasks.map((object) => {
        return(ids.push(object.id)) 
      }))
      
            
     
      const max = ids ? Math.max(...ids): 1000;


      task?.tasks.push( {
        id: max+1,
        name: action.payload.name,
        comments: [
         
        ],
      },
      
     
      )
   
    },

    
    addTask:(state, action: PayloadAction<string>)=>{
      const ids:number[] =[]
      state.tasks.map(task=>{ids.push(task.id)})

      const max = ids ? Math.max(...ids): 0;
      state.tasks.push( {
        id: max+1,
        taskState: action.payload,
        tasks: [
        
        ],
      },)
    }
  },
  
});
;

export const {changeTaskItemName, changeDragDropItems, addItem, addTask} = tasksSlice.actions;

export default tasksSlice.reducer;
