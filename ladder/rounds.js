/**
 * Created by Alex on 27/02/2017.
 */

function generateRound(roundNum, fixed) {
    ladder.append('g')
        .attr('id', 'round' + roundNum)
        .selectAll('circle')
        .data(teams)
        .enter().append('circle')
        .attr('cx', function(d,i) {return i*margin.gapX + margin.x; })
        .attr('cy', margin.gapY*roundNum + margin.y)
        .attr('r', 20)
        .attr('id', function(d) {return d + roundNum; })
        .style('stroke', function(d) {return colour[d]; })
        .style('stroke-opacity', fixed ? 1 : 0.5);

    ladder.select('#round' + roundNum).selectAll('text')
        .data(teams)
        .enter().append('text')
        .attr('x', function(d,i) {return i*margin.gapX + margin.x - (points[d].toString().length == 1 ? 5 : 11); })
        .attr('y', margin.gapY*roundNum + margin.y + 6)
        .attr('id', function(d) {return d + roundNum + 'text'})
        .text(function(d) {return points[d]; })
        .style('opacity', fixed ? 1 : 0.5);
}

function listRound(roundNum, fixed) {
    ladder.select('#round' + roundNum).append('text')
        .attr('x', 30)
        .attr('y', margin.gapY*roundNum + margin.y + 5)
        .text('Rd ' + roundNum)
        .style('font-weight', 'bold')
        .style('opacity', fixed ? 1 : 0.5);
}