import { Text, View } from "react-native";

export const ProgressBar = ({ total, completed }) => {
  const percentage = (completed / total) * 100;

  return (
    <View style={{ width: '100%', backgroundColor: '#eee' }}>
      <View
        style={{
          width: `${percentage}%`,
          backgroundColor: '#4caf50',
          height: '10px',
        }}
      />
      <Text>{completed} de {total} tarefas finalizadas</Text>
    </View>
  );
};
