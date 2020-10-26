import React from 'react';
import General from './general/General.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';

const App = () => {
  return (
    <div>
      <h1>CV</h1>
      <General />
      <Experience />
      <Education />
    </div>
  )
}

export default App;
