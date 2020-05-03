import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as theme from '../theme';

function ListItem({ name, description, image, price }) {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: image }} />
      <View
        style={{
          flex: 1,
          alignSelf: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 4
          }}
        >
          <Text style={[styles.title, { flex: 1 }]}>{name}</Text>
          <Text style={[styles.title, { color: theme.colors.teal }]}>
            ₺{price}
          </Text>
        </View>
        <Text style={styles.subtitle} numberOfLines={1}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: theme.sizes.base * 2
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.half,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    marginRight: theme.sizes.base * 2
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

export default ListItem;
