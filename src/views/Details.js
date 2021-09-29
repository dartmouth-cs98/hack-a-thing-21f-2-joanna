import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

class DetailsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const product = navigation.getParam('product');
        return (
            <View>
                <Card>
                    <View>
                        <Image
                            source={{uri: product.img}}
                            style={{
                                height: 150,
                                width: 300
                            }}
                        />
                    </View>
                    <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                        {product.name}
                    </Text>
                    <Text h4>
                        $ {product.price}
                    </Text>
                    <Text h4 style={{marginBottom: 10, marginTop: 10 }}>
                        {product.description}
                    </Text>
                </Card>
            </View>
        );
    }
}

export default DetailsScreen;