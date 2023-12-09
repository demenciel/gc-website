import { Box, CircularProgress, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";

const VideoModal = ({ open, setOpenModal, video }) => {
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (open) {
        setIsLoading(false);
      }
    }, 2000);
    if (!open) {
      setIsLoading(true);
    }
  }, [open]);

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
      {isLoading ? (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="w-100 h-100"
          >
            <CircularProgress size={64} />
          </Box>
        </>
      ) : (
        <Box sx={style} className="w-100">
          {/* <button className="absolute right-5 top-5 z-10" onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-background hover:text-cta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}
          <video width="100%" height="100%" controls autoPlay>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      )}
    </Modal>
  );
};

export default VideoModal;
