import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCards(): JSX.Element {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Cards</Text>
            <View style={[styles.card]}>
                <Image
                    source={{
                        uri: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg",
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Heaven</Text>
                    <Text style={styles.cardLabel}>Clouds</Text>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quia facilis nam repudiandae beatae asperiores a
                        ad, nemo incidunt doloribus deserunt.
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
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
    card: {
        elevation: 5,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#111",
        shadowColor: "#111",
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },
    cardImage: {
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 20,
    },
    cardBody: {},
    cardTitle: {
        textAlign: "left",
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
    },
    cardLabel: {
        textAlign: "right",
        marginHorizontal: 30,
        fontStyle: "italic",
        fontSize: 15,
        color: "#c96767",
    },
    cardDescription: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    cardFooter: {
        textAlign: "right",
        marginHorizontal: 30,
        marginBottom: 10,
        fontStyle: "italic",
        fontSize: 13,
        color: "#c96767",
    },
});
