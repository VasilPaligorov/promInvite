import { AnimatePresence, motion } from "framer-motion";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import { useState } from "react";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function App() {
  // Modal state
  const { modalOpen, close, open } = useModal();
  const [img, setImg] = useState("mail.png");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  function setOpened() {
    setImg("openedMail.png");
    setShowConfetti(true);  
    open();
  }

  return (
    <>
      {showConfetti ?
        <Confetti
          width={width}
          height={height}
        />
        :
        <></>
      }
      <motion.main>
        <h1>If you aren't scared click here:</h1>
        <motion.img src={img}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpened()}
          style={{
            padding: "auto"
          }}
        />
      </motion.main>

      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} setShowConfetti={setShowConfetti}/>
        )}
      </ModalContainer>
    </>
  );
}
const ModalContainer = ({ children }) => (

  <AnimatePresence
    initial={false}
    exitBeforeEnter={true}
  >
    {children}
  </AnimatePresence>
);

export default App;
