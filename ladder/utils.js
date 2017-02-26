/**
 * Created by Alex on 27/02/2017.
 */

function listClub() {
    svg.append('g')
        .selectAll('text')
        .data(teams)
        .enter().append('text')
        .attr('x', function(d,i) {return margin.x + margin.gapX*i - 3*(d.length+2); })
        .attr('y', 40)
        .text(function(d) {return d; })
        .style('font-weight', 'bold')
        .style('font-size', '15px');
}

function addWin(win) {
    for (let i = 0; i < win.length; i++) {
        points[win[i]] += 4;
    }
}

function addDraw(draw) {
    for (let i = 0; i < draw.length; i++) {
        points[draw[i]] += 2;
    }
}

function sortByPoints() {
    let i = 1;
    while (i < teams.length) {
        let highest = true;
        let count = i - 1;
        while (highest && count >= 0) {
            if (points[teams[i]] > points[teams[count]]) {
                swapTeams(i, count);
                i -= 1;
            } else {
                highest = false;
            }
            count -= 1;
        }
        i += 1;
    }
}

function swapTeams(indexA, indexB) {
    let temp = teams[indexA];
    teams[indexA] = teams[indexB];
    teams[indexB] = temp;
}

function ripData(team, roundNum) {
    let ret = [];

    for (let i = 0; i <= roundNum; i++) {
        let el = d3.select('#' + team + i);
        let row = {'x': el.attr('cx'), 'y': el.attr('cy')};
        ret.push(row);
    }

    return ret;
}