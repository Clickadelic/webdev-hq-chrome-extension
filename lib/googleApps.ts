import googleAccountIcon from "@/assets/icons/google-apps/google-account.svg"
import googleAlertsIcon from "@/assets/icons/google-apps/google-alerts.svg"
import googleCalendarIcon from "@/assets/icons/google-apps/google-calendar.svg"
import googleCloudIcon from "@/assets/icons/google-apps/google-cloud.svg"
import googleContactsIcon from "@/assets/icons/google-apps/google-contacts.svg"
import googleDevelopersIcon from "@/assets/icons/google-apps/google-developers.svg"
import googleDnsToolsIcon from "@/assets/icons/google-apps/google-dns-tools.svg"
import googleDocsIcon from "@/assets/icons/google-apps/google-docs.svg"
import googleDriveIcon from "@/assets/icons/google-apps/google-drive.svg"
import googleGMailIcon from "@/assets/icons/google-apps/google-gmail.svg"
import googleSheetsIcon from "@/assets/icons/google-apps/google-sheets.svg"
import googleMapsIcon from "@/assets/icons/google-apps/google-maps.svg"
import googleSearchIcon from "@/assets/icons/google-apps/google-logo.svg"
import googlePasswordsIcon from "@/assets/icons/google-apps/google-password.svg"
import googleSearchConsoleIcon from "@/assets/icons/google-apps/google-search-console.svg"
import googleSlidesIcon from "@/assets/icons/google-apps/google-slides.svg"
import googleTranslateIcon from "@/assets/icons/google-apps/google-translate.svg"
import youTubeIcon from "@/assets/icons/video-platforms/youtube-color-icon.svg"

export const googleApps = [
	{
		id: crypto.randomUUID(),
		name: "YouTube",
		icon: youTubeIcon,
		url: "https://www.youtube.com"
	},
	{
		id: crypto.randomUUID(),
		name: "G-Mail",
		icon: googleGMailIcon,
		url: "https://mail.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Drive",
		icon: googleDriveIcon,
		url: "https://drive.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Account",
		icon: googleAccountIcon,
		url: "https://myaccount.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Contacts",
		icon: googleContactsIcon,
		url: "https://contacts.google.com"
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
		name: "Slides",
		icon: googleSlidesIcon,
		url: "https://docs.google.com/presentation/u/0/?ec=wgc-slides-[module]-goto"
	},
	{
		id: crypto.randomUUID(),
		name: "Translate",
		icon: googleTranslateIcon,
		url: "https://translate.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Search",
		icon: googleSearchIcon,
		url: "https://www.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Alerts",
		icon: googleAlertsIcon,
		url: "https://alerts.google.com"
	},
	{
		id: crypto.randomUUID(),
		name: "Maps",
		icon: googleMapsIcon,
		url: "https://www.google.com/maps"
	},
	{
		id: crypto.randomUUID(),
		name: "Passwords",
		icon: googlePasswordsIcon,
		url: "https://passwords.google.com/?pli=1"
	},
	{
		id: crypto.randomUUID(),
		name: "Cloud",
		icon: googleCloudIcon,
		url: "https://cloud.google.com"
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
		url: "https://toolbox.googleapps.com/apps/dig/"
	},
	{
		id: crypto.randomUUID(),
		name: "Console",
		icon: googleSearchConsoleIcon,
		url: "https://search.google.com/search-console"
	}
]
