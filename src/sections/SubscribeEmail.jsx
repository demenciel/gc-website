import { EmailRounded } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import frame from "../assets/Frame.png";
import flower from "../assets/flower.png";
import React from "react";

const SubscribeEmail = () => {
  return (
    <div className="w-full bg-background px-4 md:px-32 py-32 flex justify-center items-center ">
      <div className="bg-primary w-3/4 h-3/4 rounded py-12 px-6 md:px-32 relative">
        <div className="absolute top-[-60px] xs:top-[-100px] md:top-[-110px] left-10 ">
          <img src={flower} alt="" className="object-cover w-full md:w-3/4" />
        </div>
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl py-8 text-background">
          Restez à la pointe de la beauté et du bien-être !
        </h1>
        <p className="text-background md:text-center text-justify pb-16">
          Inscrivez-vous dès maintenant pour recevoir des mises à jour
          exclusives et des offres spéciales de Genny Santé & Beauté directement
          dans votre boîte de réception. Rejoignez notre communauté et
          laissez-nous vous guider vers une expérience de beauté enrichissante
          et unique.
        </p>
        <div className="flex justify-center">
          <Paper
            component="form"
            sx={{
              p: "8px 8px",
              display: "flex",
              alignItems: "center",
              borderRadius: 16,
              width: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email Address"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              sx={{ p: "10px", color: "#f6e5e5" }}
              aria-label="directions"
            >
              <EmailRounded />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
