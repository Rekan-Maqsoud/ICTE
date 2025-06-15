import { Stack } from "expo-router";
import { AuthProvider } from "./AuthContext";
import {Provider as PaperProvider} from 'react-native-paper'
export default function RootLayout() {
  return (
    <PaperProvider>
    <AuthProvider>
        <Stack screenOptions={{headerShown: false}}/>
    </AuthProvider>
    </PaperProvider>
  );
}
