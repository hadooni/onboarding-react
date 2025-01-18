import TodoItem from "../components/TodoItem";
import { useTodos } from "../hooks/queries";

const MainPage = () => {
  const { data, isLoading, isError } = useTodos();

  if (isLoading) return <div>로딩중 ...</div>;
  if (isError) return <div>오류 발생!</div>;

  return (
    <div className="flex flex-col items-center gap-5 justify-center p-10">
      <h2>MainPage</h2>
      <h3>json placeholder 외부 통신 테스트</h3>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default MainPage;
