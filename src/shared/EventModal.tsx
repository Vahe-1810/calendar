import { Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux";
import { closeModal, setEventDate, setId } from "../redux/slices/eventSlice";
import SaveEvent from "../components/events/SaveEvent";

const EventModal = () => {
  const open = useAppSelector((s) => s.event.open);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(setEventDate(null));
    dispatch(setId(null));
  };

  return (
    <Modal open={open} onClose={handleClose} sx={{ boxShadow: 24 }} keepMounted>
      <div className="modal">
        <SaveEvent />
      </div>
    </Modal>
  );
};

export default EventModal;
