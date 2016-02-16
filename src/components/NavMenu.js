import React, {
  Navigator,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import NavButton from './NavButton'
import img_back from '../assets/ic_arrow_back_white_24dp_2x.png'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenu extends StyledComponent {
  render() {
    let other = <NavButton
      onPress={() => {
            this.props.navigator.push({
              id: 'back',
              message: 'NavigationScene',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight
            });
          }}
      text="move forward"
    />;

    let backButton = <TouchableHighlight
      underlayColor="transparent"
      onPress={() => this.props.navigator.pop()}>
      <Image
        style={{width: 24, height: 24}}
        source={img_back}
      />
    </TouchableHighlight>;
    return (
      <ScrollView bounces={false}>
        <View element="header">
            {this.props.leftElement ? this.props.leftElement : backButton}
            <Text element="messageText">{this.props.message}</Text>
        </View>
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.FloatFromRight,
            });
          }}
          text="Float in from right"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.pop();
          }}
          text="Pop"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.popToTop();
          }}
          text="Pop to top"
        />
        <NavButton
          onPress={() => this.props.onExampleExit()}
          text="Log 'exit'"
        />
      </ScrollView>
    );
  }

  static styles = T => [
    {
      main: {
        flex: 1,
        backgroundColor: '#EAEAEA',
      },
      header: {
        backgroundColor: '#da4237',
        flexDirection: 'row',
        padding: 15,
      },
      messageText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff',
        marginLeft: 16,
        paddingTop: 2,
      },
    }
  ];
}