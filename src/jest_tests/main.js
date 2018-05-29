//TODO: Test function
export const testHello = () => "Hello testing";

//TODO: Functions from Main Component

export function checkConnected(truthy) {

    return (truthy
        ? true
        : false);
}
export const nextPage = (page) => {
    let newPage = (page < 25
        ? page + 1
        : page);

    return newPage;
}
export const prevPage = (page) => {
    let newPage = (page > 1
        ? page - 1
        : page);

    return newPage;
}

export const updateAPI = (info, results) => {
    const starterState = {
        info: {},
        results: [],
        Connected: false
    };

    // * Pull COnnected from starterState
    const {Connected} = starterState;

    //* newState using spread , change Connected and results
    const newState = {
        ...starterState,
        info,
        Connected:!Connected
    };

    //* Return new State
    return newState;
}
//TODO: