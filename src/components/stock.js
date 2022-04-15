import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nom du vaccin', 'Stock restant'],
      tableData: []
    }
  }

  async getStockVaccin() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/vaccin');
      const json = await response.json();
      console.log(json[0].quantitee_disponible)
      let liste_vaccin = []
      console.log(liste_vaccin)
      json.forEach(vaccin => {
        liste_vaccin.push([vaccin.nom_vaccin, vaccin.quantitee_disponible])
      });
      console.log(liste_vaccin)
      this.setState({ tableData: liste_vaccin});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getStockVaccin();
  }

  render() {
    const state = this.state;
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.content}>
          <View style={styles.titreSection}>
            <Text style={styles.titre}>Stock des vaccins</Text>
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
  container: { flex: 1, paddingLeft: '20%', paddingRight:'20%', paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#89c2d9' },
  text: { margin: 6, textAlign:'center' },
  textheader: { margin: 6, textAlign:'center', color: 'white', fontWeight:'bold'},
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