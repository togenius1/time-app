import { ReactNode } from 'react';

import classes from './error-alert.module.css';

function ErrorAlert(props: Props) {
    return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;

type Props = {
    children: ReactNode;
};
