import Example1 from "components/section/examples/example1";
import Example2 from "components/section/examples/example2";
import Example3 from "components/section/examples/example3";
import Example4 from "components/section/examples/example4";
import Example5 from "components/section/examples/example5";
import Example6 from "components/section/examples/example6";

function Example({ page }) {
  switch (page) {
    case 0:
      return <Example1 />;
    case 1:
      return <Example2 />;
    case 2:
      return <Example3 />;
    case 3:
      return <Example4 />;
    case 4:
      return <Example5 />;
    case 5:
      return <Example6 />;
    default:
      return <div />;
  }
}

export default Example;
