// Offline checks, no token needed. Live checks against a real guild: `npm run test:live`.
const assert = require('node:assert/strict');
const Discord = require('discord.js');

const allGet = /** @type {typeof import('./index')} */ (require('./index.js'));

/**
 * @param {Map<string, any>} cache
 * @param {(id: string) => any} [fetch]
 */
function manager(cache, fetch) {
	const calls = { fetch: 0 };
	return {
		calls,
		/** @type {any} */
		base: {
			cache,
			async fetch(/** @type {string} */ id) {
				calls.fetch++;
				if (!fetch) throw new Error('Unknown');
				return fetch(id);
			},
		},
	};
}

(async () => {
	// Garbage in, null out, never a throw.
	const junk = [
		[undefined, '1'],
		[null, '1'],
		[true, true],
		[false, false],
		['', 0],
		[{ lol: 'kek' }, ''],
		[{ lol: 'kek' }, { kek: 'lol' }],
		[{ lol: 'kek' }, '1'],
		[{ cache: new Map(), fetch: 'not a function' }, '1'],
	];
	for (const [name, fn] of Object.entries(allGet)) {
		for (const args of junk) {
			assert.equal(await /** @type {Function} */ (fn)(...args), null, `${name}(${args})`);
		}
	}

	// Cache hit skips the REST call.
	let m = manager(new Map([['1', 'cached']]));
	assert.equal(await allGet.getAnythingFrom(m.base, '1'), 'cached');
	assert.equal(m.calls.fetch, 0);

	// Cache miss falls back to fetch.
	m = manager(new Map(), (id) => `fetched ${id}`);
	assert.equal(await allGet.getAnythingFrom(m.base, '2'), 'fetched 2');
	assert.equal(m.calls.fetch, 1);

	// fetchOnly ignores the cache.
	m = manager(new Map([['1', 'cached']]), () => 'fetched');
	assert.equal(await allGet.getAnythingFrom(m.base, '1', true), 'fetched');

	// Failed fetch is null, not a rejection.
	m = manager(new Map());
	assert.equal(await allGet.getAnythingFrom(m.base, '3'), null);
	assert.equal(await allGet.baseFetchIfCan(m.base, '3'), null);

	// Typed getters filter by class.
	const guild = Object.create(Discord.Guild.prototype);
	const client = /** @type {any} */ ({ guilds: manager(new Map([['g', guild]])).base });
	assert.equal(await allGet.getGuild(client, 'g'), guild);
	assert.equal(await allGet.getUser(/** @type {any} */ ({ users: client.guilds }), 'g'), null);

	const role = Object.create(Discord.Role.prototype);
	const fakeGuild = /** @type {any} */ ({ roles: manager(new Map(), () => role).base });
	assert.equal(await allGet.guildGetRole(fakeGuild, 'r'), role);
	assert.equal(await allGet.guildGetMember(fakeGuild, 'r'), null);

	console.log(`ok: ${Object.keys(allGet).length} functions`);
})().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
