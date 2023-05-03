import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import Uploadbutton from "../../../assets/img/Uploadbutton.svg";
import Header from "../../common/header";
import MensajeSvg from "../../../assets/img/messages_G.svg";
import NavbarMessage from "./NabvarMessage";

export default function Message() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [uploadStatus, setUploadStatus] = useState("");

  const handleTitleInputChange = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleDescriptionInputChange = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const handleUploadClick = () => {
    const uploadFormData = new FormData();
    uploadFormData.append("title", formData.title);
    uploadFormData.append("description", formData.description);
    axios
      .post("https://example.com/upload-message", uploadFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadStatus(`Upload progress: ${percentCompleted}%`);
        },
      })
      .then((response) => {
        console.log(response.data);
        setUploadStatus("Upload successful");
      })
      .catch((error) => {
        console.error(error);
        setUploadStatus("Upload failed");
      });
  };

  return (
    <div>
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={MensajeSvg} alt="mensajes"/>
        <h2>MENSAJES</h2>
      </div>
      <div className=" container-body-all">
        <NavbarMessage />
        <div className="container-recive-info container-recive_body">
          <label className="recive_title">
            <h2>Titulo:</h2>
          </label>
          <input
            className="recive_input"
            type="text"
            value={formData.title}
            onChange={handleTitleInputChange}
          />
        </div>
        <div className="container-recive-info container_recive">
          <label className="recive_title">
            <h2>Mensaje:</h2>
          </label>
          <div class="input-group">
            <textarea //estilos se desborda y falta el color de fondo ,la clase quedo recive_input-height --favor borrar comentario cuando se corrija.
              class="form-control recive_input-height"
              aria-label="With textarea"
              type="text"
              value={formData.description}
              onChange={handleDescriptionInputChange}></textarea>
          </div>
        </div>
        <div className="imagen-uploader">
          <button onClick={handleUploadClick}>
            <img src={Uploadbutton} alt="Enviar"></img>
            <h2>Enviar</h2>
          </button>
        </div>
        <p>{uploadStatus}</p>
      </div>
    </div>
  );
}
