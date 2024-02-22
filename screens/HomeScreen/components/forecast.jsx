import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { styles } from "../style";

export default function Forecast({ weather }) {
  return (
    <View style={styles.forecastContainer}>
      <Feather name="wind" size={36} color="beige" />
      <Text style={styles.forecastText}>{weather?.current?.wind_kph} km/h</Text>
      <Ionicons name="water-outline" size={36} color="beige" />
      <Text style={styles.forecastText}>{weather?.current?.humidity}%</Text>
      <Entypo name="direction" size={36} color="beige" />
      <Text style={styles.forecastText}>{weather?.current?.wind_dir}</Text>

      <Text></Text>
    </View>
  );
}
