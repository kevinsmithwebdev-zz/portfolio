import React from 'react';
import './Gallery.css'
import galleryData from './gallery.data.json';
import Painting from './Painting/Painting';
import SectionContainer from '../../common/SectionContainer/SectionContainer'
import PaintingModalBody from './PaintingModalBody/PaintingModalBody';
import Button from '../../common/Button/Button';
import convertToTitleCase from '../../common/utilities/text/convertToTitleCase';

type PropsTypes = {
  setModalData: Function,
}

type ButtonDatumType = {
  color: string,
  backgroundColor: string,
  label?: string,
}

type ButtonDataType = {
  [key: string]: ButtonDatumType,
}

const buttonsData = {
  app: { color: 'white', backgroundColor: 'green' },
  repo: { color: 'white', backgroundColor: 'blue' },
  android: { color: 'white', backgroundColor: '#a4c639' },
  ios: { label: 'iOS', color: 'white', backgroundColor: 'black' },
  npm: { label: 'npm', color: 'white', backgroundColor: 'black' },
  demo: { color: 'white', backgroundColor: 'green' },
  close: { color: 'white', backgroundColor: 'red' },
} as ButtonDataType;

type ButtonInputType = {
  textSlug: string,
  link: string,
}

type RenderButtonType = {
  data: ButtonDataType,
  setModalData: Function,
}

const renderButton = ({ textSlug, link }: ButtonInputType, setModalData: Function): any => {
  const buttonData = buttonsData[textSlug] || {};
  const label = buttonData.label || convertToTitleCase(textSlug);
  const theCallback = textSlug === 'close' ? () => setModalData(null) : null
  const isDisabled = !theCallback && !link;
  return (
    <Button
      key={ label }
      link={ link }
      callback={ theCallback }
      buttonData={ { ...buttonData, label } }
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
