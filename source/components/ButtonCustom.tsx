import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { colors } from '../utility/colors';

export type ButtonCustomProps = {
  title: string;
  vertical?: number;
  horizantal?: number;
  color?: string; 
  textColor?: string; 
  textSize?: number; 
};

const ButtonCustom = ({
  title,
  vertical = 24,
  horizantal = 32,
  color = colors.primary_color,
  textColor = colors.white,
  textSize = 16,
}: ButtonCustomProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button_container,
        {
          paddingVertical: vertical,
          paddingHorizontal: horizantal,
          backgroundColor: color,
          borderRadius: 12
        }
      ]}
    >
      <Text 
        style={{
          color: textColor,
          fontSize: textSize,
          fontWeight: 'bold'
        }}
      >{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    width: '100%',
    alignItems: 'center'
  }
})

export default ButtonCustom;
