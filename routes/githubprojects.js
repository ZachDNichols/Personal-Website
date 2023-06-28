const express = require('express');
const octo = require('@octokit/rest')
const {Octokit} = require("octokit");
const router = express.Router();
const octokit = new Octokit();

router.get('/', async (req, res) => {
    res.status(200).json(
        await GetGithubProjects()
    );
});

module.exports = router;

async function GetGithubProjects()
{
    const { data } = (await octokit.request('GET /users/ZachDNichols/repos', {
        username: 'USER',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }));

    return data;
}