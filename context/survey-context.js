'use client';

import { createContext, useState } from 'react';

export const SurveyContext = createContext(null);

export const SurveyProvider = ({ children }) => {
  const [survey, setSurvey] = useState(null);

  const setSurveyHandler = (data) => setSurvey(data);

  const value = {
    survey,
    setSurveyHandler,
  };

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
};
