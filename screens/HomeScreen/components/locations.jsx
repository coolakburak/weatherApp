import { View, Text, TouchableOpacity } from "react-native";
import { MapPinIcon } from "react-native-heroicons/solid";

import React from "react";
import { styles } from "../style";
export default function Locations({ locations, showSearch }) {
  return (
    <View>
      {locations.length > 0 && showSearch ? (
        <View style={styles.locationsContainer}>
          {locations.map((loc, index) => (
            <TouchableOpacity style={styles.locationsArray}>
              <MapPinIcon size={24} color={"gray"} />
              <Text>BARTU ADAMDIR</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
}
