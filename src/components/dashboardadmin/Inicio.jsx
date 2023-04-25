import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./NavbarComponent";
import { Link } from "react-router-dom";
import "../../scssWeb/main.css";
import VectorSubirVid from "../../assets/img/upload_G.svg";
import Recursos from "../../assets/img/video_library_G.svg";
import SvgMensaje from "../../assets/img/messages_G.svg";
import HomeGSvg from "../../assets/img/home_G.svg";
import Header from "../common/header";

const Inicio = () => {
  return (
    <div className="container_inicio">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={HomeGSvg} />
        <h2>INICIO</h2>
      </div>
      <div className="container-body-all container-inicio_body container-body-all-position">
        <div className="container-inicio_component_all container-inicio_component-background_resources">
          <Link to="/VideoUploader" className="Link">
            <img src={VectorSubirVid} />
            <button>
              <p>SUBIR RECURSOS</p>
            </button>
          </Link>
        </div>
        <div className="container-inicio_component_all container-inicio_component-background_video">
          <Link to="/ListVideo" className="Link">
            <img src={Recursos} />
            <button>
              <p>RECURSOS</p>
            </button>
          </Link>
        </div>
        <div className="container-inicio_component_all container-inicio_component-background_message">
          <Link to="/Message" className="Link">
            <img src={SvgMensaje} />
            <button>
              <p>Mensajes</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
