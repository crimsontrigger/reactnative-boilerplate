import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../constants';

import {AppStack} from './app.navigation';

const Navigation = (props) => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const Stack = createStackNavigator();

  const navTheme = DefaultTheme;
  navTheme.colors.background = colors.BACKGROUND_COLOR;

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
