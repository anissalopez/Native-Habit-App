// import { Tabs } from 'expo-router';
// import React from 'react';

// import { TabBarIcon } from '@/components/navigation/TabBarIcon';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { View, Text } from 'react-native';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <View>
//       <Text>Hello</Text>
//     <Text>Hello</Text>
//     </View>




//     //   screenOptions={{
//     //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//     //     headerShown: false,
//     //   }}>
//     //   <Tabs.Screen
//     //     name="index"
//     //     options={{
//     //       title: 'Home',
//     //       tabBarIcon: ({ color, focused }) => (
//     //         <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//     //       ),
//     //     }}
//     //   />
//     //   <Tabs.Screen
//     //     name="explore"
//     //     options={{
//     //       title: 'Explore',
//     //       tabBarIcon: ({ color, focused }) => (
//     //         <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//     //       ),
//     //     }}
//     //   />
//     // </Tabs>
//   );
// }

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../components/lib/supabase'
import Auth from '../../components/Auth'
// import Account from './components/Account'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function TabLayout() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
    
      <Auth /> 
      {session && session.user && <Text>{session.user.id}</Text>}
    </View>
  )
}
