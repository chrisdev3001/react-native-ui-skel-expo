
# react-native-ui-skel

![Alt Text](https://firebasestorage.googleapis.com/v0/b/chris-github.appspot.com/o/uiSkelGif2.gif?alt=media&token=4ace2d03-265c-4e61-8de4-4bf326009bd9)

## Documentation
A simple React Native component that implements a Skeleton UI.
It will performance your react-native app and you will get more fps.

If you are using Expo, please use this lib:
[react-native-ui-skel-expo](https://www.npmjs.com/package/react-native-ui-skel-expo)

1. Install your skel

```bash
npm i react-native-ui-skel
```

2. install react-native-linear-gradient (if you have it, omit this step 2 and 3)

```bash
npm i react-native-linear-gradient
```

3. install new pods

```bash
npx pod-install
```

## Usage/Examples

```javascript
import { Skel } from 'react-native-ui-skel'

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