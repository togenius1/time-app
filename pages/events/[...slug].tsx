import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/results-title/results-title';
import Button from '@/components/ui/button';
import { getFilteredEvents } from '@/dummy-data';
import ErrorAlert from '@/components/ui/error-alert';

function FilteredEventPage() {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className='center'>Loading...</p>;
    }

    const numYear = Number(filterData[0]);
    const numMonth = Number(filterData[1]);

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2020 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
                <style jsx>
                    {`
                        .center {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `}
                </style>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents?.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
                <style jsx>
                    {`
                        .center {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    `}
                </style>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    );
}

export default FilteredEventPage;
