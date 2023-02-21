import { Share, Button, View } from "react-native";

const shareAppLink = async () => {
  try {
    const result = await Share.share({
      message: "Check out this amazing app: https://www.example.com",
      title: "My Awesome App",
    });
  } catch (error) {
    alert(error.message);
  }
};

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Share App Link" onPress={shareAppLink} />
    </View>
  );
};

export default App;
