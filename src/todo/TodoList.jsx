import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

export default function TodoList({
  id,
  status,
  title,
  onToggle,
  onDelete,
  // onEdit,
}) {
  const dispatch = useDispatch();
  // const classes = useStyles();
  // const [modalStyle] = useState(getModalStyle);
  // const [open, setOpen] = useState(false);
  // // const [task, setTask] = useState(null);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

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
      <button onClick={() => dispatch(onToggle(id, status, title))}>
        Toggle
      </button>
      <button onClick={() => dispatch(onDelete(id))}>Delete</button>
      {/* <button onClick={handleOpen}>Edit</button> */}
      <Link to={`/todo/${id}`}> <button >Edit</button></Link>
     
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <input
            type="text"
            placeholder="Task Name"
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="submit"
            value="Change Task"
            onClick={() => dispatch(onEdit(task, id, status))}
          />
        </div>
      </Modal> */}
    </div>
  );
}
