import React, { Component } from 'react'
import myPDF from '../assets/finex.pdf'

export default class Pre extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    console.log(PDFJS.workerSrc);
    var loadingTask = PDFJS.getDocument(url);
    loadingTask.promise.then(function(pdf) {
      console.log('PDF loaded');
      var pageNumber = 1;
      pdf.getPage(pageNumber).then(function(page) {
        var scale = 1.5;
        var viewport = page.getViewport(scale);
        var canvas = this.refs.myCanvas;
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.then(function() {
          console.log('Page rendered');
        });
      })
    })
    return (
      <div>
        <canvas ref="myCanvas"></canvas>
      </div>
    )
  }
}
