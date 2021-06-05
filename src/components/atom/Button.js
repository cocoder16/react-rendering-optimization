function Button({ value, className, disabled, onClick }) {
  return (
    <button
      type="button"
      className={`${className} btn btn-light`}
      disabled={disabled}
      onClick={event => {
        event.preventDefault();
        onClick && onClick();
      }}>
      {value}
    </button>
  );
}

export default Button;
