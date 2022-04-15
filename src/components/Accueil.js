import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom', 'Prénom', 'Date de naissance', 'Numéro de sécurité sociale', 'Date de vaccination', 'Nom du vaccin', 'Quelle dose ?',],
      tableData: [
        ['Paul', 'Bammez', '28/04/2002', '269054958815780', '15/09/2022', 'Pfizer', 3],
        ['Denis', 'Jongmanee', '12/02/1996', '269029558815780', '22/09/2022', 'Moderna', 2],
        ['Pierrick', 'Bauffe', '23/09/2002', '269054098815780', '01/08/2022', 'Pfizer', 3],
        ['Thibault', 'Balleux', '04/07/2002', '269054496715780', '26/08/2022', 'Pfizer', 1],
      ]
    }
  }

  /*async getPatient() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/rendez_vous');
      const json = await response.json();
      this.setState({ data: json.patient });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getPatient();
  }*/

  render() {
    const state = this.state;
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.content}>
          <View style={styles.titreSection}>
            <Text style={styles.titre}>Rendez-vous de vaccination</Text>
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.textheader}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: '#89c2d9', overflow: 'hidden'},
  text: { margin: 6, textAlign: 'center' },
  textheader: { margin: 6, textAlign: 'center', color: 'white', fontWeight:'bold'},
  titre: {
    fontSize:20,
    marginTop:15,
    textAlign:'center',
    fontWeight:'bold'
  },
  titreSection: {
    marginBottom:20,
    padding:10
  },
  content: {
    backgroundColor: '#2a6f97',
  },
});