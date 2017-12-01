import React, { Component } from 'react';
var pdfjsLib = require('pdfjs-dist');

class PrePdf extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    pdfjsLib.PDFJS.workerSrc = '../services/pdf.worker.js';
    var loadingTask = pdfjsLib.getDocument('http://10.8.25.38:8000/web/compressed.tracemonkey-pldi-09.pdf');
    loadingTask.promise.then(function (pdfDocument) {
      // Request a first page
      return pdfDocument.getPage(1).then(function (pdfPage) {
        // Display page on the existing canvas with 100% scale.
        var viewport = pdfPage.getViewport(1.0);
        var canvas = document.getElementById('theCanvas');
        debugger;
        console.log(viewport);
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        var ctx = canvas.getContext('2d');
        var renderTask = pdfPage.render({
          canvasContext: ctx,
          viewport: viewport
        });
        return renderTask.promise;
      });
    }).catch(function (reason) {
      console.error('Error: ' + reason);
    });
  }

  render() {
    return (
      <div>
        <canvas id="pdf" ref="pdf"></canvas>
      </div>
    )
  }
}

export default PrePdf;
