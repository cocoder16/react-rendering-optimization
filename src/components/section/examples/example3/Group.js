function Group({ group }) {
  console.log("Group component rerender");

  return (
    <div>
      <div>그룹: {group.name}</div>
      <div>{group.description}</div>
    </div>
  );
}

export default Group;
