import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Animated, ViewStyle, StyleProp, ViewProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

interface SkelProps extends ViewProps {
  width: number,
  height: number,
  duration?: number,
  backgroundColor?: string
  backgroundAnimationColor?: string[]
  styles: StyleProp<ViewStyle>
}

const HUNDRED_PERCENT = '100%'

export const Skel = ({
  width,
  height,
  duration = 1000,
  backgroundColor = '#EBEFF5',
  backgroundAnimationColor = ['transparent', "rgba(0,0,0, 0.03)", 'transparent'],
  styles = {},
  ...props
}: SkelProps) => {
  const translateX = useRef(new Animated.Value(-width)).current

  useEffect(() => {
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
      ])}
      {...props}
    >
      <Animated.View style={{
        width: HUNDRED_PERCENT,
        height: HUNDRED_PERCENT,
        transform: [{ translateX: translateX }]
      }}>
        <LinearGradient
          style={{ width: HUNDRED_PERCENT, height: HUNDRED_PERCENT }}
          colors={backgroundAnimationColor}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  )
}
