import { useState, useMemo } from "react";

import "./App.css";
import Button from "components/atom/Button";
import Section from "components/section";
import pages from "config/pages";

function App() {
  const [page, setPage] = useState(0);
  const maxPage = useMemo(() => pages.length, []);

  return (
    <div id="main">
      <Button
        value="이전"
        className="navigation-button"
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
      />
      <Section page={page} />
      <Button
        value="다음"
        className="navigation-button"
        disabled={page === maxPage}
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
}

export default App;
