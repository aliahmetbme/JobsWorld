import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import useLandScape from './useLanspcape';
import { green } from '../Components/Colors';

const useBottomNavigatorVisible = (props, { route, navigation }) => {

  const routeName = getFocusedRouteNameFromRoute(route);
  const isRouteIncluded = props.Pages.includes(routeName);

  useLayoutEffect(() => {
    if (isRouteIncluded) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: props.Style,
      });
    }
  }, [navigation, route, isRouteIncluded]);
};

export default useBottomNavigatorVisible;

