import PocketBase from 'pocketbase' ;
import type { JeuxResponse, SectionResponse, TournoisResponse } from './pocketbase-types'
export const pb = new PocketBase('http://127.0.0.1:8090') ;



export async function ListJeux() {
const records = await pb.collection('Jeux').getFullList<JeuxResponse>();
return records ;
}

export async function ListJeux_sans() {
const records = await pb.collection('Jeux').getFullList<JeuxResponse>();
  const filteredRecords = records.filter((record) => record.id !== 'igcxxx4h35y3vgq');
  return filteredRecords;
}

export async function ListTournois() {
const records = await pb.collection('Tournois').getFullList<TournoisResponse>();
return records ;
}

export async function ListSection() {
const records = await pb.collection('Section').getFullList<SectionResponse>();
return records ;
}
