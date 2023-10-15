import React from "react";
import {
    View,
    Text,
    useColorScheme,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

export default function App(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView style={styles.whole}>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
                <FancyCards />
                <ContactList />
                <ActionCard />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    whole: {
        backgroundColor: "#000",
    },
});
