import { ReactNode } from 'react';

import classes from './event-content.module.css';

function EventContent(props: Props) {
    return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;

// ############# Type ###############
type Props = {
    children: ReactNode;
};
