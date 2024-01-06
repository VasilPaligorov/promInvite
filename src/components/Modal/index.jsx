import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, setShowConfetti }) => {

  function closeModal() {
    setShowConfetti(false);
    handleClose();
  }

  return (
    <Backdrop onClick={() => closeModal()}>
      <motion.div
        onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalButton onClick={() => closeModal()} />
      </motion.div>
    </Backdrop>
  );
};

const ModalButton = ({ onClick }) => (
  <motion.button
    className="modal-button"
    
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <i className="fas fa-times">X</i>
  </motion.button>
);

export default Modal;
