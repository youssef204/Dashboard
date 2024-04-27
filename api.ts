import { cache } from "react";
import { IServer } from "./types/server";

const baseURL = 'http://localhost:3001';

export const getAllServers = async (): Promise<IServer[]> => {
    const res = await fetch (`${baseURL}/servers` , {cache: 'no-store'});
    const servers = await res.json();
    return servers;
}