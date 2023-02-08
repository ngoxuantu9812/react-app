import { createSlice } from '@reduxjs/toolkit';
const intialState = {
  posts: [
    {
      type:"",
      number:""
    }
  ],
  post:{
    type:"",
    number:""
  }
};
const postsSlice = createSlice({
    name: 'posts',
    intialState,
    reducers: {
      postList(state, action) {
        return { ...state, posts: action.payload };
      },
      postAdded(state, action) {
        return {
          ...state,
          posts: [...state.posts, action.payload]
        }
      },
      postSelected(state, action) {
        return { ...state,
          post: action.payload};
      },
      
      postUpdated(state, action) {
        const newPosts = state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
  
        return {
          ...state,
          posts: newPosts
        }
      },
      postDelete(state, action) {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload)
        }
      }

      
    }
  })
  
  export const { postAdded, postUpdated, postList, postSelected, postDelete} = postsSlice.actions
  
  export default postsSlice.reducer