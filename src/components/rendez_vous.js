import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class rendez_vous extends Component {

    state = {
        nom: "",
        prenom: "",
    }

    render() {
        return(
            <KeyboardAwareScrollView>
                <ScrollView style={styles.content}>
                    <View style={styles.titreSection}>
                        <Text style={styles.titre}>Vous voulez nous partager un bon restaurant que vous déconseilleriez ?</Text>
                    </View>
                    <Text style={styles.alert}>
                        {this.state.message}
                    </Text>
                    <View>
                        <Text>Nom :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.nom}
                            onChangeText={(nom)=> this.setState({ nom: nom })} 
                        />
                    </View> 
                    <View>
                        <Text>Prénom :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.prenom}
                            onChangeText={(prenom)=> this.setState({ prenom: prenom })} 
                        />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        marginTop:50,
        marginHorizontal:10
    },
    titreSection: {
        
        marginBottom:20,
        borderWidth:1,
        borderRadius:10,
        padding:10
        
    },
    titre: {
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    alert: {
        color:'red',
        textAlign:'center',
        marginBottom:20
    },
    input: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    button: {
        backgroundColor:'blue',
        marginHorizontal:130,
        borderRadius:6,
        paddingVertical:10
    },
    textButton: {
        color:'white',
        textAlign:'center'
    }   
});

export default ContactForm;