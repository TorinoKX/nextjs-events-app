import EventItem from "./EventItem";

import styles from "./EventList.module.css"

function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
