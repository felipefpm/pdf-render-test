// components/PdfViewer.js
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl} crossOrigin="anonymous">
        <Page pageNumber={1} size="A4" />
      </Document>
    </div>
  );
};

export default PdfViewer;
