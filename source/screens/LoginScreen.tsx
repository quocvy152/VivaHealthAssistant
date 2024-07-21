import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input} from '@rneui/base';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import {images} from '../resource/images';
import {colors} from '../utility/colors';
import ButtonCustom from '../components/ButtonCustom';
import { RootStackParamList } from '../typings/stack.params';

export type LoginScreenProp = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>,
  route?: RouteProp<RootStackParamList, 'LoginScreen'>
}

const LoginScreen = ({
  navigation
}: LoginScreenProp) => {
  return (
    <View style={styles.content}>
      <Image
        source={images.bg_login}
        style={styles.bg_login_style}
        resizeMode="contain"
      />

      <KeyboardAwareScrollView style={styles.wrap_login_form}>
        <Text style={styles.title_style}>Chào mừng bạn!</Text>

        <View style={styles.login_form}>
          <Input
            containerStyle={{paddingTop: 24, paddingHorizontal: 0}}
            disabledInputStyle={{backgroundColor: '#ddd'}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            placeholder="Email/SĐT của bạn"
          />

          <Input
            containerStyle={{paddingHorizontal: 0}}
            disabledInputStyle={{backgroundColor: '#ddd'}}
            inputContainerStyle={styles.input_container_style}
            errorMessage=""
            errorStyle={{}}
            errorProps={{}}
            placeholder="Mật khẩu"
          />

          <TouchableOpacity style={{marginBottom: 24}}>
            <Text style={styles.text_btn_none_border}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <ButtonCustom title="Đăng nhập" />

          <View style={styles.wrap_group_button_register}>
            <Text style={styles.title_button_register}>
              Chưa có tài khoản?{' '}
            </Text>
            <TouchableOpacity 
              style={styles.wrap_button_register}
              onPress={() => {
                navigation?.navigate('SignUpScreen');
              }}  
            >
              <Text
                style={[
                  styles.title_button_register,
                  {
                    color: colors.primary_color,
                    fontWeight: 'bold',
                  },
                ]}>
                Đăng ký ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line_br}></View>

        <View style={styles.wrap_button_social}>
          <Text style={styles.title_button_register}>Hoặc đăng nhập với</Text>

          <View style={styles.group_button_social}>
            <TouchableOpacity style={[styles.wrap_button, {marginRight: 8}]}>
              <Image source={images.btn_login_google} />
            </TouchableOpacity>

            {Platform.OS === 'ios' ? (
              <TouchableOpacity style={[styles.wrap_button, {marginRight: 8}]}>
                <Image source={images.btn_login_apple} />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <TouchableOpacity style={[styles.wrap_button, {}]}>
              <Image source={images.btn_login_facebook} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  bg_login_style: {
    height: 312,
    width: '100%',
  },

  wrap_login_form: {
    paddingHorizontal: 24,
    paddingTop: 25,
  },

  title_style: {
    fontWeight: 'bold',
    color: colors.title_color,
    fontSize: 24,
  },

  login_form: {},

  input_container_style: {
    borderWidth: 1,
    borderColor: '#D4D6DD',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  text_btn_none_border: {
    color: colors.primary_color,
    fontSize: 15,
    fontWeight: 'bold',
  },

  wrap_group_button_register: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  wrap_button_register: {},

  title_button_register: {
    fontSize: 15,
  },

  line_br: {
    height: 1,
    backgroundColor: colors.gray_medium,
    marginVertical: 24,
  },

  wrap_button_social: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  group_button_social: {
    flexDirection: 'row',
    paddingTop: 16,
  },

  wrap_button: {
    height: 40,
    width: 40,
  },
});

export default LoginScreen;
