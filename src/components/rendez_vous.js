import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Rendez_vous extends Component {

    state = {
        nom: "",
        prenom: "",
        dateNaissance: "",
        numSecuriteSociale: "",
        dateRes: "",
        nomVaccin:"", 
        nbrDoses: "",
        numSerieVaccin: ""
    }

    render() {
        return(
            <KeyboardAwareScrollView>
                <ScrollView style={styles.content}>
                    <View style={styles.titreSection}>
                        <Text style={styles.titre}>Prendre un rendez-vous de vaccination</Text>
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Nom"
                            value = {this.state.nom}
                            onChangeText={(nom)=> this.setState({ nom: nom })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Prenom"
                            value = {this.state.prenom}
                            onChangeText={(prenom)=> this.setState({ prenom: prenom })} 
                        />
                    </View> 
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Date de naissance"
                            value = {this.state.dateNaissance}
                            onChangeText={(dateNaissance)=> this.setState({ dateNaissance: dateNaissance })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Numéro de sécurité sociale"
                            value = {this.state.numSecuriteSociale}
                            onChangeText={(numSecuriteSociale)=> this.setState({ numSecuriteSociale: numSecuriteSociale })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Date de réservation"
                            value = {this.state.dateRes}
                            onChangeText={(dateRes)=> this.setState({ dateRes: dateRes })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Nom du vaccin"
                            value = {this.state.nomVaccin}
                            onChangeText={(nomVaccin)=> this.setState({ nomVaccin: nomVaccin })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Numéro de série du vaccin"
                            value = {this.state.numSerieVaccin}
                            onChangeText={(numSerieVaccin)=> this.setState({ numSerieVaccin: numSerieVaccin })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="De quelle dose s'agit-il ?"
                            value = {this.state.nbrDoses}
                            onChangeText={(nbrDoses)=> this.setState({ nbrDoses: nbrDoses })} 
                        />
                    </View>
                    
                    <Pressable style={styles.button} onPress={this.verification}>
                        <Text style={styles.textButton}>Envoyer</Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }

    clearInput = () => {
        this.setState({nom: ""});
        this.setState({prenom: ""});
        this.setState({dateNaissance: ""});
        this.setState({numSecuriteSociale: ""});
        this.setState({dateRes: ""});
        this.setState({avnomVaccinis: ""});
        this.setState({nbrDoses: ""});
    }


}

const styles = StyleSheet.create({
    content: {
        marginTop:50,
        marginHorizontal:10
    },
    titreSection: {
        
        marginBottom:20,
        padding:10
        
    },
    titre: {
        fontSize:20,
        marginTop:15,
        textAlign:'center',
        fontWeight:'bold'
    },
    alert: {
        color:'red',
        textAlign:'center',
        marginBottom:20
    },
    input: {
        padding: 10,
        marginLeft:30,
        marginRight:30,
        marginBottom:20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius:5,
        backgroundColor: '#89c2d9'
    },
    InputAdresse: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        height:60,
    },
    InputAvis: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        height:100,
    },
    button: {
        backgroundColor:'#1d3557',
        marginHorizontal:130,
        borderRadius:6,
        paddingVertical:10,
        marginBottom:10,
    },
    textButton: {
        color:'white',
        textAlign:'center'
    }, 
    content: {
        backgroundColor: '#2a6f97',
    }
});

export default Rendez_vous;