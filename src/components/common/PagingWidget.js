//Paging implementation Search field and button
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as pagingActions from "../../actions/pagingActions";
import { bindActionCreators } from "redux";

class RaisedButtonExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleUpdateInputNext = this.handleUpdateInputNext.bind(this);
    this.handleUpdateInputPrevious = this.handleUpdateInputPrevious.bind(this);
  }

  handleUpdateInput(e) {
    e.preventDefault();
    this.props.actions.loadPagingNew(
      this.props.paging.key,
      parseInt(e.target.dataset.key)
    );
  }

  handleUpdateInputNext(e) {
    e.preventDefault();
    let currentPage = this.props.paging.current;
    let pagesMax = this.props.paging.data.length;
    if (currentPage === pagesMax - 1) return;
    this.props.actions.loadPagingNew(this.props.paging.key, currentPage + 1);
  }

  handleUpdateInputPrevious(e) {
    e.preventDefault();
    let currentPage = this.props.paging.current;
    if (currentPage === 0) return;
    this.props.actions.loadPagingNew(this.props.paging.key, currentPage - 1);
  }

  render() {
    let {
      paging,
    } = this.props;
    return (
      <div>
        {paging.data.length > 1 &&
          <div className="pagination">
            <a
              href="#"
              onClick={this.handleUpdateInputPrevious}
            >
              &laquo;
            </a>
            {paging.data.map(page =>
              <a
                key={page.id}
                data-key={page.id}
                className={page.active ? "active" : ""}
                onClick={this.handleUpdateInput}
                href="#"
              >
                {page.id + 1}
              </a>
            )}
            <a
              href="#"
              onClick={this.handleUpdateInputNext}
            >
              &raquo;
            </a>
          </div>}
      </div>
    );
  }
}

RaisedButtonExampleSimple.propTypes = {
  paging: PropTypes.object.isRequired,
  handleUpdateInput: PropTypes.func,
  handleUpdateInputPrevious: PropTypes.func,
  handleUpdateInputNext: PropTypes.func
};

function mapStateToProps (state, ownProps) {
  return { paging: state.paging };
}

function mapDispatchToProps (dispatch, ownProps)  {
  return {
    actions: bindActionCreators(pagingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RaisedButtonExampleSimple
);
