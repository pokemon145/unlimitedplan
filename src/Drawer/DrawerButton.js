import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';


const DrawerButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.openDrawer()}>
 <Ionicons name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} size={28}  />
  </TouchableOpacity>
);


DrawerButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DrawerButton;