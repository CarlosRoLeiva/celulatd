import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../common/header";
import NavbarComp from "../NavbarComponentUser";
import "../../../../scssWeb/main.css";
import stardestacados from "../../../../assets/img/stardestacados.svg";
import trash from "../../../../assets/img/trash.svg";
import MensajeSvg from "../../../../assets/img/messages_G.svg";
import NavbarNavbar from "../../../common/Navbarnavbar";

export default function ListMessageUser() {
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

  const handleHighlight = (articleId) => {
    const url = "http://localhost:3000/api/v1//message/highlight";
    const data = { standout: articleId.target.value };

    axios
      .patch(url, data)
      .then((response) => {
        setArticles((prevArticles) => {
          const updatedArticles = prevArticles.map((article) => {
            if (article.id === articleId) {
              return { ...article, highlighd: true };
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

  const handleTrashMessage = (articleId) => {
    const url = "http://localhost:3000/api/v1//message/highlight";
    const data = { standout: articleId.target.value };

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
    <div>
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={MensajeSvg} alt="imagen de mensaje" />
        <h2>MENSAJES</h2>
      </div>
      <div className="container-body-message">
      <NavbarNavbar
          links={["/ListMessageUser", "/TrashMessageUser"]}
          texts={["MENSAJES", "PAPELERA"]}
        />
        <div className="container-message">
          {articles.map((article) => (
            <div
              className={`message-box ${article.highlighd ? "highlight" : ""}`}
              key={article.id}>
              <div className="message-icons">
                <button
                  className={`${article.highlighd ? "button-highlighd" : ""}`}
                  onClick={() => handleHighlight(article.id)}>
                  <img src={stardestacados} alt="destacados" />
                </button>
                <button
                  className={`${article.trash ? "button-trash" : ""}`}
                  onClick={() => handleTrashMessage(article.id)}>
                  <img src={trash} alt="papelera" />
                </button>
              </div>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




