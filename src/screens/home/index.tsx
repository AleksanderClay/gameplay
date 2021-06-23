import React from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd/inde";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";

export function Home() {
    return (
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
        </View>
    )
}