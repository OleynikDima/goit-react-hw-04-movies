import React, { Component } from 'react'

export default class SearchForm extends Component {

    state={
        searchQeury:'',
    }

    handleChangeValue=(text)=>{   
        this.setState({searchQeury:text.target.value})
    }

    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.searchQeury);
        this.setState({searchQeury:''});
    }


    render (){
        const {searchQeury} = this.state
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                <input
                placeholder="search film"
                onChange={this.handleChangeValue}
                type="text"
                value={searchQeury}
                />
                <button type="submit">
                    Ok
                </button>
            </form>
            </>
        )
    }
}