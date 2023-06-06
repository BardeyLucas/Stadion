/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Jeux = "Jeux",
	Joueur = "Joueur",
	Section = "Section",
	Tournois = "Tournois",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type JeuxRecord = {
	Game?: string
	Explication?: string
	image_main?: string
	image_tournament?: string
	image_hero?: string
}

export type JoueurRecord = {
	Pseudo?: string
	pdp?: string
	Email?: string
	Phone?: number
	Mdp?: string
	region?: string
	Bio?: string
	naissance?: IsoDateString
	first_name?: string
	name?: string
	point_LL?: number
	rank_LL?: number
	point_SB?: number
	rank_SB?: number
	point_VA?: number
	rank_VA?: number
	point_SF?: number
	rank_SF?: number
	point_OV?: number
	rank_OV?: number
}

export type SectionRecord = {
	jeux?: string
	mode_jeux?: string
	mode_affrontement?: string
	localisation?: string
	regles?: string
	tarif?: string
	date_lancement?: IsoDateString
	inscrit?: number
	emplacement?: number
}

export type TournoisRecord = {
	name?: string
	Fin_Inscription?: IsoDateString
	Sections?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type JeuxResponse<Texpand = unknown> = Required<JeuxRecord> & BaseSystemFields<Texpand>
export type JoueurResponse = Required<JoueurRecord> & BaseSystemFields
export type SectionResponse = Required<SectionRecord> & BaseSystemFields
export type TournoisResponse<Texpand = unknown> = Required<TournoisRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Jeux: JeuxRecord
	Joueur: JoueurRecord
	Section: SectionRecord
	Tournois: TournoisRecord
}

export type CollectionResponses = {
	Jeux: JeuxResponse
	Joueur: JoueurResponse
	Section: SectionResponse
	Tournois: TournoisResponse
}