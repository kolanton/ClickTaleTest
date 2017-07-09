//Paging implementation
//Search field and button
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadPagingNew } from '../../actions/pagingActions';

const RaisedButtonExampleSimple = ({ paging, handleUpdateInput, handleUpdateInputPrevious, handleUpdateInputNext }) => (

    <div>
        {
            paging.length > 1 &&
            <div
                className="pagination"
            >
                <a href="#"
                    onClick={handleUpdateInputPrevious}
                    data-keyword={paging[0].key}
                    data-active={paging[0].active}
                    data-max={paging.length}
                >&laquo;</a>
                {paging.map(page => (
                    <a
                        data-keyword={page.key}
                        data-active={page.active}
                        key={page.id}
                        data-id={page.id}
                        className={(page.active === page.id) ? "active" : ""}
                        onClick={handleUpdateInput}
                        href="#"
                    >
                        {page.id + 1}
                    </a>
                ))}
                <a href="#"
                    onClick={handleUpdateInputNext}
                    data-keyword={paging[0].key}
                    data-active={paging[0].active}
                    data-max={paging.length}
                >&raquo;</a>
            </div>

        }
    </div>
);

RaisedButtonExampleSimple.propTypes = {
    paging: PropTypes.array.isRequired,
    handleUpdateInput: PropTypes.func,
    handleUpdateInputPrevious: PropTypes.func,
    handleUpdateInputNext: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    return {
        paging: state.paging
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleUpdateInput: (e) => {
            e.preventDefault();
            dispatch(loadPagingNew(e.target.dataset.keyword, parseInt(e.target.dataset.id)));
        },
        handleUpdateInputNext: (e) => {
            e.preventDefault();
            let currentPage = parseInt(e.target.dataset.active);
            let pagesMax = parseInt(e.target.dataset.max);
            if (currentPage === pagesMax - 1) return;
            dispatch(loadPagingNew(e.target.dataset.keyword, currentPage + 1));
        },
        handleUpdateInputPrevious: (e) => {
           e.preventDefault();
            let currentPage = parseInt(e.target.dataset.active);
            if (currentPage === 0) return;
            dispatch(loadPagingNew(e.target.dataset.keyword, currentPage - 1));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaisedButtonExampleSimple);