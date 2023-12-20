import React from 'react';
import PdfViewer from './components/PdfViewer'


function App() {

  return (
    <div>
      <h1>Meu Visualizador de PDF</h1>
      <PdfViewer pdfUrl="https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf" />
    </div>
  )
}

export default App
