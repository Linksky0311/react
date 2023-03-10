import React from "react";
import "./style.css";
function Header(){
  return <header>
    <h1><a href = "/">WEB</a></h1>
  </header>
}

function Nav(){
  return <nav> 
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/2">js</a></li>
    </ol>
  </nav>
}

function Article(){
  return <article>
    <h2>Welcome</h2>
    Hello, WEB 
  </article>
}

function App(){
  return(
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

// 생활코딩 React 2022년 개정판 4까지 봄