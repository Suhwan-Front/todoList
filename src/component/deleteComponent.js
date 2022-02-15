export default class deleteComponent {
  constructor(e) {
    if (e.target.className === "delete") {
      this.deleteToDo(e);
    } else {
      this.checkToDo(e);
    }
  }

  deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }

  checkToDo(e) {
    const todo = e.target.nextSibling;
    if (e.target.checked) {
      todo.style.color = "#dddddd";
      todo.style.setProperty = ("text-decoration", "line-through");
    } else {
      todo.style.color = "#000000";
      todo.style.setProperty = ("text-decoration", "none");
    }
  }
}
