import {
    getProgramKeys,
    getUser1Keys,
    getUser2Keys,
    getUser1Wallet,
    getUser2Wallet,
    get_file_content,
    try_to_pubkey
} from '../keyfile';
import { Keypair, PublicKey } from '@solana/web3.js';
import { assert } from 'chai';
import 'mocha';

describe("Keyfile testing", async () => {

    it('program match', async () => {
        const fetchedKey = await getProgramKeys(process.cwd())
        assert.equal(fetchedKey.publicKey.toBase58(), "SampGgdt3wioaoMZhC6LTSbg4pnuvQnSfJpDYeuXQBv")
    });
    it('user1 account match', async () => {
        const fetchedKey = await getUser1Keys(process.cwd())
        assert.equal(fetchedKey.publicKey.toBase58(), "A94wMjV54C8f8wn7zL8TxNCdNiGoq7XSN7vWGrtd4vwU")
    });
    it('user1 reference match', async () => {
        const fetchedKey = await try_to_pubkey("user1")
        assert.equal(fetchedKey.toBase58(), "A94wMjV54C8f8wn7zL8TxNCdNiGoq7XSN7vWGrtd4vwU")
    });
    it('user1 wallet match', async () => {
        const fetchedKey = await getUser1Wallet(process.cwd())
        assert.equal(fetchedKey.publicKey.toBase58(), "6VCCSs4MAR9uQLWciycYoCgh5WHcoLqUocksW61doCi2")
    });
    it('user2 account match', async () => {
        const fetchedKey = await getUser2Keys(process.cwd())
        assert.equal(fetchedKey.publicKey.toBase58(), "5gMsBeLmPkwEKQ1H2AwceAPasXLyZ4tvWGCYR59qf47U")
    });
    it('user2 reference match', async () => {
        const fetchedKey = await try_to_pubkey("user2")
        assert.equal(fetchedKey.toBase58(), "5gMsBeLmPkwEKQ1H2AwceAPasXLyZ4tvWGCYR59qf47U")
    });
    it('user2 wallet match', async () => {
        const fetchedKey = await getUser2Wallet(process.cwd())
        assert.equal(fetchedKey.publicKey.toBase58(), "6bLvSD61c6XFSz4fce72v92MGgekzEoR4gYoBhQU8hmC")
    });
    it('fail on unknown file', async () => {
        await get_file_content(process.cwd() + "keys/nothing.json")
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log("Unknown: ", err.path)
            })
    })
});