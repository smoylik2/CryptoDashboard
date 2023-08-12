import React from 'react';
import {Route, Routes} from 'react-router';
import * as S from './App.styles';
import Header from './commons/Header/Header';
import CurrencyPage from './features/CurrencyPage';

function App() {
  return (
    <S.AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<CurrencyPage />} />
      </Routes>
    </S.AppContainer>
  );
}

export default App;
