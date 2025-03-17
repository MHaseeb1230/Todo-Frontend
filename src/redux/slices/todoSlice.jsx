import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get("http://localhost:5000/api/todos", {
      headers: { Authorization: `Bearer ${token}` }, 
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch todos");
  }
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (id) => {
  const response = await axios.patch(`http://localhost:5000/api/todos/${id}/toggle`);
  return response.data;
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (taskText, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/todos", {
        text: taskText,
        completed: false,
      });
      return response.data; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add todo"
      );
    }
  }
);


export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todoId}`);
      return todoId; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete todo"
      );
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload; 
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })

      
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload); 
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
      });
  },
});



export default todoSlice.reducer;
