import React from 'react';

export default function AddHomePopup({ onPress }) {
  return (
    <div
      className="add-home"
      onClick={onPress}
      onKeyPress={onPress}
      role="button"
      tabIndex={0}
    >
      <p className="add-home__text">
        Install this app on your iPhone: tap{' '}
        <svg className="icon">
          <use xlinkHref="#icon-share" />
        </svg>{' '}
        and then Add to homescreen
      </p>
      <span className="add-home__close">&times;</span>
    </div>
  );
}
