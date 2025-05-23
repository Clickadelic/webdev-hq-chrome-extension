// src/store/imageStore.ts
import { create } from "zustand"

interface CreditsProps {
	author: string
	authorUrl: string
	unsplashUrl: string
}

interface ImageStore {
	imageUrl: string | null
	credit: CreditsProps | null
	setImage: (url: string, credit: CreditsProps) => void
}

export const useImageStore = create<ImageStore>(set => ({
	imageUrl: null,
	credit: null,
	setImage: (url, credit) => set({ imageUrl: url, credit })
}))
