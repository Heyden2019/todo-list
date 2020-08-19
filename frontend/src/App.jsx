import React from 'react';
import './App.css';
import IssuesContainer from './components/Issues/IssuesContainer';
import IndicateContainer from './components/Indicate/IndicateContainer';
import FormAndPreloader from './components/FormAndPreloader/FormAndPreloader';

function App() {

  return (
    <div className="App">
        <IndicateContainer />
        <FormAndPreloader />
        <IssuesContainer />
    </div>
  );
}

export default App;
