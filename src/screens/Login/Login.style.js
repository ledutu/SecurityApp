import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        padding: Metrics.paddingContent * 3,
        flex: 1,
    },
    text: {
        textDecorationLine: 'underline',
        color: Colors.mainLight,
        ...ApplicationStyles.mt20,
        
    }
});

export default styles;