import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usuariopersonaactual: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addusuariopersonaactual: function(state, action){
        state.usuariopersonaactual= action.payload;
    },

    vaciarusuariopersonaactual: function(state, action){
        state.usuariopersonaactual=null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addusuariopersonaactual, vaciarusuariopersonaactual } = userSlice.actions

export default userSlice.reducer