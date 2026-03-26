import React, { useRef, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

function App() {
  let lastExecution = useRef(0);

  const handleScroll = useCallback((event) => {
    let now = Date.now();

    let timeGap = now - lastExecution.current;

    if(timeGap > 2000) {
      console.log('scroll y position :- ', event.nativeEvent.contentOffset.y);
      lastExecution.current = now;
    }


  },[]);


  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}
    >
      <View style={styles.view}>
        <Text
     style={styles.text}
        >Scroll down to see the trottling effect</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 15,
  },
  view: {
    height: 20000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'pink'
  }
})

export default App;
