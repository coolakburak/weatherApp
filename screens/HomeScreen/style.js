import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
  },
  textInput: {
    borderRadius: 3,
    height: 40,
    paddingLeft: 10,
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  iconInput: {
    marginRight: 1,
    borderRadius: 18,
    padding: 10,
    backgroundColor: "lightgray",
  },
  locationsContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 5,
  },
  locationsArray: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 1,
    borderBottomWidth: 1,
  },
  forecastContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
    padding: 5,
  },
  forecastText: {
    color: "beige",
    padding: 10,
  },
});
