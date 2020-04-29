import React from 'react';
import SearchBox from './SearchBox';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images : [] };

    onSearch =  async (term) => {
        const response = await unsplash.get('/search/photos', {
            params : { query : term}
        }
        )
        this.setState({images : response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBox onSubmit={this.onSearch}/>
                <ImageList images = {this.state.images} />
            </div>
        );
    }
}

export default App;