import { useEffect, useState } from "react";
import { formatIsoDate } from "@/lib/utils";
// import { format } from "date-fns";
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
    <>
      {error && <p>{error}</p>}
      {event ? (
        <p className="text-white text-4xl font-light dark:text-slate-100 text-shadow-lg">{chrome.i18n.getMessage("next_appointment", "Next appointment")}: {event.summary} –{" "}
          <a href={event.htmlLink} className="hover:underline" target="_self" title={event.summary}>{formatIsoDate(event.start.date)}</a>
        </p>
      ) : (
        <p className="text-white text-4xl font-light dark:text-slate-100 text-shadow-lg">{chrome.i18n.getMessage("no_appointment_found", "No appointment found")}</p>
      )}
    </>
  );
}
