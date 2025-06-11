import { Stack } from "expo-router";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext, useEffect } from "react";
import { CheckLoginStates } from "@/assets/appwritedb";

function LayoutContent() {
  const { LoggedIn } = useContext(AuthContext);
  const { setLoggedIn } = useContext(AuthContext);
  useEffect(()=>{
    init()
  }, [])
  const init = async() => {
    const result = await CheckLoginStates();
    if(result){
      setLoggedIn(true)
    }
  }
  return (
    <Stack key={LoggedIn ? 'logged-in' : 'logged-out'}>
      {LoggedIn ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutContent />
    </AuthProvider>
  );
}
