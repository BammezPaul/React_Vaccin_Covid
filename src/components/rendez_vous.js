import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable, Picker, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



class Rendez_vous extends Component {

    state = {
        data:[],
        nom: "",
        prenom: "",
        dateNaissance: "",
        numSecuriteSociale: "",
        dateRes: "",
        nomVaccin:"1", 
        nbrDoses: "",
    }

   

    ajout_rendez_vous = async () =>{
        const response = await fetch("http://127.0.0.1:5000/api/rendez_vous",
    {
        method : "POST",
        body: JSON.stringify({rendez_vous: this.state}),
        headers : {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
        console.log(this.state)
    }

   async getStockVaccin() {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/vaccin');
          const json = await response.json();
          this.setState({ data: json });
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
      }
    
      componentDidMount() {
        this.getStockVaccin();
      }

      renderVaccinList = () => {
        return this.state.data.map((vaccin) => {
          return <Picker.Item label={vaccin.nom_vaccin} value={vaccin.id_vaccin} />
        })
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
                            placeholder="Num??ro de s??curit?? sociale"
                            value = {this.state.numSecuriteSociale}
                            onChangeText={(numSecuriteSociale)=> this.setState({ numSecuriteSociale: numSecuriteSociale })} 
                        />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Date de r??servation"
                            value = {this.state.dateRes}
                            onChangeText={(dateRes)=> this.setState({ dateRes: dateRes })} 
                        />
                    </View>
                    
                    <View>
                        <Picker 
                            selectedValue= {this.setState.nomVaccin}
                            onValueChange={(itemValue, itemIndex) => this.setState({nomVaccin: itemValue})}
                            style={{ padding: 10,
                            marginLeft:30,
                            marginRight:30,
                            marginBottom:20,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'black',
                            borderRadius:5,
                            backgroundColor: '#89c2d9' 
                            }}>
                            {this.renderVaccinList()}
                        </Picker>
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="De quelle dose s'agit-il ?"
                            value = {this.state.nbrDoses}
                            onChangeText={(nbrDoses)=> this.setState({ nbrDoses: nbrDoses })} 
                        />
                    </View>
                    
                    <Pressable style={styles.button} onPress={this.onpressEnvoyer} >
                        <Text style={styles.textButton}>Envoyer</Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }

    onpressEnvoyer = () =>{
        this.clearInput()
        this.ajout_rendez_vous()
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