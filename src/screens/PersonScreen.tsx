import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootSackParams} from '../navigation/StackNavigator';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootSackParams, 'PersonScreen'> {}

export const PersonScreen = ({route}: Props) => {
  const params = route.params;
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
