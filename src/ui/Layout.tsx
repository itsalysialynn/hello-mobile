import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Footer from './Footer';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>{children}</View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Layout;
