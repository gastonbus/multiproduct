import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({category}) => {
  return (
    <View style={styles.categoryContainer}>
      <Pressable onPress={() => console.log("Ir a categoria", category)}>
        <Text style={styles.categoryText}>{category}</Text>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.blueGray,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
  },
  categoryText: {
    color: colors.lightOrange,
    fontSize: 22,
    fontWeight: "600"

  }
})