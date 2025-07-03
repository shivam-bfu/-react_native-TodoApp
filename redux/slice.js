import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    selectedTasks: [],

}

const Slice =createSlice({

    name : "task",
    initialState,
    reducers:
    {
        setTasksFromTheASyncStorage: (state, action)=>{
            state.tasks = action.payload
        },

        clearAllTask: (state)=>{
            state.tasks=[]
            state.selectedTasks=[]
        },

        clearTask: (state, action)=>{
            const id =  action.payload
            state.tasks = state.tasks.filter(task => task.id !== id)

        },

        selectTasks: (state , action)=>{
            const id = action.payload
            if(state.selectedTasks.includes(id))
            {
                state.selectedTasks = state.selectedTasks.filter(taskId => taskId !== id )

            }
            else{
                state.selectedTasks.push(id)
            }

        },

        clearSelectedTask: (state)=>{

            state.tasks = state.tasks.filter(task => ! state.selectedTasks.includes(task.id))
            state.selectedTasks=[]

        },

        addtasks: (state,action) =>{
            state.tasks.push({id: Date.now(), title: action.payload})
        },



        


    },





})

export const {
    addtasks,
    clearAllTask,
    clearSelectedTask,
    clearTask,
    selectTasks,
    setTasksFromTheASyncStorage,
} = Slice.actions;


export default Slice.reducer;