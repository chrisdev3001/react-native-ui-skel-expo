
# react-native-ui-skel-expo

![Alt Text](https://github.com/chrisdev3001/react-native-ui-skel/blob/master/skel1.gif?raw=true)

![Alt Text](https://github.com/chrisdev3001/react-native-ui-skel/blob/master/skel2.gif?raw=true)

Note: gift are just examples, and are not syncronius because they were converted

## Documentation
A simple React Native component that implements a Skeleton UI.
It will performance your react-native app and you will get more fps.

If you are using bare React Native, please use this lib:
[react-native-ui-skel](https://www.npmjs.com/package/react-native-ui-skel)

1. Install your skel

```bash
npm i react-native-ui-skel-expo
```

2. install expo-linear-gradient (if you already have it, jump this step)

```bash
npm i expo-linear-gradient
```

## Usage/Examples

```javascript
import { Skel } from 'react-native-ui-skel-expo'

<View>
    <Skel 
      height={40} 
      width={300}
      styles={{ borderRadius: 4 }}
    />
</View>
```




### Props

| Name               | Type             | Default                 | Description                                                                                                                       |
| ------------------ | ---------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| height          | number             | **required**            | Skel height                                                                                |
| width          | number             | **required**            | Skel width                                                                                            |
| duration           | number           | 1000 ms                 | Duration of the animation                                                                                                |
| styles     | object           | {}                 | The style applied to the Skel                                                                                    |
| backgroundColor             | string           | #EBEFF5 | The color of the Skel background                                                                                                      |
| backgroundAnimationColor     | array           | ['transparent', 'rgba(0,0,0, 0.03)', 'transparent']               | The color of the Skel animation (this gives UI touch)



## Authors

- [@chrisdev3001](https://www.github.com/chrisdev3001)
