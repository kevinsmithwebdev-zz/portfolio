import React from 'react';
import './Gallery.css'
import Painting from './Painting/Painting';
import SectionContainer from '../../common/SectionContainer/SectionContainer'
import PaintingModalBody from './PaintingModalBody/PaintingModalBody';
import Button from '../../common/Button/Button';
import convertToTitleCase from '../../common/utilities/text/convertToTitleCase';
import useRequest from '../../common/hooks/useRequest';
import DataLoading from '../../common/DataLoading/DataLoading';
import DataError from '../../common/DataError/DataError';

const GALLERY_DATA_URL = 'https://kswd-portfolio.s3-us-west-1.amazonaws.com/data/gallery.data.json';

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
  const { data, isLoading, error, retryFetchData } = useRequest(GALLERY_DATA_URL);
  const myData = data?.data;
  const handlePictureClick = (idx: number) => {
    const pictureData = myData[idx];
    const pictureBody = <PaintingModalBody data={ pictureData }/>;
    const header = pictureData.name;
    const buttons = renderButtons(pictureData.buttons, setModalData);
    setModalData({ header, body: pictureBody, buttons, comments: pictureData.comments });
  }

  let body = myData && (
    <div className='Gallery'>
      { myData.map((painting: any, idx: number) => (
        <Painting
          key={ painting.name }
          painting={ painting }
          idx={ idx }
          handlePictureClick={ handlePictureClick }
        />))
      }
    </div>
  );

  if (error) {
    body = <DataError retryFetchData={ retryFetchData }/>;
  } else if (isLoading) {
    body = <DataLoading />;
  }

  return (
    <SectionContainer titleSlug = 'gallery' isCollapsible>
      <div className='Gallery'>
        { body }
      </div>
    </SectionContainer>
  );
};

export default Gallery;
