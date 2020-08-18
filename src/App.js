import React from 'react';
// ThiS eslint-disable line is important...
/* eslint-disable import/no-webpack-loader-syntax */
import MdxDoc, { frontMatter } from '!babel-loader!mdx-loader!./mdx-doc.mdx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>{frontMatter.title}</h2>	  
      <MdxDoc />
    </div>
  );
}

export default App;
