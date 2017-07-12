//Search field and button
import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import AutoComplete from "material-ui/AutoComplete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadKeys } from "../../actions/keyActions";
import { loadCurrentCard } from "../../actions/currentCardActions";

const style = {
  margin: 12
};

class AutoCompleteExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleSearch() {
    this.props.dispatch(loadCurrentCard(this.props.cards));
  }

  handleUpdateInput(value) {
    this.props.dispatch(loadKeys(value));
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type keyword!"
          dataSource={this.props.keys}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Worker name"
          filter={AutoComplete.caseInsensitiveFilter}
        />
        <RaisedButton
          label="Search"
          primary={true}
          style={style}
          onClick={this.handleSearch}
        />
      </div>
    );
  }
}

AutoCompleteExampleSimple.propTypes = {
  keys: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return { keys: state.keys, cards: state.cards };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps)(AutoCompleteExampleSimple);
