import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}></View>
                <View style={[styles.card, styles.cardTwo]}></View>
                <View style={[styles.card, styles.cardThree]}></View>
            </View>
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    card: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },
    cardOne: {
        backgroundColor: "#610C9F",
    },
    cardTwo: {
        backgroundColor: "#940B92",
    },
    cardThree: {
        backgroundColor: "#DA0C81",
    },
});
