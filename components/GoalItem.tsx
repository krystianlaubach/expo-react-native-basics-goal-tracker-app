import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

type Props = {
    id: string,
    text: string,
    onDelete: (id: string) => void,
};

export default function GoalItem({ id, text, onDelete }: Props) {
    const [pressed, setPressed] = useState<boolean>(false);

    const handleOnPress = (): void => {
        onDelete(id);
    };

    const handleOnPressIn = (): void => {
        setPressed(true);
    };

    const handleOnPressOut = (): void => {
        setPressed(false);
    };

    return (
        <View style={ styles.goalItem }>
            <Pressable style={ pressed ? styles.pressed : styles.idle } onPress={ handleOnPress } onPressIn={ handleOnPressIn } onPressOut={ handleOnPressOut }>
                <Text style={ styles.goalText }>{ text }</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
    },
    idle: {
        borderRadius: 6,
        backgroundColor: '#143981',
    },
    pressed: {
        borderRadius: 6,
        backgroundColor: '#0E285A',
    },
    goalText: {
        padding: 10,
        color: '#ffffff',
    },
});
