import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            {/* horizontal = true for enabling horzontal scrolling */}
            <ScrollView style={styles.container} horizontal={true}>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>Tap</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>me</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>to</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>show</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>more</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.darkColor}>😜</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
    },
    container: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
    },
    card: {
        width: 100,
        height: 100,
        margin: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#ccc",
        elevation: 5,

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    darkColor: {
        color: "#000",
        fontSize: 20,
    },
});
