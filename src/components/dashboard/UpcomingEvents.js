import '../../Styles/index.css';

export default function UpcomingEvents() {
  return (
    <div className="upcoming">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=mnlbc4vk9vsouso942iti2geec%40group.calendar.google.com&ctz=America%2FMexico_City"
        style={{ border: "0" }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}