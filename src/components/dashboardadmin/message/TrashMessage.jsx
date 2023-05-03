import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../common/header";
import NavbarComp from "../NavbarComponent";
import "../../../scssWeb/main.css";
import trash from "../../../assets/img/trash.svg";
import MensajeSvg from "../../../assets/img/messages_G.svg";
import NavbarMessage from "./NabvarMessage";

export default function TrashMessageMessage() {
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

  const handleTrashMessage = (id) => {
    setArticles((prevArticles) => {
      const updatedArticles = prevArticles.map((article) => {
        if (article.id === id) {
          return { ...article, trash: !article.trash };
        }
        return article;
      });
      console.log(updatedArticles);
      return updatedArticles;
    });
  };

  return (
    <div>
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={MensajeSvg} alt="mensaje" />
        <h2>PAPELERA</h2>
      </div>
      <div className="container-body-message">
        <NavbarMessage />
        <div className="container-message">
          {articles.map((article) => (
            <div className="message-box" key={article.id}>
              <div className="message-icons">
                <button
                  //el classname= "button-destacado"  es para que cambie el color del boton segun el estado del articulo.trash
                  className={`${article.trash ? "button-destacado" : ""}`}
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
