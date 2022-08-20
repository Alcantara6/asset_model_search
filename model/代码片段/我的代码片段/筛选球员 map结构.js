// 筛选球员,不输入或匹配正确则返回true；因为中文字符，不使用正则
function filterPlayers() {
    // props：currentTeam异步传输，初始为undefiend
    // keyPlayer可能未定义
    // 因此需要判断
    if(this.currentTeam && Array.isArray(this.currentTeam.keyPlayers)) {
        let keyPlayers = this.currentTeam.keyPlayers;
        let result = [];
        for(let player of keyPlayers) {
            const searchMap = new Map([
                [player.name, this.searchName],
                [player.role, this.searchRole],
                [player.club, this.searchClub],
            ]);
            if([...searchMap].every(([p, s]) => s === '' || p.includes(s))) {
                result.push(player);
            }
        }
        return result;
    }
}