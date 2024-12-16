import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Task2() {
  return (
    <div className="container">
      <div className="c-grid mt-5">
        <Header />
        <Nav />
        <ArticleWrapper />
        <ArticleWrapper />
        <ArticleWrapper />
        <Footer />
      </div>
    </div>
  );
}

function ArticleWrapper() {
  return (
    <div className="article-wrapper">
      <Figure />
      <Article />
    </div>
  );
}

function Article() {
  return (
    <article
      className="w-100 text-center p-2"
      style={{ backgroundColor: "blue" }}
    >
      <h1>Article</h1>
    </article>
  );
}

function Figure() {
  return (
    <figure
      className="w-100 text-center p-2"
      style={{ backgroundColor: "green" }}
    >
      <h1>Figure</h1>
    </figure>
  );
}

function Nav() {
  return (
    <nav className="w-100 text-center p-2" style={{ backgroundColor: "red" }}>
      <h1>Nav</h1>
    </nav>
  );
}

function Header() {
  return (
    <header
      className="w-100 text-center p-2"
      style={{ backgroundColor: "yellow" }}
    >
      <h1>Header</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className="w-100 text-center p-2"
      style={{ backgroundColor: "orange" }}
    >
      <h1>Footer</h1>
    </footer>
  );
}

export default Task2;
