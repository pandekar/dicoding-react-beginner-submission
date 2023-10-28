import React from "react"

class NoteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKey: ''
    }
  }

  _onChangeHandlerSearchBar = (event) => {
    this.setState(() => {
      return {
        searchKey: event.target.value
      }
    });
  }

  _onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('searchKey', this.state.searchKey);
  }

  render() {
    return (
      <div className="container note-search">
        <form onSubmit={this._onSubmitHandler}>
          <label htmlFor="searchBar">Cari</label>
          <input id='searchBar' type='text' value={this.searchKey} onChange={this._onChangeHandlerSearchBar}/>
          <button type='submit'>Cari</button>
        </form>
      </div>
    )
  }
}

export default NoteSearch;
