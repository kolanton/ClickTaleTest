//Container of cards in the list results
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CardList = ({ cards }) => (
    <div className="cardsList">       
            {cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
    </div>
);

CardList.propTypes = {
    cards: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);
