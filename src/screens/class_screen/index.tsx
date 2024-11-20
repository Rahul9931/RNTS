import { Box, Button, Center, Text } from "native-base";
import React, { Component } from "react";

type AppState = {
    isHello:Boolean
}

class ClassScreen extends Component<{},AppState> {
    constructor(prop:{}){
        super(prop);
        this.state = {
            isHello:true
        };
    }

    toggleMessage = () => {
        this.setState({isHello:!this.state.isHello})
    }

    render() {

        return(
            <Box
             flex={1}
             justifyContent="center"
             alignItems="center"
             bg="lightBlue.10"
            >
                <Text fontSize="3xl">
                    {this.state.isHello?"Hello World":"Goodbye World"}

                </Text>
                <Button onPress={this.toggleMessage}>
                {this.state.isHello ? 'Say Goodbye' : 'Say Hello'}
                </Button>
        
            </Box>
        )
        
    }
}

export default ClassScreen;