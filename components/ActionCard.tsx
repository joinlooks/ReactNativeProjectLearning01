import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>

            <View style={[styles.card]}>
                <Image
                    source={{
                        uri: "https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png",
                    }}
                    style={styles.cardImage}
                />

                <Text style={styles.cardTitle}>
                    How To Setup Your Development Environment Using React Native
                    on Windows?
                </Text>
                <Text style={styles.cardDescription} numberOfLines={3}>
                    React Native is a JavaScript framework for developing
                    cross-platform mobile applications for iOS and Android. It
                    is based on React, Facebook’s popular JavaScript library for
                    building user interfaces for targeting mobile platforms.
                </Text>

                <View style={styles.opacity}>
                    <TouchableOpacity
                        onPress={() =>
                            openWebsite(
                                "https://medium.com/swlh/how-to-setup-your-development-environment-using-react-native-on-windows-768a14ff8aec"
                            )
                        }
                    >
                        <Text style={styles.cardFooter}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            openWebsite(
                                "https://www.linkedin.com/in/looklakshya/"
                            )
                        }
                    >
                        <Text style={styles.cardLinks}>Follow me</Text>
                    </TouchableOpacity>
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
    cardTitle: {
        textAlign: "left",
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
    },

    cardDescription: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    cardFooter: {
        marginHorizontal: 30,
        marginVertical: 20,
        fontSize: 15,
        textDecorationLine: "underline",
        backgroundColor: "#0A79DF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 5,
        color: "#fff",

        shadowColor: "#111",
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },
    cardLinks: {
        marginHorizontal: 30,
        marginVertical: 20,
        fontSize: 15,
        textDecorationLine: "underline",
        backgroundColor: "#AE1438",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 5,
        color: "#fff",

        shadowColor: "#111",
        shadowOffset: {
            height: 5,
            width: 5,
        },
    },

    opacity: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});
