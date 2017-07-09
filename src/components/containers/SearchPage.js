//Search page container
import React from 'react';
import PropTypes from 'prop-types';
import SearchWidget from '../common/SearchWidget';
import CardList from './CardList';
import PagingWidget from '../common/PagingWidget';
import CardView from '../common/CardView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SearchPage = () => {
    return (
        <div className="searchPageContainer">
            <div className="searchWidgetContainer">
                <MuiThemeProvider>
                    <SearchWidget />
                </MuiThemeProvider>
            </div>
            <div className="resultsContainer">
                <div className="cardsContainer">
                    <CardList />
                </div>
                <div className="cardViewContainer">
                    <MuiThemeProvider>
                        <CardView />
                    </MuiThemeProvider>
                </div>
            </div>
            <div className="pagingContainer">
                <PagingWidget />
            </div>
        </div>
    );
};
export default SearchPage;