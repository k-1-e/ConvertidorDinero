import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface Props {
    title: string,
    defaultValue: string,
    errorMessage?: string,
    handelError?: Boolean,
    onChangeText: (text: string) => void
}

const FormInput = ({ errorMessage = 'Error', title, defaultValue, handelError = false, onChangeText }: Props) => {
    return (
        <View>
            <Text style={styles.label}>{title}</Text>
            <TextInput
                defaultValue={defaultValue}
                style={styles.input}
                onChangeText={text => onChangeText(text)}
            />
            {
                handelError
                    ?
                    (
                        <Text style={styles.label}>
                            {errorMessage}
                        </Text>
                    )
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: 'red'
    },
    input: {
        borderColor: 'red',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})
export default FormInput



