import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import * as Notifications from 'expo-notifications'

import Routes from './src/routes'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PlantProps } from './src/libs/storege'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps
    //     console.log(data)
    //   }
    // )
    // return () => subscription.remove()
    async function notification() {
      //await Notifications.cancelAllScheduledNotificationsAsync()
      await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
          allowDisplayInCarPlay: true,
          allowProvisional: true,
        },
      })
      await Notifications.getAllScheduledNotificationsAsync()
      // const data = await Notifications.getAllScheduledNotificationsAsync()
      // const settings = await Notifications.getPermissionsAsync()
      // console.log(settings)
      // console.log('###### Notificações Agendandas ####')
      // console.log(data)
    }
    notification()
  }, [])

  if (!fontsLoaded) return <AppLoading />

  return <Routes />
}
