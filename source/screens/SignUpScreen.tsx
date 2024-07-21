import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../utility/colors';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container_sign_up}>
      <View style={styles.content}>
        <Text style={styles.title_screen}>Đăng ký</Text>
        <Text style={styles.description_screen}>Tạo tài khoản để bắt đầu</Text>

        <View style={styles.wrap_form}>
          <Input
            containerStyle={{paddingTop: 24, paddingHorizontal: 0}}
            label="Tên"
            labelStyle={{color: 'black', paddingBottom: 8}}
            disabledInputStyle={{backgroundColor: '#ddd'}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            placeholder="Tên của bạn"
          />

          <Input
            containerStyle={{paddingHorizontal: 0}}
            label="Địa chỉ email"
            labelStyle={{color: 'black', paddingBottom: 8}}
            disabledInputStyle={{backgroundColor: '#ddd'}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            placeholder="name@email.com"
          />

          <Input
            containerStyle={{paddingHorizontal: 0}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            inputStyle={{}}
            label="Mật khẩu"
            labelStyle={{color: 'black', paddingBottom: 8}}
            labelProps={{}}
            leftIconContainerStyle={{}}
            rightIcon={<Icon name="eye" size={20} />}
            rightIconContainerStyle={{}}
            placeholder="Mật khẩu"
          />

          <Input
            containerStyle={{paddingHorizontal: 0}}
            disabledInputStyle={{backgroundColor: '#ddd'}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            placeholder="Xác nhận mật khẩu"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container_sign_up: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  title_screen: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description_screen: {
    color: colors.gray,
    paddingTop: 10,
  },

  wrap_form: {},

  input_container_style: {
    borderWidth: 1,
    borderColor: colors.gray_medium,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default SignUpScreen;
