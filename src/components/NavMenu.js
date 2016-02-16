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
import NavMenuHeader from './NavMenuHeader'

import FinchReactCore from 'finch-react-core';
let {StyledComponent} = FinchReactCore;

export default class NavMenu extends StyledComponent {
  render() {
    return (
      <ScrollView bounces={false}>
        <NavMenuHeader {...this.props} />
        <NavButton
          onPress={() => {
            this.props.navigator.push({
              message: 'Swipe right to dismiss',
              sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
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
          onPress={() => {
            this.props.navigator.push({
              id: 'back',
              message: 'NavigationScene',
              sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump,
            });
          }}
          text="move forward"
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
