import * as React from 'react';
import GiphyImage from './GiphyImage';

interface Dog {
    id: number;
    name: string;
}

interface DogListProps {

}

interface DogListState {
    dogs: Dog[];
    isLoading: boolean;
}

class DogList extends React.Component<DogListProps, DogListState> {
    constructor(props: DogListProps) {
        super(props);

        this.state = {
            dogs: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/great-dogs')
            .then(response => response.json())
            .then(data => this.setState({dogs: data, isLoading: false}));
    }

}


