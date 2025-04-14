import googleAccountIcon from "@/assets/icons/google-apps/google-account.svg"
import googleAlertsIcon from "@/assets/icons/google-apps/google-alerts.svg"
import googleCalendarIcon from "@/assets/icons/google-apps/google-calendar.svg"
import googleCloudIcon from "@/assets/icons/google-apps/google-cloud.svg"
import googleContactsIcon from "@/assets/icons/google-apps/google-contacts.svg"
import googleDevelopersIcon from "@/assets/icons/google-apps/google-developers.svg"
import googleDnsToolsIcon from "@/assets/icons/google-apps/google-dns-tools.svg"

import youTubeIcon from "@/assets/icons/video-platforms/youtube-color-icon.svg"
import googleIcon from "@/assets/icons/google-apps/google-logo.svg"
import googleDocsIcon from "@/assets/icons/google-apps/google-docs.svg"
import googleSheetsIcon from "@/assets/icons/google-apps/google-sheets.svg"
import googleMapsIcon from "@/assets/icons/google-apps/google-maps.svg"

export const apps = [
	{
		id: crypto.randomUUID(),
		name: "YouTube",
		icon: youTubeIcon,
		url: "https://www.youtube.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Google",
		icon: googleIcon,
		url: "https://www.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Calendar",
		icon: googleCalendarIcon,
		url: "https://www.google.com/calendar"
	},
	{
		id: crypto.randomUUID(),
		name: "Docs",
		icon: googleDocsIcon,
		url: "https://docs.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Sheets",
		icon: googleSheetsIcon,
		url: "https://docs.google.com/spreadsheets"
	},
	{
		id: crypto.randomUUID(),
		name: "Maps",
		icon: googleMapsIcon,
		url: "https://www.google.com/maps"
	},
	{
		id: crypto.randomUUID(),
		name: "Account",
		icon: googleAccountIcon,
		url: "https://myaccount.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Alerts",
		icon: googleAlertsIcon,
		url: "https://alerts.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Cloud",
		icon: googleCloudIcon,
		url: "https://cloud.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Contacts",
		icon: googleContactsIcon,
		url: "https://contacts.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Developers",
		icon: googleDevelopersIcon,
		url: "https://developers.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "DNS",
		icon: googleDnsToolsIcon,
		url: "https://dns.google.com"
	}
]
