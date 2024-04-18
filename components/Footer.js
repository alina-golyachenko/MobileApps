import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Голяченко Аліна Анатоліївна, ІПЗ-20-2
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: { fontStyle: "italic" },
  footer: {
    alignItems: "center",
  },
});

export default Footer;
