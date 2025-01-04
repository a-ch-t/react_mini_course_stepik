function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default TaskList;
