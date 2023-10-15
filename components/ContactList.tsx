import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Hitesh Choudhary",
            status: "Just an extra ordinary teacher",
            imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
        },
        {
            uid: 2,
            name: "Anurag Tiwari",
            status: "I ❤️ To Code and Teach!",
            imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
        },
        {
            uid: 3,
            name: "Sanket Singh",
            status: "Making your GPay smooth",
            imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
        },
        {
            uid: 4,
            name: "Anirudh Jwala",
            status: "Building secure Digital banks",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ uid, imageUrl, name, status }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.contactName}>{name}</Text>
                            <Text>{status}</Text>
                        </View>
                    </View>
                ))}
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
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 30,
        padding: 10,
        backgroundColor: "#111",
        borderRadius: 5,
        marginVertical: 1,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 20,
    },
    contactName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ecf0f1",
    },
});
