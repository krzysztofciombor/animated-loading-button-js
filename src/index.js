import React from "react";
import { StyleSheet, View } from "react-native";

import AnimatedLoadingButton from "src/AnimatedLoadingButton";
import BrandedButton from "src/CTAButton";
import BrandedLoadingIndicator from "src/LoadingIndicator";

export default class App extends React.Component {
  state = {
    isLoading: false
  };

  onButtonPress = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 3000);
  };

  renderButton = () => {
    return <BrandedButton onPress={this.onButtonPress} />;
  };

  renderLoading = () => {
    return <BrandedLoadingIndicator />;
  };

  render() {
    return (
      <View style={styles.container}>
        <AnimatedLoadingButton
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
