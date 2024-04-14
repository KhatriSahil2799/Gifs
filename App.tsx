import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrendyGIFs from './src/screens/Gifs/TrendyGIFs';
import { QueryClient, QueryClientProvider} from 'react-query'
 import useThemeStore from './src/hooks/useThemeStore';
 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  const theme = useThemeStore((state)=> state?.theme)
  return (
    <View style={styles.container}>
       <StatusBar style="auto" backgroundColor={theme==='dark'?'#121212': '#B3ECEC' }/>
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
