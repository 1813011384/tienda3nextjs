import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carrito: [],
}

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    agregarelementoalcarrito: (state, action) => {
      const medc= state.carrito.find(function(edarray){ return edarray._id=== action.payload._id });
      if(medc){
        medc.cantidad= parseInt(medc.cantidad)+ parseInt(action.payload.cantidad);
      }else{
        state.carrito.push(action.payload);
      }
      
    },

    incrementarcantidaddeedcarrito: (state, action) => {//le das el _id
      const medc= state.carrito.find(function(edarray){ return edarray._id=== action.payload });
      medc.cantidad= parseInt(medc.cantidad)+1;
    },

    disminuircantidaddeedcarrito: (state, action) => {//le das el _id
      const medc= state.carrito.find(function(edarray){ return edarray._id=== action.payload });
      medc.cantidad=medc.cantidad-1;
    },

    eliminarelementoalcarrito: (state, action) => {//da el _id
      state.carrito= state.carrito.filter(function(eda){ return eda._id!=action.payload });
      
    },

    vaciarelcarrito: function(state, action){
        state.carrito=[];
    }
  },
})

// Action creators are generated for each case reducer function
export const { agregarelementoalcarrito, vaciarelcarrito, disminuircantidaddeedcarrito, incrementarcantidaddeedcarrito, eliminarelementoalcarrito } = carritoSlice.actions

export default carritoSlice.reducer