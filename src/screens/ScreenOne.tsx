import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const ScreenOne = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <Button
        title="Pagina 2"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
      <Button
        title="Persona Screen"
        onPress={() => navigation.navigate('PersonScreen')}
      />
      <Text style={styles.text}>Navegar con argumentos</Text>
      <View style={localStyles.buttonRow}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.buttonBigText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.buttonBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
