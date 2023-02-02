import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const ScreenOne = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 1</Text>
      <Button
        title="Pagina 2"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
};
