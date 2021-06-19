import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Input } from "reactstrap";
import { removeTodoButtonText, noTodosFound } from "../Constants";
import style from "../styles/TodoList.module.css";

function TodoList(props) {
  const { todos, setTodos } = props;

  let toogleCheckbox = (index) => {
    let tempTodos = JSON.parse(JSON.stringify(todos));
    tempTodos[index].isChecked = !tempTodos[index].isChecked;
    setTodos(tempTodos);
  };

  let deleteTodo = (index) => {
    let tempTodos = JSON.parse(JSON.stringify(todos));
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };

  return (
    <div className={style["todo-list-container"]}>
      {todos.length ? (
        todos.map((todo, index) => (
          <Card key={index} className={style["todo-card"]}>
            <CardBody>
              <CardTitle>
                <Input
                  type="checkbox"
                  checked={todo.isChecked}
                  onClick={() => toogleCheckbox(index)}
                />
              </CardTitle>
              <CardText>{todo.message}</CardText>
              <Button color="danger" onClick={() => deleteTodo(index)}>
                {removeTodoButtonText}
              </Button>
            </CardBody>
          </Card>
        ))
      ) : (
        <Card>
          <CardBody>
            <CardText>{noTodosFound}</CardText>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default TODOLIST;
