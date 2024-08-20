import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { styles } from './paymentStyle';

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { savings } = route.params as { savings: number };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.pressableArea}>
        <View />
      </Pressable>
      <BlurView
        experimentalBlurMethod="dimezisBlurView"
        intensity={90}
        tint="light"
        style={styles.blurView}
      >
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleText}>Lifetime savings</Text>
          <Text style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: "900",
              marginTop: 16,
              color: savings>0?'#2e8b57':'#ff4500',
            }}>
            ${savings.toFixed(2)}
          </Text>
          <Text style={styles.infoText}>
            Keep a detailed record of your daily spending to gain better control
            over your finances.
          </Text>

          <TouchableOpacity activeOpacity={0.9} style={styles.premiumButton}>
            <Text style={styles.premiumButtonText}>Get premium</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.maybeLaterText}>Maybe later</Text>
          </Pressable>
        </View>
      </BlurView>
    </View>
  );
};

export default Payment;
