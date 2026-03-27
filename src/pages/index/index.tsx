import { View, Text, Input, Picker } from '@tarojs/components'
import './index.scss'

export default function Home() {
  return (
    <View className='container'>
      <View className='sun-icon'></View>
      
      <View className='title-section'>
        <Text className='main-title'>八字命理 · 人生指南</Text>
        <Text className='sub-title'>从生辰开始，读懂你当下的困境与机遇</Text>
      </View>
      
      <View className='form-section'>
        <View className='form-item'>
          <Text className='label'>出生日期(必填)</Text>
          <View className='date-type'>
            <Text className='date-type-active'>只需填阳历生日，系统会自动转为农历生日</Text>
          </View>
          <View className='date-pickers'>
            <Picker className='date-picker' mode='year' range={[2020, 2021, 2022, 2023, 2024, 2025]}>
              <View className='picker-view'>2021</View>
            </Picker>
            <Text className='date-separator'>月</Text>
            <Picker className='date-picker' mode='month' range={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}>
              <View className='picker-view'></View>
            </Picker>
            <Text className='date-separator'>日</Text>
            <Picker className='date-picker' mode='day' range={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}>
              <View className='picker-view'></View>
            </Picker>
          </View>
        </View>
        
        <View className='form-item'>
          <Text className='label'>出生时辰(可选)</Text>
          <Picker className='time-picker' mode='selector' range={['子时 23:00-01:00', '丑时 01:00-03:00', '寅时 03:00-05:00', '卯时 05:00-07:00', '辰时 07:00-09:00', '巳时 09:00-11:00', '午时 11:00-13:00', '未时 13:00-15:00', '申时 15:00-17:00', '酉时 17:00-19:00', '戌时 19:00-21:00', '亥时 21:00-23:00']}>
            <View className='picker-view'>子时 23:00-01:00</View>
          </Picker>
        </View>
        
        <View className='form-item'>
          <Text className='label'>性别(必填)</Text>
          <View className='gender-options'>
            <View className='gender-option'>男</View>
            <View className='gender-option'>女</View>
          </View>
        </View>
        
        <View className='form-item'>
          <Text className='label'>关注领域(可选)</Text>
          <View className='interest-options'>
            <View className='interest-option active'>事业</View>
            <View className='interest-option'>感情</View>
            <View className='interest-option'>财运</View>
            <View className='interest-option'>健康</View>
            <View className='interest-option'>人际</View>
          </View>
        </View>
      </View>
      
      <View className='submit-btn'>
        <Text className='btn-text'>查看我的命运报告</Text>
      </View>
      
      <Text className='footer-text'>基于4千年传统命理，为你深度解读</Text>
    </View>
  )
}