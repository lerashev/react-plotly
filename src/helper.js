const formatData = (data) => {
    // option 1
    // const xArray = [];
    // const yArray = [];
    // data.forEach((el) => {
    //     xArray.push(el["ID Year"]);
    //     yArray.push(el["Population"]);
    // });
    // const formattedData = [{ x: xArray, y: yArray }];

    // option 2
    const formattedData = data.reduce(
        (acc, next) => {
            acc[0].x.push(next["ID Year"]);
            acc[0].y.push(next["Population"]);
            return acc;
        },
        [{ x: [], y: [], name: "US" }]
    );

    return formattedData; // return an array with an object(with  new coordinates) inside
};

const getData = async () => {
    const response = await fetch(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const responseJSON = await response.json(); // get an object
    const data = responseJSON?.data; // get the data(array of objects) inside the object
    return data; // array of objects
};

export const getFormattedData = async () => {
    const data = await getData();
    const dataFormatted = formatData(data);
    return dataFormatted;
};
