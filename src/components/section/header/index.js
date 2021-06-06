import pages from "config/pages";

function Header({ page }) {
  const title = pages[page].title;
  const explanation = pages[page].explanation;

  return (
    <div id="header">
      <h1>{title}</h1>
      <ul>
        {explanation.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Header;
