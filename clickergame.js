
        // model
        let model = {
        points: 0,
        pointsPerClick: 1,
        smileyIndex: 0,
        leaderboard: [],
        name: '',
        leaderboardOutput: '',
        tilfeldigTall: Math.random(),
        }


        // controller
        function doClick() {
            model.points += model.pointsPerClick;
            model.smileyIndex = getNextSmileyIndex(model.smileyIndex);
            updateView();
        }

        function buyUpgrade(upgradeCost) {
            if (model.points < upgradeCost) return;
            model.points -= upgradeCost;
            model.pointsPerClick++;
            updateView();
        }

        function buyUpgrade1(upgradeCost) {
            if (model.points < upgradeCost) return;
            model.points -= upgradeCost;
            model.pointsPerClick += 5;
            updateView();
        }

        function reset() {
            if (model.points < 0) return;
            model.points = 0;
            model.pointsPerClick = 1;
            model.smileyIndex = 0;
            updateView();
        }

        function random(upgradeCost) {
            if (model.points < upgradeCost) return;
            model.points -= upgradeCost;
            model.pointsPerClick = model.pointsPerClick +1 + Math.floor(Math.random() * 30);
            model.smileyIndex = 0;
            updateView();
        }

        function submitScore() {
            model.leaderboard.push({
                name: model.name, 
                points: model.points, 
                pointsPerClick: model.pointsPerClick,
            })
            model.name = '';
            model.points = 0;
            model.pointsPerClick = 1;
            updateView();
        }

        function doubleOrNothing() {
            if (Math.random() < 0.5) {
                model.points = model.points * 2;
            }
            else {
                model.points = 0;
            }
            updateView();   
        }

        function createOutput() {
            model.leaderboardOutput = '';

            for (let i = 0; i < model.leaderboard.length; i++) {
                model.leaderboardOutput += `
                <tr>
                    <td>${model.leaderboard[i].name}</td>
                    <td>${model.leaderboard[i].points}</td>
                    <td>${model.leaderboard[i].pointsPerClick}</td>
                </tr>
                `
            }
        }

        // hjelpefunksjoner
        function getSmiley(aSmileyIndex) {
            if(aSmileyIndex == 0) return '🦄'; 
            if(aSmileyIndex == 1) return '🌈';
            if(aSmileyIndex == 2) return '🍭';
            if(aSmileyIndex == 3) return '🎀';
            return '';
        }

        function getNextSmileyIndex(aSmileyIndex) {
            const maxSmileyIndex = 3;
            aSmileyIndex++;
            if (aSmileyIndex > maxSmileyIndex) {
                aSmileyIndex = 0;
            }
            return aSmileyIndex;
        }

 