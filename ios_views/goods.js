import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  NavigatorIOS,
  Image
} from 'react-native';

import Nav from './common/navigator'
import Util     from '../helpers/Util'
import request  from '../helpers/request'
import config   from '../helpers/config'

const width = Util.size.width;

class goods_views extends Component {
  constructor() {
    super()

    var datas = []
    for(var i = 0; i < 10; i++) {
      datas.push(
        'row' + i
      );
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(datas),
   };

  }

  render() {
    return(
      <View style = {{flexDirection: 'column', backgroundColor: '#f5f5f5', flex: 1}}>

        <View style = {{width: width, height: 64, backgroundColor: '#e23f42', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            货源
          </Text>
        </View>

        <View style = {{flex: 1}}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
              <View style = {{height: 255, justifyContent: 'center', alignItems: 'center', marginTop: -20}}>
                <Image
                  source={require('./../images/iosbg@2x.png')}
                />
              </View>
          }
          />
        </View>

      </View>
    );
  }


  // render() {
  //   return (
  //     <View style = {styles.container}>
  //       <View style = {styles.navView}>
  //         <Text style = {styles.navTitle}>红狮物流</Text>
  //       </View>
  //       <ListView
  //         style = {styles.contentView}
  //         dataSource={this.state.dataSource}
  //         renderRow={(rowData) =>
  //           <View style = {styles.cellView}>
  //             <View style = {styles.cell}>
  //               <Image
  //                 style = {styles.cellImage}
  //                 source={require('./../images/iosbg@2x.png')}>
  //
  //               </Image>
  //             </View>
  //           </View>
  //         }
  //       />
  //     </View>
  //   );
  // }

  componentDidMount() {
    //
    //this._loadListDatas();
  }


  //
  _loadListDatas() {
    console.log('start request datas...');

    var requestURL = config.api.base + config.api.goodsList;

    var body = {
      currentPage: 1,
      fromType: 1,
      lat: '30.25764',
      lng: "120.2071",
      pageSize: 10,
      recipientAreaId: '',
      senderAreaId: ''
    }

    console.log(requestURL);
    fetch(requestURL, {
          method: 'POST',
          body: JSON.stringify(body)
        })
      .then((response) => {
        console.log('1111');
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
        console.log('222');
      });
  }
}

class goods extends Component {
  render() {
    return(
      <NavigatorIOS
          initialRoute={{
          component: goods_views,
          title: "货源",
          titleTextColor: '#fff',
          barTintColor: '#e23f42',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({

});

module.exports = goods_views
