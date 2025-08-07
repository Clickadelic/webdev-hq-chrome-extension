import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CreditInfo = {
	author: string
	authorUrl: string
	unsplashUrl: string
}

type ImageStore = {
	imageUrl: string | null
	credit: CreditInfo | null
	setImage: (url: string, credit: CreditInfo) => void
	resetImage: () => void
}

export const useImageStore = create<ImageStore>()(
	persist(
		(set, get) => ({
			imageUrl: null,
			credit: null,
			setImage: (url, credit) =>
				set(() => ({
					imageUrl: url,
					credit
				})),
			resetImage: () =>
				set(() => ({
					imageUrl: null,
					credit: null
				}))
		}),
		{
			name: "wdhq-image-store"
		}
	)
)
