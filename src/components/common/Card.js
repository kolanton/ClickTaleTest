//single card representation in list
import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange(expanded) {
        this.setState({ expanded: expanded });
    }

    handleToggle(event, toggle) {
        this.setState({ expanded: toggle });
    }

    handleExpand() {
        this.setState({ expanded: true });
    }

    handleReduce() {
        this.setState({ expanded: false });
    }

    render() {
        let card = this.props.card;
        return (
            <MuiThemeProvider>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                    <CardHeader
                        title={card.first_name + ' ' + card.last_name}
                        subtitle={
                            <div>
                                <p>{card.job_title}</p>
                                <p>{card.gender},{card.email}</p>
                                <a href={card.link} target="_blank">Link to Website</a>
                            </div>
                        }
                        avatar={card.avatar}
                    />
                    <CardTitle title={card.fullName} subtitle={card.job_title} expandable={true} />

                </Card>
            </MuiThemeProvider>
        );
    }
}