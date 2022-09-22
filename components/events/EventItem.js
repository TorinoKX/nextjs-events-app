import Link from "next/link";

function EventItem(props) {
  const readableDate = new Date(props.date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = props.location.replace(", ", "\n");

  const exploreLink = `/events/${props.id}`;

  return (
    <li>
      <img src={"/" + props.image} alt={props.title} />
      <div>
        <div>
          <h2>{props.title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
