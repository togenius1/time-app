import { Fragment, ReactNode } from 'react';

import MainHeader from './main-header';

function Layout(props: Props) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
}
export default Layout;

//####################### Type #######################
type Props = {
    children: ReactNode;
};
