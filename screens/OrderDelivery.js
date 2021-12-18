import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { COLORS, SIZES, FONTS } from '../constants';

const OrderDelivery = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ padding: SIZES.padding * 2, paddingBottom: 0, alignItems: 'center' }}>
                <Text style={{ ...FONTS.h1 }}>Coming Soon!</Text>
                <Text style={{ ...FONTS.h1 }}>Under Development</Text>
                <TouchableOpacity
                    style={{
                        width: SIZES.width * 0.9,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        borderRadius: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>go to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    }
})

export default OrderDelivery;