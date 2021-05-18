import { SHOW_MODAL, HIDE_MODAL } from "../../constants/actionsTypes";

export const showModal = (show, modalData) => ({
  type: SHOW_MODAL,
  payload: {
    show,
    modalData,
  },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
