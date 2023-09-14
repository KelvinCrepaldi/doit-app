import TaskCreate from "./components/TaskCreate";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import Main from "./components/Main";

export default function Dashboard(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <Main>
        <TaskCreate />
        <TasksList />
      </Main>
    </main>
  );
}
