import React from "react";
import { NoteItem } from './index'
import { getNoteItemProps } from "../utils";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchKey: '',
      searchData: []
    }
  }

  _onChangeHandlerSearchBar = (event) => {
    this.setState(() => {
      return {
        searchKey: event.target.value
      }
    });
  };

  _onSubmitHandler = (event) => {
    event.preventDefault();
    const { datas } = this.props;

    if (this.state.searchKey.trim() !== '') {
      const searchResult = datas.filter((note) => note.title.toLowerCase().includes(this.state.searchKey));

      this.setState(() => {
        return {
          searchData: searchResult
        }
      })
    } else {
      this.setState(() => {
        return {
          searchData: []
        }
      })
    }
  };

  render() {
    return (
      <div className="container note-search">
        <form onSubmit={this._onSubmitHandler}>
          <label htmlFor="searchBar">Cari</label>
          <input id='searchBar' type='text' value={this.searchKey} onChange={this._onChangeHandlerSearchBar}/>
          <button type='submit'>Cari</button>
        </form>
        {this.state.searchData.map((data) => <NoteItem
            key={data.id}
            {...getNoteItemProps(data)}
          />)}
      </div>
    )
  }
}

export default NoteSearch;
