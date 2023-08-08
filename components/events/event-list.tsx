/* eslint-disable react/jsx-key */
import EventItem from './event-item';

import classes from './event-list.module.css';

function EventList(props: Props) {
    const { items } = props;

    return (
        <ul className={classes.list}>
            {items.map((event: any) => (
                <EventItem
                    key={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    id={event.id}
                />
            ))}
        </ul>
    );
}

export default EventList;

// ############# Type ################
type Props = {
    items: any;
};
