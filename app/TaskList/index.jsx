import {  ScrollView, View } from "react-native";
import { Task } from "../Task";

export const TaskList = ({ tasks, onCompleteTask, onDeleteTask, onEditTask }) => {
  const handleDeleteTask = (task) => {
    if(onDeleteTask) onDeleteTask(task)
  }

  const handleEditTask = (task) => {
    if(onEditTask) onEditTask(task)
  }

  const handleCompleteTask = (task) => {
    if(onCompleteTask) onCompleteTask(task)
  }

  return (
    <View>
      <ScrollView>
        {tasks.map((task, pos) => (
          <Task key={`${pos}-${task.id}-${task.description}`} task={task} onComplete={handleCompleteTask} onEdit={handleEditTask} onDelete={handleDeleteTask}/>
        ))}
      </ScrollView>
    </View>
  );
}