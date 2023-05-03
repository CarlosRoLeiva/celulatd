import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "../NavbarComponent";
import NavbarDocument from "./NavbarDocument";
import RecursosSvg from "../../../assets/img/video_library_G.svg";
import Header from "../../common/header";
import imagenpdf from "../../../assets/img/imagenpdf.jpeg";

export default function ListDocument() {
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

  const handleDelete = (articleId) => {
    const url = `http://localhost:3000/api/v1//document/delete${articleId}`;
    const data = { trash: articleId.target.value };

    axios
      .patch(url, data)
      .then((response) => {
        setArticles((prevArticles) => {
          const updatedArticles = prevArticles.map((article) => {
            if (article.id === articleId) {
              return { ...article, trash: true };
            }
            return article;
          });
          console.log(updatedArticles);
          return updatedArticles;
        });
      })
      .catch((error) => {
        console.log(error);
      });

      
  };

  return (
    <div className="container-responsive">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={RecursosSvg} alt="" />
        <h2>RECURSOS</h2>
      </div>
      <div className="container-body-all">
        <NavbarDocument/>

        <div className="container-componentvideo_flex">
          {articles.map((article) => (
            <div className="container-componentvideo_body">
              <div className="document-flex" key={article.id}>
                <Link to="/Inicio">
                  <img className="img-doc" src={imagenpdf} alt="documento" />
                  <Nav.Link href="/#"></Nav.Link>
                </Link>
                <div className="document-text">
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                  <div className="body-button-edit-all">
                    <button onClick={() => handleDelete(article.id)}>
                      Eliminar
                    </button>
                    <button
                      onClick={() =>
                        console.log(`Editando video ${article.id}`)
                      }>
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
