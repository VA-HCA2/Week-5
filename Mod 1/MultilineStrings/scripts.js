"use strict";
$(function () {

    let data = [{ sport: "Football", bestTeam: "Dallas Cowboys" },
    { sport: "Baseball", bestTeam: "Texas Rangers" },
    { sport: "Basketball", bestTeam: "Dallas Mavericks" },
    { sport: "Hockey", bestTeam: "Dalllas Stars" },
    { sport: "Soccer", bestTeam: "FCDallas" },

    ];

    let htmlString = `
    <tr>
    <th>Sport</th>'
    <th>Team</th>
    </tr>
    `;
    $("#teamHeader").append(htmlString);

    for (let i = 0; i < data.length; i++) {
        let teams = `
        <tr>
        <td> ${data[i].sport} </td>
        <td> ${data[i].bestTeam} </td>
        </tr>
        `
        $("#teamTbody").append(teams);

    }

});