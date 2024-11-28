import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export  function Task({ task: initialTask, onComplete, onEdit, onDelete }) {
  const [task, setTask] = useState(initialTask);

  const handleComplete = () => {
    if(task.editing) return

    const newTask = { ...task, completed: !task.completed };

    if(onComplete) onComplete(newTask)

    setTask(newTask);
  }

  const handleEdit = () => {
    if(task.completed) return

    const taskToEdit = { ...task, editing: true };

    if(onEdit) onEdit(taskToEdit)

    setTask(taskToEdit)
  }

  const handleDelete = () => {
    if(onDelete) onDelete(task)
  }

  useEffect(
    () => { if(task?.editing && !initialTask?.editing) setTask(initialTask) },
    [task?.editing, initialTask?.editing]
  )

  return (
      <View>
      <Text> ----------------------------------- </Text>
        {/* Checkbox para marcar a tarefa como concluída */}
        <TouchableOpacity onPress={handleComplete}>
          {!task.completed && <Text>[ ]</Text>}
          {task.completed && <Text>[X]</Text>}
        </TouchableOpacity>

        {/* Texto da tarefa */}
        <Text>{task.description}</Text>

        {/* Botão de editar */}
        <TouchableOpacity onPress={handleEdit}>
          <Text>Editar</Text>
        </TouchableOpacity>

        {/* Botão de excluir */}
        <TouchableOpacity onPress={handleDelete}>
          <Text>Excluir</Text>
        </TouchableOpacity>

      <Text> ----------------------------------- </Text>
      </View>
  );
}


//Task
//  Container
//    Ckeckbox
//    Text
//    Input
//    IconButton
