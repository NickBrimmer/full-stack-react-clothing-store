import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './shop.scss';

import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// match, location and history objects automantically
// passed down as a prop from app with Route

class ShopPage extends Component {

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewComponent} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }

};



export default ShopPage;
