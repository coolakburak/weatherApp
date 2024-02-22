import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Locations from "./components/locations";
import Forecast from "./components/forecast";
import { fetchWeather } from "../../utils/api";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState();
  const [searchText, setSearchText] = useState("");

  const getWeather = async (searchText) => {
    try {
      const response = await fetchWeather(searchText);
      setWeather(response);
      console.log("weather", response);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const iconUrl = weather?.current?.condition?.icon?.startsWith("//")
    ? `https:${weather?.current?.condition?.icon}`
    : weather?.current?.condition?.icon;

  const searchLocation = () => {
    if (showSearch === false) {
      setShowSearch(true);
    } else if (showSearch === true) {
      getWeather(searchText);
      setShowSearch(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground
        blurRadius={10}
        source={require("../../assets/bgbartu.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.inputContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: showSearch ? "gray" : "transparent",
              borderRadius: 18,
            }}
          >
            {showSearch ? (
              <TextInput
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                style={styles.textInput}
                placeholder="Search a city"
                placeholderTextColor="lightgray"
                onSubmitEditing={searchLocation}
              />
            ) : null}

            <TouchableOpacity onPress={searchLocation} style={styles.iconInput}>
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <Locations locations={locations} showSearch={showSearch} />
        <View />
        {/* Forecast Section */}
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            marginBottom: 20,
          }}
        >
          {/* Location */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 60,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 36,
                color: "beige",
                fontWeight: "bold",
              }}
            >
              {weather?.location?.name},
            </Text>
            <Text
              style={{
                marginTop: 15,
                fontSize: 20,
                color: "beige",
              }}
            >
              {weather?.location?.country}
            </Text>
            {/* Image */}
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: iconUrl,
              }}
              style={{ width: 100, height: 100, marginRight: 5 }}
            />
          </View>
          {/* Degree Celcius */}
          <Text style={{ fontSize: 36, fontWeight: "bold", color: "beige" }}>
            {weather?.current?.temp_c}&#176;
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "beige" }}>
            {weather?.current?.condition?.text}
          </Text>
          <Forecast weather={weather} />
        </View>
        {/* Forecast Section */}
      </ImageBackground>
    </View>
  );
}
