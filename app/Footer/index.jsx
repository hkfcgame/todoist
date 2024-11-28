
import { Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "../ProgressBar";

export const Footer = ({ total, completed, onRemoveCompleted }) => {
  const handleRemoveCompleted = () => {
    if(onRemoveCompleted) onRemoveCompleted()
  }
  return (
    <View>
      <ProgressBar total={total} completed={completed} />

      <TouchableOpacity onPress={handleRemoveCompleted}>
        <Text>Remover prontos</Text>
      </TouchableOpacity>
    </View>
  )
}
