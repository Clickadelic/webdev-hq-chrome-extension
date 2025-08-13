import { useEffect, useState } from "react";

export default function NextAppointment() {
  const [event, setEvent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    chrome.runtime.sendMessage(
      { action: "getNextCalendarEvent" }, 
      (res) => {
        if (res?.error) {
          setError(res.error);
        } else {
          setEvent(res.event);
        }
      }
    );
  }, []);

  return (
    <div>
      {error && <p>Fehler: {error}</p>}
      {event ? (
        <p>
          Nächster Termin: {event.summary} –{" "}
          {event.start.dateTime || event.start.date}
        </p>
      ) : (
        <p>Keine Termine gefunden.</p>
      )}
    </div>
  );
}
