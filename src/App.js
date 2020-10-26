import React from 'react';
import General from './general/General.js';
import Experience from './experience/Experience.js';
import Education from './education/Education.js';

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
