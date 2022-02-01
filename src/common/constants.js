import React from 'react';
import { Dimensions, Platform, StatusBar } from "react-native";
export const STATUSBAR_HEIGHT = Platform.OS === "ios" ? iPhoneX ? 44 : 22 : StatusBar.currentHeight;
export const screenHeight = Dimensions.get('window').height - STATUSBAR_HEIGHT;
export const screenWidth = Dimensions.get('window').width;
let sampleHeight = 812;
let smapleWidth = 375;
const scale = size => screenWidth / smapleWidth * size;

export function moderateScale(size, factor = 0.5) {
    return size + (scale(size) - size) * factor;
}