import { useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import {
  getTodos,
  handleDelete,
  handleToggle,
  handleSubmit,
  // handleEdit,
} from "../redux/api";
import TodoList from "./TodoList";

export default function TodoInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { todos, isError, isLoading } = useSelector(
    (state) => state.todo,
    shallowEqual
  );

  // * getTodos

  // const getTodos = () => {
  //   const requestAction = actions.getTodoRequest();
  //   dispatch(requestAction);

  //   return fetch(
  //     `https://todos-mock-server.herokuapp.com/tasks?_page=${currentPage}&_limit=3`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       const successAction = actions.getTodoSuccess(res);
  //       dispatch(successAction);
  //     })
  //     .catch((res) => {
  //       const failureAction = actions.getTodoFailure;
  //       dispatch(failureAction);
  //     });
  // };

  useEffect(() => {
    dispatch(getTodos())
  }, [currentPage]);

  //* handlToggle

  // const handleToggle = (id, status, title) => {
  //   const requestAction = actions.getTodoRequest();
  //   dispatch(requestAction);

  //   return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id, title: title, status: !status }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => getTodos());
  // };

  //* handleDelete

  // const handleDelete = (id) => {
  //   const requestAction = actions.getTodoRequest();
  //   dispatch(requestAction);

  //   return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => getTodos());
  // };

  //* handleEdit

  // const handleEdit = (task, id, status) => {
  //   const requestAction = actions.getTodoRequest();
  //   dispatch(requestAction);

  //   return fetch(`https://todos-mock-server.herokuapp.com/tasks/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ id, title: task, status: status }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => getTodos());
  // };

  //* handleSubmit

  // const handleSubmit = (task) => {
  //   const requestAction = actions.getTodoRequest();
  //   dispatch(requestAction);

  //   return fetch("https://todos-mock-server.herokuapp.com/tasks", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title: task, status: false }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => getTodos());
  // };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
      />
      <br />
      <input
        type="submit"
        value="ADD TASK"
        onClick={() => dispatch(handleSubmit(task))}
      />
      <div>
        {isLoading && <h4>Loading...</h4>}
        {isError && <h4>Error! Something went wrong</h4>}
        <br />
        {!isLoading && !isError && (
          <div>
            <button
              onClick={() => {
                setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
              }}
              disabled={currentPage === 1 ? true : false}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </button>{" "}
          </div>
        )}
        {!isLoading &&
          !isError &&
          todos?.map((item) => (
            <TodoList
              key={item.id}
              {...item}
              onDelete={handleDelete}
              onToggle={handleToggle}
              // onEdit={handleEdit}
            />
          ))}
      </div>
    </div>
  );
}
