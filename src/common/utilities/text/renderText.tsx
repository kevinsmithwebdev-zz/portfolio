import React from 'react';

const _renderLine = (line: any) => line.join('  ');

const _renderParagraph = (paragraph: any, index: number) => (
  <p key={ index }>{ _renderLine(paragraph) }</p>
);

const renderText = (text: any) => text.map(_renderParagraph);

export default renderText;
