import React from "react";
import { Image } from 'react-native'
import {styles} from "./Styles";

export function GuildIcon() {
    const uri = 'https://cdn2.unrealengine.com/egs-discord-discord-s10-512x512-22ee7a1e5199.png';
    return(
        <Image
            source={{ uri }}
            style={ styles.image }
            resizeMode="cover"
        />
    )
}