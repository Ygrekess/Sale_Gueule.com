import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import UserAccountMenu from './user_account/UserAccountMenu';
import '../4-css/User_Account.css'
import { Route } from 'react-router-dom';
import User_Infos from './user_account/User_Infos';
import User_Shipping from './user_account/User_Shipping';
import User_Orders from './user_account/User_Orders';
import User_OrderDetails from './user_account/User_OrderDetails';

export default function User_Account(props) {

	const userLogin = useSelector(state => state.userLogin)
	const { userInfos } = userLogin;

	useEffect(() => {
		if (!userInfos) {
			props.history.push('/')
		}
		return () => {
		}
	}, [userInfos])
	return (
		<div className='user-account-page'>
			<UserAccountMenu/>
			<Route path='/mon-compte/infos' component={User_Infos}></Route>
			<Route path='/mon-compte/adresse' component={User_Shipping}></Route>
			<Route path='/mon-compte/commandes' exact component={User_Orders}></Route>
			<Route path='/mon-compte/commandes/:id' component={User_OrderDetails}></Route>
		</div>
	)
}
