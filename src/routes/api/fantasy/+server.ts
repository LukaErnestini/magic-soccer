import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET = (async ({ url }) => {
	const managerId = Number(url.searchParams.get('manager') ?? '1');
	const weekNum = Number(url.searchParams.get('week') ?? '1');

	const response = await fetch(
		`https://fantasy.premierleague.com/api/entry/${managerId}/event/${weekNum}/picks/`
	);
	// console.log(`${managerId} fetched`);
	const data = await response.json();
	// console.log(data.entry_history.points);
	return json(data.entry_history.points);
}) satisfies RequestHandler;
