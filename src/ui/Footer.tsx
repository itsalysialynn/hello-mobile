import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import DeviceInfo from 'react-native-device-info';

const Footer = () => {
  const appVersion = DeviceInfo.getVersion();
  const buildNumber = DeviceInfo.getBuildNumber();

  const handleCopyVersion = () => {
    const versionInfo = `App Version: ${appVersion} (Build ${buildNumber})`;
    Clipboard.setString(versionInfo);
    Alert.alert('Copied!', 'Version info copied to clipboard.');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleCopyVersion}>
        <Text style={styles.versionText}>
          v{appVersion} (Build {buildNumber})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default Footer;
