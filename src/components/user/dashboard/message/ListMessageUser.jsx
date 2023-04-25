import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import Header from "../../../common/header";
import NavbarComp from "../NavbarComponentUser";
import NavbarMessageUser from "./NavbarMessageUser";

import RecursosSvg from "../../../../assets/img/video_library_G.svg";
import imagenpdf from "../../../../assets/img/imagenpdf.jpeg";

export default function ListDocumentUser() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const API_KEY = "d44d107da20a4f07877b9111ead536c3";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-responsive">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={RecursosSvg} alt="" />
        <h2>RECURSOS</h2>
      </div>
      <div className="container-body-all">
        <NavbarMessageUser />
        <div className="container-componentvideo_flex">
          {articles.map((article) => (
            <div className="container-componentvideo_body">
              <div className="document-flex" key={article.id}>
                <Link to="/Inicio">
                  <img className="img-doc" src={imagenpdf} alt="" />
                  <Nav.Link href="/#"></Nav.Link>
                </Link>
                <div className="document-text">
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
