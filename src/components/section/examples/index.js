import Example1 from "components/section/examples/example1";
import Example2 from "components/section/examples/example2";

function Example({ page }) {
  switch (page) {
    case 0:
      return <Example1 />;
    case 1:
      return <Example2 />;
    default:
      return <div />;
  }
}

export default Example;
