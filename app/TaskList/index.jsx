import {  ScrollView, View } from "react-native";
import { Task } from "../Task";


export const TaskList = ({ tasks, onDeleteTask }) => {
  console.log("TaskList do hermann", tasks);

  const handleDelete = (task) => {
    if(onDeleteTask) onDeleteTask(task)
  }

  return (
    <View>
      <ScrollView>
        {tasks.map((task, pos) => (
          <Task key={`${pos}-${task.id}`} task={task} onDelete={handleDelete}/>
        ))}
      </ScrollView>
    </View>
  );
}