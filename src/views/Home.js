import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';

const BASE_URI = "https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist"
const products = [
    {
      name: 'Khaki Suede Polish Work Boots',
      price: 149.99,
      img: `${BASE_URI}/shoe1.png`,
      description: 'Some description about these boots. Wow these are some nice boots. You should buy it. Information about size and material.'
    },
    {
      name: 'Camo Fang Backpack Jungle',
      price: 39.99,
      img: `${BASE_URI}/jacket1.png`,
      description: 'Some description about this jacket. Wow this is a nice jacket. You should buy it. Information about size and material.'
    },
    {
      name: 'Parka and Quilted Liner Jacket',
      price: 49.99,
      img: `${BASE_URI}/jacket2.png`,
      description: 'Some description about this jacket. Wow this is a nice jacket. You should buy it. Information about size and material.'
    },
    {
      name: 'Cotton Black Cap',
      price: 12.99,
      img: `${BASE_URI}/hat1.png`,
      description: 'Some description about this hat. Wow this is a nice hat. You should buy it. Information about size and material.'
    },
];
  

class HomeScreen extends React.Component {
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render() {
        return (
            <ScrollView
                style={{
                    flexGrow: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
            {    
                products.map((product, index) => {
                    return (
                        <View style={styles.row} key={index}>
                            <View style={styles.col}>
                                <Product product={product}/>
                            </View>
                        </View>
                    )
                })
            }    
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    col: {
        flex: 1
    }
})

export default withNavigation(HomeScreen);