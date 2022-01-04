import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleEdit } from "../redux/api";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function TodoEdit() {
  const [task, setTask] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <h2>Edit Your Tasks</h2>
      <input
        type="text"
        placeholder="Task Name"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="submit"
        value="Change Task"
        onClick={() => {
          dispatch(handleEdit(task, id));
          history.push(`/todo`);
        }}
      />
    </div>
  );
}
