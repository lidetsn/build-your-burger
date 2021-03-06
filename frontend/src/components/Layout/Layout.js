import React ,{useState}from 'react';

import Aux from '../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Fotter'

const Layout = ( props ) => {

    const [showSideDrawer, setShowSideDrawer]=useState(false)

  

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
       
    }

   const sideDrawerToggleHandler = () => {
       setShowSideDrawer(!showSideDrawer)
        // this.setState( ( prevState ) => {
        //     return { showSideDrawer: !prevState.showSideDrawer };
        // } );
    }

    return(
    <Aux>
         <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer/>

    </Aux>
    )
}

export default Layout;