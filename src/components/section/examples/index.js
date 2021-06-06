import Example1 from "components/section/examples/example1";
import Example2 from "components/section/examples/example2";
import Example3 from "components/section/examples/example3";

function Example({ page }) {
  switch (page) {
    case 0:
      return <Example1 />;
    case 1:
      return <Example2 />;
    case 2:
      return <Example3 />;
    default:
      return <div />;
  }
}

export default Example;
