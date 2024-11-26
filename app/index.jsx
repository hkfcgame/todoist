import { View } from "react-native";
import { Title } from "./Title";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { Footer } from "./Footer";
import { useState } from "react";

// uma task precisa de:
// 1. descrição
// 2. status (concluída ou não)
// 3. identificador unico

let id = 0;
const nextId = () => id++;

export default () => {
  const [tasks, setTasks] = useState([]);

  const handleCreateTask = (description) => {
    const newTask = {
      id: nextId(),
      description,
      completed: false
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToDelete.id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Title>TODOLIST</Title>
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <Footer />
    </View>
  )
};
