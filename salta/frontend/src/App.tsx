import React from 'react';
import { PageHome } from './Pages/PageHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTermsAndConditions } from './Pages/PageTermsAndConditions';
import { PageHowToGet } from './Pages/PageHowToGet';
import { PageTemplateMinorAge } from './Pages/PageTemplateMinorAge';
import { PageAlreadyPlayed } from './Pages/PageAlreadyPlayed';
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/terms' element={<PageTermsAndConditions />} />
          <Route path='/howToGet' element={<PageHowToGet />} />
          <Route path='/minorAge' element={<PageTemplateMinorAge />} />
          <Route path='/alreadyPlayed' element={<PageAlreadyPlayed />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
