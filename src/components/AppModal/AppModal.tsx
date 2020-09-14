import React from 'react';
import './AppModal.css';
import { FaWindowClose } from 'react-icons/fa';

type DataType = {
  header?: string,
  body: JSX.Element,
  buttons?: JSX.Element[],
  comments?: string,
}

type PropsType = {
  data: null | DataType,
  setModalData: Function,
}

const AppModal = ({ data, setModalData }: PropsType) => {
  const className = `AppModal ${ data ? 'visible' : 'hidden' }`
  const { header, body, buttons, comments } = data || {};

  return (
    <div className={ className }>
      <div className='headerWrapper'>
        <h2 className='header'>{ header }</h2>
        <span
          className='closer'
          onClick={ () => setModalData(null) }
        >
          <FaWindowClose size='1.5em' className='closeIcon' />
        </span>
      </div>
      {
        !!data && (
          <>
            <div className='bodyWrapper'>
              { body }
            </div>
            { !!buttons && (
                <div className='buttonsWrapper'>
                  { buttons }
                </div>
              )
            }
            {
              !!comments && (
                <div className='commentsSection'>
                  <hr />
                  <p>{ comments }</p>
                </div>
              )
            }
          </>
        )
      }
    </div>
  );
};

export default AppModal;
