function Button({ value, className, onClick }) {
  return (
    <button
      type="button"
      className={`${className} btn btn-light`}
      onClick={event => {
        event.preventDefault();
        onClick && onClick();
      }}>
      {value}
    </button>
  );
}

export default Button;
