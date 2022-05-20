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
        <ModalText text={"text"} />
        <ModalButton onClick={() => closeModal()} label="Close" />
      </motion.div>
    </Backdrop>
  );
};

const ModalText = () => (
  <div className="modal-text">
    <h3>Покана</h3>
    <h5>
      С благодарност за отделения труд, разбирането, старанието и приятелското отношение, каним Богдан Богданов на своя бал! - 12А клас ТУЕС (випуск 2022) 
    </h5>
    <div className="location">
      <h6>Място: <a target="_blank" href="https://www.google.com/maps/place/%D0%A0%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D1%8F+%D0%A2%D0%B5%D1%80%D0%B0+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.6513166,23.3653864,16.5z/data=!4m5!3m4!1s0x40aa869b6fa025c5:0xf208ee42b152e139!8m2!3d42.6519393!4d23.3675725">Резиденция Тера</a></h6>
      <h6>Дата и час: 11.06.2022, 18:00</h6>
    </div>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
