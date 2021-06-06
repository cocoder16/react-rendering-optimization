import Example1 from "components/section/examples/example1";

function Example({ page }) {
  switch (page) {
    case 0:
      return <Example1 />;
    default:
      return <div />;
  }
}

export default Example;
