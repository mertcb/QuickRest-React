import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import * as theme from '../theme';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');
const CARD_IMAGE_HEIGHT = 180;

function FeaturedCard({ id, name, image, category, price }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{category}</Text>
        </View>
        <View style={{ flex: 0, justifyContent: 'flex-end' }}>
          <Text style={[styles.title, { color: theme.colors.teal }]}>
            ₺{price}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: theme.sizes.base * 3
  },
  imageContainer: {
    borderRadius: theme.radius.half,
    ...theme.shadows.md,
    zIndex: 5
  },
  image: {
    width: '90%',
    height: CARD_IMAGE_HEIGHT,
    alignSelf: 'center',
    borderRadius: theme.radius.half
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: theme.sizes.base * 3,
    paddingVertical: theme.sizes.padding,
    paddingTop: CARD_IMAGE_HEIGHT - 50,
    marginTop: (CARD_IMAGE_HEIGHT - 60) * -1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.half,
    ...theme.shadows.base
  },
  title: {
    fontSize: 18,
    fontWeight: theme.fontWeights.bold
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.gray,
    fontWeight: theme.fontWeights.regular
  }
});

export default FeaturedCard;
