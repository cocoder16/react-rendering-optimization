import { useState } from "react";

import "./App.css";
import Button from "components/atom/Button";

const dummy = {
  maxPage: 9, // config - pages
};

function App() {
  const [page, setPage] = useState(0);

  return (
    <div id="main">
      <Button
        value="이전"
        className="navigation-button"
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      />
      <div id="section"></div>
      <Button
        value="다음"
        className="navigation-button"
        disabled={page === dummy.maxPage}
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
}

export default App;
