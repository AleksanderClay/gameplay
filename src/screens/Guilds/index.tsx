import React, {Props} from "react";
import {FlatList, View} from "react-native";
import {styles} from "./styles";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

type Props= {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'CSGO Malinos ',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'CSGO Malinos ',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'CSGO Malinos ',
            icon: 'image.png',
            owner: true
        },
        {
            id: '7',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '8',
            name: 'CSGO Malinos ',
            icon: 'image.png',
            owner: true
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 68  }}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.guilds}
            />

        </View>
    )
}