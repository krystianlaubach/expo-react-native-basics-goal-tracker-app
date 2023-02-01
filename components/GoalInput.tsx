import { useState } from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

type Props = {
    visible: boolean,
    onHide: () => void,
    onSubmit: (enteredGoalText: string) => void,
};

export default function GoalInput({ visible, onHide, onSubmit }: Props) {
    const [enteredGoalText, setEnteredGoalText] = useState<string>('');

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalText(enteredText);
    };

    const onPressHandler = () => {
        onSubmit(enteredGoalText);
        setEnteredGoalText('');
    };

    return (
        <Modal visible={ visible } animationType='slide'>
            <View style={ styles.inputContainer }>
                <Image source={ require('../assets/images/goal.png') } style={ styles.image } />
                <TextInput
                    style={ styles.textInput }
                    placeholder='Your course goal!'
                    onChangeText={ goalInputHandler }
                    value={ enteredGoalText }
                />
                <View style={ styles.buttonContainer }>
                    <View style={ styles.button }><Button title='Cancel' color='#333333' onPress={ onHide } /></View>
                    <View style={ styles.button }><Button title='Add Goal' color='#143981' onPress={ onPressHandler } /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFCC00'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
