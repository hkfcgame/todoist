import { Text, View } from "react-native";
import { styles,  } from "./styles";

export const Title = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {children}
    </Text>
  </View>
)