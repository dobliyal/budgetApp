import { useNavigation,useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native";


const Payment = () => {
  const navigation = useNavigation();
  const route=useRoute();
  const { savings } =route.params as {savings: number };
  return (
    <View style={{ flex: 1}}>
      <Pressable onPress={() => navigation.goBack()} style={{ flex: 1 }}>
        <View />
      </Pressable>
      <BlurView
        experimentalBlurMethod="dimezisBlurView"
        intensity={90}
        tint="light"
        style={{
          height: "40%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          elevation: 8,
          shadowColor: "#000",
          shadowRadius: 8,
          shadowOpacity: 0.15,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{ color: "#007AFF", fontSize: 17 }}>Cancel</Text>
          </Pressable>
        </View>
        <View style={{ gap: 10, paddingTop: 16 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Lifetime savings
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 32,
              fontWeight: "900",
              marginTop: 16,
              color: savings>0?'#2e8b57':'#ff4500',
            }}
          >
            ${savings.toFixed(2)}
          </Text>
          <Text style={{ textAlign: "center" }}>
            Keep a detailed record of your daily spending to gain better control
            over your finances.{" "}
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 10,
              marginTop: 16,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 17,
                color: "white",
                textAlign: "center",
              }}
            >
              Get premium
            </Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{ color: "gray", fontSize: 17, textAlign: "center" }}>
              Maybe later
            </Text>
          </Pressable>
        </View>
      </BlurView>
    </View>
  );
};

export default Payment;
