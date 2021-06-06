function UserItem({ name, age }) {
  return (
    <div className="user-item">
      <div>이름: {name}</div>
      <div>나이: {age}</div>
    </div>
  );
}

export default UserItem;
