import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationProp, StackNavigationState, useNavigation } from '@react-navigation/native';
import onboard1 from '../../Assets/onboard1';
import Onboard2 from '../../Assets/onboard2';
import Onboard3 from '../../Assets/onboard3';
import styles from './styleOnboard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from './Utils/types';
const { width } = Dimensions.get('window');

const slides = [onboard1, Onboard2, Onboard3];



const ScreenOnboard: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CurrentSlide = slides[currentSlideIndex];

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <CurrentSlide width={width} height={500} />
        </View>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.heading}>
  Track your income, because {'\n'} 
  every penny <Text style={styles.orangeText}>counts.</Text>
</Text>
<Text style={styles.paragraph}>
  With our income tracker, you can effortlessly{'\n'} 
   manage and monitor your earnings
</Text>

      </View>
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlideIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOnboard;
