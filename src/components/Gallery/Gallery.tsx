import React from 'react';
import './Gallery.css'
import galleryData from './gallery.data.json';
import Painting from './Painting/Painting';
import SectionContainer from '../../common/SectionContainer/SectionContainer'
import PaintingModalBody from './PaintingModalBody/PaintingModalBody';
import Button from '../../common/Button/Button';

type PropsTypes = {
  setModalData: Function,
}

type ButtonColorType = {
  color: string,
  backgroundColor: string,
}

type ButtonColorsType = {
  [key: string]: ButtonColorType,
}

type ButtonLabelsType = {
  [key: string]: string,
}

// TODO: i18n
const buttonLabels = {
  app: 'See the Live App',
  code: 'See the Code',
  ios: 'iOS',
  close: 'Close',
} as ButtonLabelsType;

const buttonColors = {
  app: { color: 'white', backgroundColor: 'green' },
  code: { color: 'white', backgroundColor: 'blue' },
  android: { color: 'white', backgroundColor: '#a4c639' },
  ios: { color: 'white', backgroundColor: 'black' },
  close: { color: 'white', backgroundColor: 'red' },
} as ButtonColorsType;

type ButtonDataType = {
  textSlug: string,
  link: string,
}

type RenderButtonType = {
  data: ButtonDataType,
  setModalData: Function,
}

const renderButton = ({ textSlug, link }: ButtonDataType, setModalData: Function): any => {
  const colors = buttonColors[textSlug] || {};
  const label = buttonLabels[textSlug] || textSlug;
  const theCallback = textSlug === 'close' ? () => setModalData(null) : null
  const isDisabled = !theCallback && !link;

  return (
    <Button
      key={ label }
      label={ label }
      link={ link }
      callback={ theCallback }
      color={ colors.color }
      backgroundColor={ colors.backgroundColor }
      isDisabled={ isDisabled }
    />
  );
};

const renderButtons = (buttons: any, setModalData: any) => {
  return [
    ...buttons.map((button: any) => renderButton(button, setModalData)),
    renderButton({ textSlug: 'close', link: '' }, setModalData),
  ];
}

export const Gallery = ({ setModalData }: PropsTypes): JSX.Element => {
  const handlePictureClick = (idx: number) => {
    const data = galleryData[idx];
    const body = <PaintingModalBody data={ data }/>;
    const header = data.name;
    const buttons = renderButtons(data.buttons, setModalData);
    setModalData({ header, body, buttons, comments: data.comments });
  }

  return (
    <SectionContainer titleSlug = 'gallery' isCollapsible>
      <div className='Gallery'>
        { galleryData.map((painting, idx) => (
          <Painting
            key={ painting.name }
            painting={ painting }
            idx={ idx }
            handlePictureClick={ handlePictureClick }
          />))
        }
      </div>
    </SectionContainer>
  );
};

export default Gallery;
