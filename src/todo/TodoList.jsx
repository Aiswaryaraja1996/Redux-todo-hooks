import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {useState} from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TodoList ({ id, status, title, onToggle, onDelete , onEdit }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [task,setTask] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <div>{title}</div>
      {status ? (
        <div style={{ color: "green" }}>Completed</div>
      ) : (
        <div style={{ color: "red" }}>Pending</div>
      )}
      <button onClick={() => onToggle(id,status,title)}>Toggle</button>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={handleOpen}>Edit</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <input type="text" placeholder="Task Name" onChange={(e)=>setTask(e.target.value)} />
          <input type="submit" value="Change Task" onClick={()=>onEdit(task,id)}/>
        </div>
      </Modal>
    </div>
  );
};

// export default function TodoList() {
//   const { todos, isError, isLoading } = useSelector(
//     (state) => state,
//     shallowEqual
//   );
//   const dispatch = useDispatch();

//   const getTodos = () => {
//     const requestAction = actions.getTodoRequest();
//     dispatch(requestAction);

//     return fetch("https://todos-mock-server.herokuapp.com/tasks")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         const successAction = actions.getTodoSuccess(res);
//         dispatch(successAction);
//       })
//       .catch((res) => {
//         const failureAction = actions.getTodoFailure;
//         dispatch(failureAction);
//       });
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   const handleToggle = (id) => {
//     const toggleAction = actions.toggleTodo(id);
//     dispatch(toggleAction);
//   };

//   const handleDelete = (id) => {
//     const deleteAction = actions.deleteTodo(id);
//     dispatch(deleteAction);
//   };

//   const handleEdit = (task,id) => {
//       const editAction = actions.editTodo({title:task,status:false,id:id});
//       dispatch(editAction);
//   }

//   return (
//     <div>
//       {isLoading && <h4>Loading...</h4>}
//       {isError && <h4>Error! Something went wrong</h4>}
//       {!isLoading &&
//         !isError &&
//         todos?.map((item) => (
//           <TodoItem
//             key={item.id}
//             {...item}
//             onDelete={handleDelete}
//             onToggle={handleToggle}
//             onEdit={handleEdit}
//           />
//         ))}
//     </div>
//   );
// }
