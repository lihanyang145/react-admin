import React, { Component } from 'react';
import './user.less'
import PicturesWall  from '../../components/pictures-wall/pictures-wall'
import AddUpdateTree  from './add-update-tree'
class User extends Component {

    render() { 
        return ( 
            <div className="user">
                <PicturesWall />
                <AddUpdateTree/>

            </div>
         );
    }
}
 
export default User;