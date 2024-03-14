import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Animated, ViewStyle, StyleProp } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

interface SkelProps{
  width: number,
  height: number,
  duration?: number,
  backgroundColor?: string
  backgroundAnimationColor?: string[]
  styles: StyleProp<ViewStyle>
}

export const Skel = ({ 
  width, 
  height,
  duration = 1000,
  backgroundColor= '#EBEFF5', 
  backgroundAnimationColor = ['transparent', "rgba(0,0,0, 0.03)", 'transparent'], 
  styles = {}
}: SkelProps) => {
  const translateX = useRef(new Animated.Value(-width)).current

  useEffect(()=> {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration
      })
    ).start()
    
  }, [width])

  return (
    <View
      style={StyleSheet.flatten([
        { 
          width, 
          height, 
          backgroundColor,
          overflow: 'hidden'
        },
        styles
      ])}>
      <Animated.View style={{
        width: '100%',
        height: '100%',
        transform: [{ translateX: translateX }]
      }}>
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          colors={backgroundAnimationColor}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  )
}