import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

export  function Task({ task: initialTask, onEdit, onDelete }) {
  const [task, setTask] = useState(initialTask);
  const [description, setDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleComplete = () => {
    if(isEditing) return

    setTask((prevTask) => ({ ...prevTask, completed: !prevTask.completed }));
  }

  const handleEdit = () => {
    if(task.completed) return

    if(onEdit) onEdit(task)

    setIsEditing(true);
    setDescription(task.description);
  }

  const handleDelete = () => {
    if(onDelete) onDelete(task)
  }

  const handleChangeDescription = (text) => {
    setDescription(text);
  }

  const handleSave = () => {
    setTask((prevTask) => ({ ...prevTask, description }));
    setIsEditing(false);
  }

  return (
      <View>
      <Text> ----------------------------------- </Text>
        {/* Checkbox para marcar a tarefa como concluída */}
        <TouchableOpacity onPress={handleComplete}>
          {!task.completed && <Text>[ ]</Text>}
          {task.completed && <Text>[X]</Text>}
        </TouchableOpacity>

        {/* Texto da tarefa */}
        {!isEditing && <Text>{task.description}</Text>}
        {isEditing && (
          <>
            <TextInput value={description} onChangeText={handleChangeDescription} />
            <TouchableOpacity onPress={handleSave}>
              <Text>Salvar</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Botão de editar */}
        {!isEditing && (
          <TouchableOpacity onPress={handleEdit}>
            <Text>Editar</Text>
          </TouchableOpacity>
        )}

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
