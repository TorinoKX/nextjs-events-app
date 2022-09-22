import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <h1>Bruh</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
