import Link from 'next/link';
import React, { ReactNode } from 'react';

import classes from './button.module.css';

const Button = (props: Props) => {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        );
    }

    return (
        <button onClick={props.onClick} className={classes.btn}>
            {props.children}
        </button>
    );
};

export default Button;

// ############ Type ##############
type Props = {
    children: ReactNode;
    link: string;
    onClick: () => void;
};
