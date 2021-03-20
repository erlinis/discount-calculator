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
        <svg className="icon text-primary">
          <use xlinkHref="#icon-share" />
        </svg>{' '}
        and then{' '}
        <span className="text-primary">
          Add to homescreen{' '}
          <svg className="icon">
            <use xlinkHref="#icon-plus-square" />
          </svg>{' '}
        </span>
      </p>
      <span className="add-home__close text-2xl">&times;</span>
      <svg className="icon add-home-tip">
        <use xlinkHref="#icon-triangle" />
      </svg>
    </div>
  )
}
