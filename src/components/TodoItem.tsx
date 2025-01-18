import { Todo } from "../types/todo";

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-2 w-[20rem]">
      <div className="grid grid-cols-[1fr_12rem_1fr] items-center">
        <span className="font-bold">{todo.id}</span>
        <p>{todo.title}</p>
        {todo.completed ? (
          <div className="text-blue-700 text-center">완료</div>
        ) : (
          <div className="text-red-700 text-center">미완료</div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
