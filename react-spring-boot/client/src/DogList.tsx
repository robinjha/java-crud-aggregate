import * as React from 'react';
import GiphyImage from './GiphyImage';

interface Dog {
    id: number;
    name: string;
}

interface DogListProps {

}

interface DogListState {
    dogs: Array<Dog>;
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

    render() {
        const {dogs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h2>Dog List</h2>
                {dogs.map((dog: Dog) =>
                    <div key={dog.id}>
                        {dog.name}<br/>
                        <GiphyImage name={dog.name}/>
                    </div>

                )}
            </div>
        );
    }

}

export default DogList;
