import React from 'react';
import { connect } from 'dva';
import PDF from 'react-pdf-js';
import myPDF from '../assets/finex.pdf'

function Download() {

  let pdfPage = {}

  const onDocumentComplete = (pages) => {
    pdfPage = { page: 1, pages };
  }

  const onPageComplete = (page) => {
    pdfPage = { ...pdfPage, page };
  }

  return (
    <div>
      <PDF file={myPDF} onDocumentComplete={onDocumentComplete} onPageComplete={onPageComplete} page={pdfPage.page} />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Download);
