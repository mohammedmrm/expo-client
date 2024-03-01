import { Layout, Spinner } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const Loading = () => {
  return (
    <Layout style={styles.container}>
      <View style={styles.spinnerContainer}>
        <Spinner size="giant" />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], // Adjust position based on spinner size
  },
});

export default Loading;
