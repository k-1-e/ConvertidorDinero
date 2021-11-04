
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import  FormInput   from '../FormInput';

const Convertidor = () => {

    const [origen, setOrigen] = useState<string>('NIO')
    const [destino, setDestino] = useState<string>('USD')
    const [cantidadConvertir, setCantidadConvertit] = useState<number>(0)
    const [resultado, setResultado] = useState<number>(0)

    const [error, setError] = useState<boolean>(false)


    const tcDolar: number = 35.3
    const tcEuro: number = 40.22
    const tcEuroDolar: number = 1.24

    const handelCantidad = (text: string) => {
        const cant = parseFloat(text)
        if (isNaN(cant)) {
            setError(true)
        } else {
            setError(false)
        }
        setCantidadConvertit(cant)
    }

    const handelConvertir = () => {
        if (!cantidadConvertir) {
            alert('se requiere la cantidad a convertir')
            return
            
        }
        if (origen === 'NIO' && destino === 'USD') {
            setResultado(cantidadConvertir / tcDolar)
        }
        if (origen === 'USD' && destino === 'NIO') {
            setResultado(cantidadConvertir * tcDolar)
        }


        if (origen === 'NIO' && destino === 'EUR') {
            setResultado(cantidadConvertir / tcEuro)
        }
        if (origen === 'EUR' && destino === 'NIO') {
            setResultado(cantidadConvertir * tcEuro)
        }



        if (origen === 'USD' && destino === 'EUR') {
            setResultado(cantidadConvertir / tcEuroDolar)
        }
        if (origen === 'EUR' && destino === 'USD') {
            setResultado(cantidadConvertir * tcEuroDolar)
        }
    }

    return (
        <View style={styles.container}>

           <FormInput
                title="Cantidad"
                defaultValue={cantidadConvertir.toString()}
                onChangeText={handelCantidad}
                handelError={error}
                errorMessage="solo se admiten numeros"
            />
             <FormInput
                title="Moneda de origen"
                defaultValue={origen}
                onChangeText={setOrigen}
            />
              <FormInput
                title="Moneda de origen"
                defaultValue={destino}
                onChangeText={setDestino}
            />
            <View style={styles.button}>
                <Button
                    disabled={error}
                    onPress={handelConvertir}
                    title="Convertir"
                />
            </View>

            <Text style={[styles.label, styles.resultado]}
            >
                {resultado.toFixed(2)}
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',


    },
    label: {
        color: 'red',
    },
    input: {
        borderColor: 'red',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,

    },
    resultado: {
        alignSelf: 'center',
        fontSize: 50,
    },
    button: {
        margin: 10
    }
})
export default Convertidor