import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from 'react-native-elements'

export default function Profile() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
   
    return(
        <View>
            <Text>Profile</Text>
            <Text>{`This is the session ${session.user}`}</Text>
          
            {
                session && 
                session.user && 
                <Text>{session.user.id}</Text>
            }
        </View>
    );
}
