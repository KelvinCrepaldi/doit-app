import TaskCreate from "./components/TaskCreate";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

export default function Dashboard(): JSX.Element {
  return (
    <main className="min-h-screen">
      <Header />
      <main className="mx-20 mt-10">
        <TaskCreate />
        <TasksList />
      </main>
    </main>
  );
}
