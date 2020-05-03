import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Animated,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import FeaturedCard from "../components/FeaturedCard";
import ListItem from "../components/ListItem";
import restaurant from "../mocks/restaurant";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Toast from "react-native-tiny-toast";

import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from "@expo/vector-icons";

import * as theme from "../theme";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function Restaurant({ name, address, coverPhoto, foods, navigation }) {
  const [_foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.wevent.io/quickrest/food/get");

      setFoods(result.data["data"]);
    };

    fetchData();
  }, []);

  const featuredItems = _foods.filter((food) => food.featured);
  const categories = [...new Set(_foods.map((item) => item.category))];

  const [featuredItemsScrollXState] = useState(new Animated.Value(0));
  const dotPosition = Animated.divide(featuredItemsScrollXState, SCREEN_WIDTH);

  const [scrollYState] = useState(
    new Animated.Value(
      // iOS has negative initial scroll value because content inset...
      Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
    )
  );

  const scrollY = Animated.add(
    scrollYState,
    Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
  );

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const headerOverlayOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0.25, 0.5],
    extrapolate: "clamp",
  });

  const headerTextScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.6],
    extrapolate: "clamp",
  });

  const headerTextTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const headerSubtitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, -1],
    extrapolate: "clamp",
  });

  const [category, setCategory] = useState("Soup");
  const [index, setIndex] = useState(0);

  function selectCategory(category, index) {
    setCategory(category);
    setIndex(index);
  }

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />

      <Animated.ScrollView
        style={styles.body}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollYState,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        contentInset={{ top: HEADER_MAX_HEIGHT }}
        contentOffset={{ y: -HEADER_MAX_HEIGHT }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.fill, { marginBottom: theme.sizes.base * 4 }]}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <View style={styles.fill}>
            <Animated.ScrollView
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: { x: featuredItemsScrollXState },
                  },
                },
              ])}
            >
              {featuredItems.map((item) => (
                <FeaturedCard key={item.id} {...item} />
              ))}
            </Animated.ScrollView>
            <View
              style={[
                styles.fill,
                {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              {featuredItems.map((item, index) => {
                const borderWidth = dotPosition.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0, 2.5, 0],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={`step-${item.id}`}
                    style={[
                      styles.dots,
                      styles.activeDot,
                      { borderWidth: borderWidth },
                    ]}
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.fill}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, _index) => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  selectCategory(category, _index);
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={[
                    styles.categoryTitle,
                    {
                      color:
                        _index == index
                          ? theme.colors.black
                          : theme.colors.gray,
                    },
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View
          style={[styles.fill, styles.paddingHorizontal, { paddingBottom: 24 }]}
        >
          {_foods.map((food) => {
            if (food.category == category) {
              return (
                <TouchableOpacity
                  key={food.id}
                  onPress={() => {
                    axios
                      .post("https://api.wevent.io/quickrest/basket/add", {
                        id: food.id,
                      })
                      .then(function (response) {
                        if (response["data"]["success"] == true) {
                          Toast.show(food.name + " added to basket!");
                        } else {
                          Toast.show(response["data"]["message"]);
                        }
                      });
                  }}
                  activeOpacity={0.5}
                >
                  <ListItem {...food} />
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerTranslate }],
          },
        ]}
      >
        <Image
          source={{
            uri: coverPhoto,
          }}
          style={styles.coverPhoto}
        />
        <Animated.View
          style={[styles.overlay, { opacity: headerOverlayOpacity }]}
        />
        <Animated.View
          style={[
            styles.headerTextContainer,
            {
              transform: [
                { scale: headerTextScale },
                { translateY: headerTextTranslate },
              ],
            },
          ]}
        >
          <Text style={styles.title}>{name}</Text>
          <Animated.Text
            style={[styles.subtitle, { opacity: headerSubtitleOpacity }]}
          >
            {address}
          </Animated.Text>
        </Animated.View>
      </Animated.View>

      <View style={styles.container}>
        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
            if (name == "basket") {
              navigation.navigate("Basket");
            } else {
              console.log("pressed another button");
            }
          }}
        />
      </View>
    </View>
  );
}

const actions = [
  {
    text: "Go to Basket",
    icon: <Ionicons name="ios-basket" size={32} color="white" />,
    name: "basket",
    position: 1,
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  fill: {
    flex: 0,
  },
  paddingHorizontal: {
    paddingHorizontal: theme.sizes.padding,
  },
  body: {
    flex: 0,
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 24,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    backgroundColor: "transparent",
    height: HEADER_MAX_HEIGHT,
    width: SCREEN_WIDTH,
  },
  coverPhoto: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.black,
  },
  headerTextContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 68 : 78,
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: theme.sizes.title,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
  subtitle: {
    fontSize: theme.sizes.caption,
    color: theme.colors.white,
  },
  sectionTitle: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.sizes.subHeader,
    paddingHorizontal: theme.sizes.padding,
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.lightGray,
    borderWidth: 2.5,
    borderRadius: 5,
    borderColor: "transparent",
    marginHorizontal: 6,
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.teal,
  },
  categoryTitle: {
    fontSize: theme.sizes.subHeader - 6,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    marginHorizontal: theme.sizes.margin,
    paddingVertical: 8,
  },
});

Restaurant.navigationOptions = (props) => {
  return {
    header: () => null,
  };
};

Restaurant.defaultProps = {
  ...restaurant,
};

export default Restaurant;
