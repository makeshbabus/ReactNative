import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import User from './User.js'
import Profile from './Profile.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
      	<Scene key = "user" component = {User} hideNavBar={true} initial = {true} />
         <Scene key = "profile" component = {Profile} hideNavBar={true}  />        
      </Scene>
   </Router>
)
export default Routes