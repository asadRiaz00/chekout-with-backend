import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as widthToDp } from "react-native-responsive-screen";

export default function Header({ title}: { title: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: widthToDp(100),
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  logo: {
    width: 50,
    height: 50,
  },
});