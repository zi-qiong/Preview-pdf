import React from 'react';
import { connect } from 'dva';
import { Document, Page } from 'react-pdf';
import myPDF from '../assets/pdf.pdf'

function Pdf() {
  let pdfPage = {
    numPages: null,
    pageNumber: 1,
  }
  function onDocumentLoad({ numPages }) {
    pdfPage = { ...pdfPage, numPages };
  }
  return (
    <div>
      <Document file={myPDF} onLoadSuccess={onDocumentLoad}>
        <Page pageNumber={pdfPage.pageNumber} />
      </Document>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Pdf);
