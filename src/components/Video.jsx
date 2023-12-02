import { Box, Modal } from "@mui/material";
import React from "react";

const VideoModal = ({ open, setOpenModal, video }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: window.innerWidth >= 800 ? "70%" : "100vw",
  };

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <Box sx={style} className="w-100">
        <button className="absolute right-5 top-5" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-background hover:text-cta"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <video width="100%" height="100%" controls autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Modal>
  );
};

export default VideoModal;
