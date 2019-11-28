import React from 'react';

class SearchForm extends React.Component {
    state = {  }
    render() { 
        return ( 
            <input 
                placeholder="Search..." 
                name="query"
                className="form-control my-3" 
                onChange={e => this.props.onChange(e.currentTarget.value)} 
                style={{ marginBottom: '20px' }}
                value={this.props.value}
            /> 
        );
    }
}
 
export default SearchForm;