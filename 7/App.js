import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Card} from 'react-native-elements';

const data=[
  {
    imageUrl:'http://img.cdn.famobi.com/portal/html5games/images/tmp/RacingMonsterTrucksTeaser.jpg',
    title:'123'
  },
  {
    imageUrl:'http://ozogames.com/images/FormulaFever.jpg',
    title:'123'
  },
  {
    imageUrl:'http://kyygames.com/resources/img/game_kopp2.jpg',
    title:'123'
  },
  {
    imageUrl:'https://i.redditmedia.com/G_se0yM85DBPc6NzDF3aTHKIrXj8MDxl4kCeiaT9eaM.png?w=320&s=d2f3369dfa73e89a3cac06f320028ee6',
    title:'123'
  },
];

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
          return(
            <Card
              style={{height: 200}}
              title={null}
              image={{uri: rowData.imageUrl}}
              containerStyle={{padding: 0, width: 160, height: 200, marginTop: 20}}
            >
            <Text style={{marginBottom: 10}}>{rowData.title}</Text>
            </Card>
          );
        }}
      keyExtractor={(item, index) => index}
      />
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
