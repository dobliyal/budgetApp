import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { styles } from './addTransactionStyle';

const ScannerView = ({
  handleBarcodeScanned,
  setIsScannerActive,
}: {
  handleBarcodeScanned: ({ data }: { data: string }) => void;
  setIsScannerActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [facing, setFacing] = React.useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      >
        <View style={styles.overlay}>
          <TouchableOpacity
            onPress={() => setIsScannerActive(false)}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default ScannerView;
