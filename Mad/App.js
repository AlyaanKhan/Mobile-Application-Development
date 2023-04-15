import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function App() {
  const [board, setBoard] = useState([
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'],
  ]);

  const handlePress = (rowIndex, columnIndex) => {
    console.log(`Clicked ${rowIndex}-${columnIndex}`);
  };

  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((square, columnIndex) => (
            <TouchableHighlight
              style={[
                styles.square,
                (rowIndex + columnIndex) % 2 === 0 ? styles.light : styles.dark,
              ]}
              key={`${rowIndex}-${columnIndex}`}
              onPress={() => handlePress(rowIndex, columnIndex)}
            >
              <Text>{square}</Text>
            </TouchableHighlight>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: 'gray',
  },
});
