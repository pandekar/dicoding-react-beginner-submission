import React from "react";
import PropTypes from 'prop-types';

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
      <div className="card container note-search">
        <form onSubmit={this._onSubmitHandler}>
          <input id='searchBar'
            className="card"
            type='text'
            value={this.searchKey}
            onChange={this._onChangeHandlerSearchBar}
            placeholder="masukan judul..."
          />
          <button id="searchBarButton" type='submit'>Cari</button>
        </form>
        {this.state.searchData.map((data) => <NoteItem
            key={data.id}
            {...getNoteItemProps(data)}
          />)}
      </div>
    )
  }
}

NoteSearch.propTypes = {
  datas: PropTypes.array
};

export default NoteSearch;
