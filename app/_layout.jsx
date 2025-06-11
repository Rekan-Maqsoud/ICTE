import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const[LoggedIn, setLoggedIn ] = useState(false)
  return (
  <Stack>
    {LoggedIn ? <Stack.Screen 
    name="(tabs)"
    options={{headerShown: false}}
    /> : <Stack.Screen 
    name="(auth)"
    options={{headerShown: false}}
    />}
    </Stack>
    )
  ;
}
