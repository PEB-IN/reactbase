import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { STATUS } from "../../services/Status";

const initialState = {
  modaldata: [],

  status: STATUS.LOADING,
  modalvisible: false,
  termsmodal: false,
  cartmodal: false,
};

const modalSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },

    setIsModalVisible(state, action) {
      state.modalvisible = action.payload;
    },

    setModalData(state, action) {
      state.modaldata = action.payload;
    },
    setIsTermsModalVisible(state, action) {
      state.termsmodal = action.payload;
    },
    setIsCartModalVisible(state, action) {
      state.cartmodal = action.payload;
    },
  },
});

export const {
  setStatus,
  setIsTermsModalVisible,
  setIsModalVisible,
  setModalData,
  setIsCartModalVisible,
} = modalSlice.actions;
export default modalSlice.reducer;
