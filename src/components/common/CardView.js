//Expanded card view
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = ({ currentCards }) => (
    <div>  
        {           
            currentCards.map(card => (
                <Card key="1">
                    <CardHeader
                        title={card.first_name}
                        subtitle={card.job_title}
                        avatar={card.avatar}
                    />
                    <CardMedia
                        overlay={<CardTitle title={card.first_name + ' ' + card.last_name} subtitle={card.job_title} />}
                    >
                        <img src={card.avatar} alt={card.first_name + ' ' + card.last_name} />
                    </CardMedia>
                    <CardText>
                        {card.description}
                    </CardText>
                </Card>
            ))
        }
    </div>

);

const mapStateToProps = (state, ownProps) => {
    return {
        currentCards: state.currentCards
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};

CardExampleWithAvatar.propTypes = {
    currentCards: PropTypes.array.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardExampleWithAvatar);