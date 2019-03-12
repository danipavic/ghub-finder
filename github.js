class Github {
    constructor() {
        this.client_id ='ec6a2964ab17e828fc75';
        this.client_secret = '860534e017b8fc7566541e52025d3a20295f666b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos //repos: repos
        };
        
        
    }
}