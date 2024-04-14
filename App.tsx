import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrendyGIFs from './src/screens/TrendyGIFs';
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style="auto" backgroundColor='#B3ECEC'/>
       <QueryClientProvider client={queryClient} >

      <TrendyGIFs/>
       </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
