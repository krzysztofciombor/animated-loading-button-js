import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import posed from "react-native-pose";

const buttonAnimConfig = {
  default: { scaleX: 1, opacity: 1 },
  loading: { scaleX: 0, opacity: 0 }
};

const loadingAnimConfig = {
  default: { opacity: 0, scaleX: 0, scaleY: 0 },
  loading: { opacity: 1, scaleX: 1, scaleY: 1 }
};

const ButtonWrapper = posed.View(buttonAnimConfig);

const LoadingWrapper = posed.View(loadingAnimConfig);

export default class AnimatedLoadingButton extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    renderButton: PropTypes.func.isRequired,
    renderLoading: PropTypes.func.isRequired
  };

  render() {
    const { isLoading, onPress, renderButton, renderLoading } = this.props;
    const animationState = isLoading ? "loading" : "default";
    return (
      <TouchableOpacity onPress={onPress} disabled={isLoading}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ButtonWrapper pose={animationState}>{renderButton()}</ButtonWrapper>
          <View style={{ position: "absolute" }}>
            <LoadingWrapper pose={animationState}>
              {renderLoading()}
            </LoadingWrapper>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
