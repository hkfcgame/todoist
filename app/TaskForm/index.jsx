import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export const TaskForm = ({ description = '', onSaveTask }) => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState('');

  const handleWriteTask = (newTask) => {
    setTask(newTask);
  }

  const handleSaveTask = (event) => {
    setLoading(true);
    event.preventDefault();

    if (task.trim() !== '') {
      if(onSaveTask) onSaveTask(task);
      setTask('');
    }
    setLoading(false);
  }

  useEffect(() => {
    if(description === task) return;

    setTask(description);
  }, [description]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if(loading) return <Text>Loading...</Text>;

  return (
    <View style={ styles.container }>
      <TextInput
        style={styles.input}
        placeholder="what needs to be done?"
      placeholderTextColor="#abaaaa"
        value={task}
        onChangeText={handleWriteTask}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveTask}
      >
        <Text style={styles.buttonLabel}>+</Text>
      </TouchableOpacity>
    </View>
  )
}