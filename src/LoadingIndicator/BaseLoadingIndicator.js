import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";

export default class BaseLoadingIndicator extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    spinnerColor: PropTypes.string
  };

  static defaultProps = {
    size: 40
  };

  render() {
    const { size, color, spinnerColor } = this.props;
    return (
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator color={spinnerColor} />
      </View>
    );
  }
}
