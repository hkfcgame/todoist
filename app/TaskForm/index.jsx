import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const TaskForm = ({ onCreateTask }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState('');
  console.log("TaskForm do todolist do hermann", loading, task);

  const handleWriteTask = (newTask) => {
    setTask(newTask);
  }

  const handleCreateTask = (event) => {
    setLoading(true);
    event.preventDefault();

    if (task.trim() !== '') {
      if(onCreateTask) onCreateTask(task);
      setTask('');
    }



    setLoading(false);
  }

  useEffect(() => {
    setLoading(false);
  },[]);

  if(loading) return <Text>Loading...</Text>;

  return (
    <View style={{ padding: 5}}>
      <TextInput value={task} onChangeText={handleWriteTask} />
      <TouchableOpacity onPress={handleCreateTask}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}