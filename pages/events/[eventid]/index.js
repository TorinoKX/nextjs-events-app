import { useRouter } from "next/router";
import { Fragment } from "react";

import EventSummary from "../../../components/eventDetail/eventSummary";
import EventLogistics from "../../../components/eventDetail/eventLogistics";
import EventContent from "../../../components/eventDetail/eventContent";
import ErrorAlert from "../../../components/ui/ErrorAlert";
import Button from "../../../components/ui/Button";

import { getEventById } from "../../../dummy-data";

function EventsDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventsDetailPage;
