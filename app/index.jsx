import { View } from "react-native";
import { Title } from "./Title";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { Footer } from "./Footer";
import { useState } from "react";

let id = 0;

const nextId = () => id++;

const createTask = (description) => ({
  id: nextId(),
  description,
  completed: false,
  editing: false,
});

export default () => {
  const [tasks, setTasks] = useState([]);
  const [taskToForm, setTaskToForm] = useState(createTask(""));

  const handleSaveTask = (description) => {
    const task = {
      ...taskToForm,
      description,
      editing: false,
    };

    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((prevTask) => prevTask.id === task.id)

      if(index === -1) return [...prevTasks, task]

      return prevTasks.map((prevTask) => {
        if(prevTask.id === task.id) return task;

        return prevTask;
      })
    });

    setTaskToForm(createTask(""));
  };

  const handleDeleteTask = (task) => {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask.id !== task.id));
  };

  const handleEditTask = (task) => {
    setTaskToForm(task);
  };

  const handleTaskComplete = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if(prevTask.id === task.id) return task;

        return prevTask;
      });
    });
  }

  const handleRemoveCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((prevTask) => !prevTask.completed));
  }

  return (
    <View style={{ flex: 1 }}>
      <Title>TODOLIST</Title>
      <TaskForm description={taskToForm.description} onSaveTask={handleSaveTask} />
      <TaskList tasks={tasks} onCompleteTask={handleTaskComplete} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
      <Footer tasks={tasks} onRemoveCompleted={handleRemoveCompleted} />
    </View>
  )
};
