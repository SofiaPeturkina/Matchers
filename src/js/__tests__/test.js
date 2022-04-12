import sorting from '../app';

test("players should be sorted by descending health level", () => {
    const players = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    const result = sorting(players);

    expect(result).toEqual(expected);

});