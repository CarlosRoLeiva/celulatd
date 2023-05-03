import React, { useState } from "react";
import axios from "axios";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import Uploadbutton from "../../../assets/img/Uploadbutton.svg";
import Header from "../../common/header";
import UploadSvg from "../../../assets/img/upload_G.svg";
import NavbarVideo from "../video/NavbarVideo.jsx";

export default function VideoUploader() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileInputChange = (event) => {
    setFormData(event.target.files[0]);
  };

  const handleTitleInputChange = (event) => {
    setFormData(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setFormData(event.target.value);
  };


  const handleUpload = () => {
    const { title, description } = formData;
    const formDataUpload = new FormData();
    formDataUpload.append("title", title);
    formDataUpload.append("description", description);
    axios
      .post("https://example.com/upload-video", formDataUpload, {
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
        <img className="svg-img-barra" src={UploadSvg} alt="Subir Documentos" />
        <h2>SUBIR DOCUMENTO</h2>
      </div>
      <div className="container-body-all">
        <NavbarVideo />
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
            <h2>Description:</h2>
          </label>
          <input
            className="recive_input recive_input-height"
            type="text"
            value={formData.description}
            onChange={handleDescriptionInputChange}
          />
        </div>
        <div className="imagen-uploader">
          <button onClick={handleUpload}>
            <img className="imagen-button" src={Uploadbutton} alt="Boton enviar"></img>
            <h2>Enviar</h2>
          </button>
          <input type="file" onChange={handleFileInputChange} />
        </div>
        <p>{uploadStatus}</p>
      </div>
    </div>
  );
}
