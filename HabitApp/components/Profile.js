import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from 'react-native-elements'

export default function Profile({ session }) {

    return(
        <View>
            {
                session && 
                session.user && 
                <Text>{session.user.id}</Text>
            }
        </View>
    );
}
