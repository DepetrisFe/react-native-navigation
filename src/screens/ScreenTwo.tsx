import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const ScreenTwo = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <Button
        title="Pagina 3"
        onPress={() => navigator.navigate('ScreenThree')}
      />
    </View>
  );
};
